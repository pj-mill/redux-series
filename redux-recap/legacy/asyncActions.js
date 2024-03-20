const redux = require("redux");
const { thunk } = require("redux-thunk");
//const promise = require("redux-promise-middleware");
//import { default as ReduxThunk } from 'redux-thunk';
const axios = require("axios");

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
    loading: false,
    user: [],
    error: "",
};

const FETCH_USERS_REQUESTED = "FETCH_USER_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USER_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USER_FAILED";

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    };
};

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
    };
};

const fetchUsersFailed = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USERS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        case FETCH_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
    }
};

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios
            .get(USERS_URL)
            .then((response) => {
                // response.data is the users
                const users = response.data.map((user) => user.id);
                dispatch(fetchUsersSuccess(users));
            })
            .catch((error) => {
                // error.message is the error message
                dispatch(fetchUsersFailed(error.message));
            });
    };
};

const middleware = applyMiddleware(thunk);

const store = createStore(reducer, middleware);

store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(fetchUsers());
