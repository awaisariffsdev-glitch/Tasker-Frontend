// import { createContext, useEffect, useState } from "react";
// import GetData from "../Services/GetData";

// export const TaskContext = createContext({
//     tasks: [],
//     setTasks: () => { }
// });


// export default function TaskProvider({ children }) {
//     const [tasks, setTasks] = useState([]);

//     useEffect(() => {
//         if (tasks.length == 0) {
//             async function FetchData() {
//                 const data = setTasks(await GetData());
//             }
//             const token = localStorage.getItem("token");
//             if (token) {
//                 FetchData();

//             }
//             else {
//                 setTasks([])
//             }
//         }

//         return;
//     }, [localStorage.getItem("token")])

//     return (
//         <>
//             <TaskContext.Provider value={{ tasks, setTasks }}>
//                 {children}
//             </TaskContext.Provider>

//         </>
//     )
// }



import { createContext, useEffect, useState, useContext } from "react";
import GetData from "../Services/GetData";
import { UserContext } from "./UserContext"; // ✅ Import UserContext


export const TaskContext = createContext({
    tasks: [],
    setTasks: () => { }
});

export default function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);
    const { loggedIn } = useContext(UserContext); // ✅ Retrieve loggedIn state

    useEffect(() => {
        async function FetchData() {
            const data = await GetData();
            setTasks(data || []);
        }

        // ✅ Re-fetch data instantly when user logs in, and clear it when they log out
        if (loggedIn) {
            FetchData();
        } else {
            setTasks([]);
        }
    }, [loggedIn]) // ✅ Depend on loggedIn instead of empty array

    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    )
}