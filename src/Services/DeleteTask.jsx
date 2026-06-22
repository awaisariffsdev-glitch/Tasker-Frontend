import {toast} from 'react-toastify'

export default async function DeleteTask(taskId, taskData) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:8080/task/taskDelete${taskId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`


            }

        });
        if (!response.ok){
            const error = await response.json();
            toast.error("Task Can't Deleted")
        }
    } catch (error) {
        console.log(error);

    }
}