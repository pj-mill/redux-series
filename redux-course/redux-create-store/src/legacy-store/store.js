import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";
import tasks from "./tasks";

const store = createStore(
    tasks,
    devToolsEnhancer({ trace: true }) //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
