const redux = require("redux");
const reduxLogger = require("redux-logger");

const CAKE_ORDERED = "CAKE_ORDERED";
const RESTOCK_CAKES = "RESTOCK_CAKES";

const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const RESTOCK_ICECREAMS = "RESTOCK_ICECREAMS";

const createStore = redux.createStore;
const bindStoreActionCreator = redux.bindActionCreators;

const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1,
    };
}

function restockCakes(qty = 1) {
    return {
        type: RESTOCK_CAKES,
        payload: qty,
    };
}

function orderIcecream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty,
    };
}

function restockIcecream(qty = 1) {
    return {
        type: RESTOCK_ICECREAMS,
        payload: qty,
    };
}

const initialCakeState = {
    numOfCakes: 10,
};

const initialIceCreamState = {
    numOfIceCreams: 10,
};

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            };
        case RESTOCK_CAKES:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload,
            };
        default:
            return state;
    }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1,
            };
        case RESTOCK_ICECREAMS:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload,
            };
        default:
            return state;
    }
};

const reducers = redux.combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
});

const store = createStore(reducers, applyMiddleware(logger));
console.log("Initial state: ", store.getState());

// const unsubscribe = store.subscribe(() => console.log("update store:", store.getState()));

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());

// store.dispatch(restockCakes());
// store.dispatch(restockCakes(10));

const actions = bindStoreActionCreator({ orderCake, restockCakes, orderIcecream, restockIcecream }, store.dispatch);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCakes(5);

actions.orderIcecream();
actions.orderIcecream();
actions.orderIcecream();
actions.restockIcecream(5);

// unsubscribe();
