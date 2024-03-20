import store from "../toolkit-slice-store/store";
import {
    getTasks,
    fetchTasks,
    loadTasks,
    addNewTask,
    completeTaskSS,
    deleteTask,
} from "../toolkit-slice-store/tasks";

export default function execApi() {
    /*
    const gettingTasks = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/tasks");
            console.log(response);
            store.dispatch(getTasks({ tasks: response.data }));
        } catch (error) {
            store.dispatch({
                type: "SHOW_ERROR",
                payload: { error: error.message },
            });
        }
    };

    gettingTasks();
    */

    //store.dispatch(fetchTasks());

    // store.dispatch({
    //     type: "apiRequest",
    //     payload: {
    //         url: "/tasks",
    //         onStart: "tasks/apiRequested",
    //         onSuccess: "tasks/getTasks",
    //         onError: "tasks/apiRequestFailed",
    //     },
    // });

    store.dispatch(loadTasks());
    store.dispatch(addNewTask({ task: "Complete This Exercise" }));

    setTimeout(() => {
        store.dispatch(completeTaskSS({ id: 5, completed: true }));
    }, 5000);

    setTimeout(() => {
        store.dispatch(deleteTask({ id: 3 }));
        store.dispatch(loadTasks());
    }, 5000);
}
