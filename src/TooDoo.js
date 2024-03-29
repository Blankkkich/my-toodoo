import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import "./TooDoo.css"
import {
    fetchTasks,
    addTask,
    deleteTask,
    clearAllTasks,
} from "./Slice";

export const TooDoo = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [newTaskCompleted, setNewTaskCompleted] = useState(false);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const handleAddTask = () => {
        if (newTaskTitle.trim() !== "") {
            dispatch(
                addTask({
                    id: Date.now(),
                    title: newTaskTitle,
                    completed: newTaskCompleted,
                })
            );
            setNewTaskTitle("");
            setNewTaskCompleted(false);
        }
    };

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    const handleClearAllTasks = () => {
        dispatch(clearAllTasks());
    };

    return (
        <div className="task-container">
            <h2>
                TooDoo
            </h2>
            <input
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="Enter new task title"
            />
            <label>
                Show completed:
                <input
                    type="checkbox"
                    checked={newTaskCompleted}
                    onChange={(e) => setNewTaskCompleted(e.target.checked)}
                />
            </label>
            <button onClick={handleAddTask}>Add Task</button>
            <button onClick={handleClearAllTasks}>Clear All Tasks</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title}
                        {task.completed ? " ✅︎" : " ❌"}
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};