// import { toast } from "react-toastify";

// export default async function UpdatedTask( taskId,taskData) {
//     try {
//         const token = localStorage.getItem("token");
//         const response = await fetch(`http://localhost:8080/task/taskUpdate/${taskId}`,
//             {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`
//                 },
//                 body: JSON.stringify(taskData)


//             });

//         if (!response.ok) {
//             const error = await response.json();
//             toast.error("Task Can't Edit");


//         };



//         const data = await response.json();
//         toast.success("Task Update Successfully");
//         return data;
//     } catch (error) {
//         console.log(error);
//         toast.error("Somethings wents wrong");
//         return null;

//     }
// }