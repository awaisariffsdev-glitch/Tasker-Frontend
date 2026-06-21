import React, { useContext } from 'react'
import { TaskContext } from '../Context/TaskContext'

const TaskBoard = () => {
    const { tasks } = useContext(TaskContext);
    console.log(tasks)
    // console.log(tasks)
    if (!localStorage.getItem("token")) {
        return (
            <>

            </>
        )
    }


    return (
        <div>
            <div className='text-light'>
                {tasks.length > 0 ? (
                    tasks.map((task) => (


                        <div key={task._id}>
                            <h2>{task.title}</h2>
                            <p>{task.description}</p>
                        </div>

                    ))
                ) : (
                    <div className="">
                        <p>No Data Found</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TaskBoard
