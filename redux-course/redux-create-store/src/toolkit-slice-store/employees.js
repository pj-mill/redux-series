import { createSlice } from "@reduxjs/toolkit";

let id = 0;

let slicer = createSlice({
    name: "employees",
    initialState: [],
    reducers: {
        addEmployee: (state, action) => {
            state.push({
                id: ++id,
                name: action.payload.name,
            });
        },
    },
});

export const { addEmployee } = slicer.actions;
export default slicer.reducer;
