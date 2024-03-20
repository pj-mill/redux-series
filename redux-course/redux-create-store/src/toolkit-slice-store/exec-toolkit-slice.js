import { addEmployee } from "./employees";
import store from "./store";
import { addTask, removeTask, completedTask } from "./tasks";

export default function execToolKitSlice() {
    store.dispatch(addTask({ task: "Task 1" }));
    store.dispatch(addTask({ task: "Task 2" }));
    console.log(store.getState());

    store.dispatch(completedTask({ id: 2 }));
    console.log(store.getState());

    store.dispatch(removeTask({ id: 1 }));
    console.log(store.getState());

    store.dispatch(addEmployee({ name: "Paul" }));
    console.log(store.getState());

    store.dispatch({
        type: "SHOW_ERROR",
        payload: { error: "Unexpected error occured" },
    });
    console.log(store.getState());
}
