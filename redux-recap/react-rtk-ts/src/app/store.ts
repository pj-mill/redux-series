import { configureStore } from "@reduxjs/toolkit";

import cakeReducer from "../features/cake/cake-slice";
import icecreamReducer from "../features/icecream/icecream-slice";
import userReducer from "../features/user/user-slice";

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
