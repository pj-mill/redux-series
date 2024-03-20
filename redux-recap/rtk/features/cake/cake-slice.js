import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfCakes: 10,
};

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        order: (state, action) => {
            state.numOfCakes--;
        },
        restock: (state, action) => {
            state.numOfCakes += action.payload;
        },
    },
});

export const { order, restock } = cakeSlice.actions;
export default cakeSlice.reducer;
