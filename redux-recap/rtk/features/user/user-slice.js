import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
    loading: false,
    users: [],
    error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
    return axios.get(USERS_URL).then((response) => {
        return response.data.map((user) => user.name);
    });
});

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.loading = false;
            state.error = "";
        });

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default userSlice.reducer;
