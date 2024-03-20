import store from "./store";
import { addTask, removeTask, completeTask, fetchTodo } from "./tasks";

export default function execLegacy() {
    //store.dispatch({ type: actionTypes.ADD_TASK, payload: { task: "Task 1" } });
    //store.dispatch({ type: actionTypes.REMOVE_TASK, payload: { id: 1 } });
    //console.log(store);

    const unsubscribe = store.subscribe(() => {
        console.log("Updated: ", store.getState());
    });

    store.dispatch(addTask("Task 1"));
    store.dispatch(completeTask(1));

    //unsubscribe();

    //store.dispatch(removeTask(1));
    //console.log(store.getState());

    //store.dispatch(fetchTodo());
}
