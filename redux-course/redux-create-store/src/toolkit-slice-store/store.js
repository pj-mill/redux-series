import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import tasksReducer from "./tasks";
import employeeReducer from "./employees";
import error from "../middleware/error";
import api from "../middleware/api";

const store = configureStore({
    reducer: { tasks: tasksReducer, employees: employeeReducer },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        api,
        error,
    ],
});

export default store;
