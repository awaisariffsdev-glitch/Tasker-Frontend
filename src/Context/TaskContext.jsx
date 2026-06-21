import { createContext, useEffect, useState } from "react";
import GetData from "../Services/GetData";

export const TaskContext = createContext({
    tasks: [],
    setTasks: () => { }
});


export default function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (tasks.length == 0) {
            async function FetchData() {
                setTasks(await GetData());
            }
            FetchData();
        }
        return;
    }, [])

    return (
        <>
            <TaskContext.Provider value={{tasks, setTasks}}>
                {children}
            </TaskContext.Provider>

        </>
    )
}