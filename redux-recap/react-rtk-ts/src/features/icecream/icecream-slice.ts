import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { order as orderCake } from "../cake/cake-slice";

type InitialState = {
    numOfIceCreams: number;
};

const initialState: InitialState = {
    numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        orderIceCream: (state) => {
            state.numOfIceCreams--;
        },
        restockIceCream: (state, action: PayloadAction<number>) => {
            state.numOfIceCreams += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(orderCake, (state) => {
            state.numOfIceCreams--;
        });
    },
});

export const { orderIceCream, restockIceCream } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
