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



import { createContext, useEffect, useState } from "react";
import GetData from "../Services/GetData";

export const TaskContext = createContext({
    tasks: [],
    setTasks: () => { }
});

export default function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function FetchData() {
            const data = await GetData();
            setTasks(data || []);
        }

        const token = localStorage.getItem("token");
        if (token) {
            FetchData();
        } else {
            setTasks([]);
        }
    }, [])

    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    )
}