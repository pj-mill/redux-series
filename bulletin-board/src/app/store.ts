import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postsSlice";
import userReducer from "../features/users/userSlice";

const store = configureStore({
    reducer: { posts: postReducer, users: userReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
