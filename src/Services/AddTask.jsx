// import axios from "axios";
import { toast } from "react-toastify";

export default async function AddTask(taskData) {
    try {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:8080/task/taskAdd", taskData, {
            
            headers: {
                // "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(taskData),
        });

        if (!response.ok) {
            const error = await response.json();
            toast.error(error.Message || "Failed to add task");
            return null;
        }

        const json = await response.json();
        toast.success("Task added successfully!");
        return json;
    } catch (error) {
        console.log(error);
        toast.error("Server Error");
        return null;
    }
}