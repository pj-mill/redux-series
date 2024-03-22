import { createSlice } from "@reduxjs/toolkit";

type User = {
    id: string;
    name: string;
};

type InitialState = {
    users: User[];
};

const initialState: InitialState = {
    users: [
        {
            id: "1",
            name: "Paul",
        },
        {
            id: "2",
            name: "John",
        },
    ],
};
const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
});

export const selectAllUsers = (state: { users: InitialState }) => state.users.users;
export default userSlice.reducer;
