import { configureStore } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";

import cakeReducer from "../features/cake/cake-slice.js";
import icecreamReducer from "../features/icecream/icecream-slice.js";
import userReducer from "../features/user/user-slice.js";

const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
