import store from "./store";
import { addTask, removeTask, completeTask } from "./tasks";

export default function execToolKit() {
    store.dispatch(addTask({ task: "Task 1" }));
    store.dispatch(addTask({ task: "Task 2" }));
    console.log(store.getState());

    store.dispatch(completeTask({ id: 2 }));
    console.log(store.getState());

    store.dispatch(removeTask({ id: 1 }));
    console.log(store.getState());
}
