import React, { useEffect } from "react";
import { loadTasks } from "../store/tasks";
import { useDispatch, useSelector } from "react-redux";

const Tasks = () => {
    //const [tasks, setTasks] = useState([]);
    const { tasks, loading } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    // console.log(taskSlice);
    useEffect(() => {
        dispatch(loadTasks());
    }, []);

    console.log(tasks);

    return (
        <>
            {loading ? (
                <p>Loading</p>
            ) : (
                <div>
                    {tasks.map((task) => (
                        <p key={task.id}>{task.task}</p>
                    ))}
                </div>
            )}{" "}
        </>
    );
};

export default Tasks;
