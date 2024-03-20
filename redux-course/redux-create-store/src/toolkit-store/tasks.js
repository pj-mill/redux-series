import { createAction, createReducer } from "@reduxjs/toolkit";

export const addTask = createAction("ADD_TASK");
export const removeTask = createAction("REMOVE_TASK");
export const completeTask = createAction("COMPLETE_TASK");

let id = 0;
const reducer = createReducer([], {
    [addTask.type]: (state, action) => {
        state.push({
            id: ++id,
            task: action.payload.task,
            completed: false,
        });
    },
    [removeTask.type]: (state, action) => {
        const idx = state.findIndex((task) => task.id === action.payload.id);
        state.splice(idx, 1);
    },
    [completeTask.type]: (state, action) => {
        const idx = state.findIndex((task) => task.id === action.payload.id);
        state[idx].completed = true;
    },
});

export default reducer;
