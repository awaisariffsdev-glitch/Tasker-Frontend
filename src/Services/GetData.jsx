import { toast } from "react-toastify";

export default async function GetData() {
    try {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:8080/task/findAll", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            toast.error("Data Not Found");
        }
        const json = await response.json();
        // console.log(JSON.stringify(json))
        return json;
    } catch (error) {
        console.log(error);
        toast.error("Server Error");
        return;
    }
}