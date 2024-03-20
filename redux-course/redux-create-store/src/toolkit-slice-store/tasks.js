import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import taskHttp from "../utils/http";
import { apiCallBegan } from "./api";

let id = 0;

const initialState = {
    tasks: [],
    loading: false,
    error: null,
};

// export const fetchTasks = createAsyncThunk(
//     "fetchTasks",
//     async (a, { rejectWithValue }) => {
//         try {
//             const response = await taskHttp.get("/tasks");
//             return { tasks: response.data };
//         } catch (error) {
//             return rejectWithValue({ error: error.message });
//         }
//     }
// );

const slicer = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        apiRequested: (state, action) => {
            state.loading = true;
        },
        apiRequestFailed: (state, action) => {
            state.loading = false;
        },
        getTasks: (state, action) => {
            //console.log(action.payload);
            state.tasks = action.payload;
            //console.log(state.tasks);
            state.loading = false;
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload);
            state.loading = false;
        },
        removeTask: (state, action) => {
            const idx = state.tasks.findIndex((task) => task.id === action.payload.id);
            state.tasks.splice(idx, 1);
            state.loading = false;
        },
        completedTask: (state, action) => {
            console.log(action.payload);
            console.log(state.tasks);
            const idx = state.tasks.findIndex((task) => task.id === action.payload.id);
            state.tasks[idx].completed = action.payload.completed;
            state.loading = false;
        },
    },
    // extraReducers: {
    //     [fetchTasks.pending]: (state, action) => {
    //         state.loading = true;
    //     },
    //     [fetchTasks.fulfilled]: (state, action) => {
    //         state.tasks = action.payload.tasks;
    //         state.loading = false;
    //     },
    //     [fetchTasks.rejected]: (state, action) => {
    //         state.error = action.payload.error;
    //         state.loading = false;
    //     },
    // },
});

export const { apiRequested, apiRequestFailed, addTask, removeTask, completedTask, getTasks } = slicer.actions;

export default slicer.reducer;

const url = "/tasks";

export const loadTasks = () =>
    apiCallBegan({
        url,
        onStart: apiRequested.type,
        onSuccess: getTasks.type,
        onError: apiRequestFailed.type,
    });

export const addNewTask = (data) =>
    apiCallBegan({
        url,
        method: "POST",
        data,
        onStart: apiRequested.type,
        onSuccess: addTask.type,
        onError: apiRequestFailed.type,
    });

export const completeTaskSS = (task) =>
    apiCallBegan({
        url: `${url}/${task.id}`,
        method: "PATCH",
        data: task,
        onStart: apiRequested.type,
        onSuccess: completedTask.type,
        onError: apiRequestFailed.type,
    });

export const deleteTask = (task) =>
    apiCallBegan({
        // /tasks/6
        url: `${url}/${task.id}`,
        method: "DELETE",
        onSuccess: removeTask.type,
    });
