import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "./TaskContext";




export const TaskContextDelete = createContext(null);
export default function TaskProviderDelete({ children }) {
    // const [task, setTask] = useState([]);
    const { setTasks } = useContext(TaskContext);

    const deleteTask = async (taskId) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`http://localhost:8080/task/taskDelete/${taskId}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }


            );

            if (!response.ok) {
                await response.json();
                toast.error("Somethings went error");
                return false;
            }


            setTasks((prev) =>
                prev.filter((task) =>
                    task._id !== taskId
                )
            );
            toast.success("Task Delete Successfully")
            return true;


        } catch (error) {
            console.log(error);
            toast.error("Somethings wents error");
            return;
        }
    }


    return (
        <>
            <TaskContextDelete.Provider value={{  deleteTask }}>
                {children}
            </TaskContextDelete.Provider>

        </>
    )
}