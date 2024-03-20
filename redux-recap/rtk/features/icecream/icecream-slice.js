import { createSlice } from "@reduxjs/toolkit";
import { order } from "../cake/cake-slice.js";

const initialState = {
    numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        orderIceCream: (state, action) => {
            state.numOfIceCreams--;
        },
        restockIceCream: (state, action) => {
            state.numOfIceCreams += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(order, (state) => {
            state.numOfIceCreams--;
        });
    },
});

export const { orderIceCream, restockIceCream } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
