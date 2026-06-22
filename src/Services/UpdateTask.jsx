import { toast } from "react-toastify";

export default async function UpdatedTask(taskData, taskId) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:8080/task/taskUpdate${taskId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }


        });

        if (!response.ok) {
            const error = await response.json();
            toast.error("Task Can't Edit")
        }
    } catch (error) {
        console.log(error);

    }
}