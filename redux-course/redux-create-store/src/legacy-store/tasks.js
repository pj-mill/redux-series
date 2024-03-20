export const actionTypes = {
    ADD_TASK: "ADD_TASK",
    UPDATE_TASK: "UPDATE_TASK",
    REMOVE_TASK: "REMOVE_TASK",
    COMPLETE_TASK: "COMPLETE_TASK",
};

let id = 0;

export const addTask = (task) => {
    return { type: actionTypes.ADD_TASK, payload: { task } };
};

export const removeTask = (id) => {
    return { type: actionTypes.REMOVE_TASK, payload: { id } };
};

export const completeTask = (id) => {
    return { type: actionTypes.COMPLETE_TASK, payload: { id } };
};

export const fetchTodo = () => async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const task = await res.json();
    console.log(task);

    dispatch(addTask(task.title));
};

export default function tasks(state = [], action) {
    console.log(action);
    switch (action.type) {
        case actionTypes.ADD_TASK:
            id++;
            return [
                ...state,
                {
                    id,
                    task: action.payload.task,
                    completed: false,
                },
            ];
        case actionTypes.REMOVE_TASK:
            return state.filter((task) => task.id !== action.payload.id);
        case actionTypes.COMPLETE_TASK:
            return state.map((task) => {
                return task.id === action.payload.id
                    ? { ...task, completed: true }
                    : task;
            });
        default:
            return state;
    }
}
