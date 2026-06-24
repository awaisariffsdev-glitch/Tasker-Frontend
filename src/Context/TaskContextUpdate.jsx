import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "./TaskContext";

export const TaskContextUpdate = createContext(null);

export default function TaskProviderUpdate({ children }) {
    const { setTasks } = useContext(TaskContext);

    const updateTask = async (taskId, formData) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(
                `http://localhost:8080/task/taskUpdate/${taskId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (!response.ok) {
                toast.error("Task update nahi hua");
                return false;
            }

            const updatedTask = await response.json();

            const updateTaskBody = updateTask.task || updateTask.data || updateTask;

            // Update context state
            setTasks((prev) =>
                prev.map((task) =>
                    task._id === taskId
                        ? { ...task, ...formData, _id: taskId } // Merges old task with new form data
                        : task
                )
            );

            toast.success("Task update ho gaya!");
            return true;

        } catch (error) {
            console.log(error);
            toast.error("Kuch gadbad ho gayi");
            return false;
        }
    };

    return (
        <TaskContextUpdate.Provider value={{ updateTask }}>
            {children}
        </TaskContextUpdate.Provider>
    );
}