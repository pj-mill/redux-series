import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

type User = {
    id: number;
    name: string;
};

type InitialState = {
    loading: boolean;
    users: User[];
    error: string;
};

const initialState: InitialState = {
    loading: false,
    users: [],
    error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
    return axios.get(USERS_URL).then((response) => response.data);
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
            state.loading = false;
            state.users = action.payload;
            state.error = "";
        });

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message || "Something went wrong";
        });
    },
});

export default userSlice.reducer;
