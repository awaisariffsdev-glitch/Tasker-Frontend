// import React, { useContext } from 'react'
// import { TaskContext } from '../Context/TaskContext'

// const TaskBoard = () => {
//     const { tasks } = useContext(TaskContext);
//     // console.log(tasks)
//     // console.log(tasks)
//     if (!localStorage.getItem("token")) {
//         return (
//             <>

//             </>
//         )
//     }


//     return (
//         <div>
//             <div className='text-light'>
//                 {tasks.length > 0 ? (
//                     tasks.map((task) => (


//                         <div key={task._id}>
//                             <h2>{task.title}</h2>
//                             <p>{task.description}</p>
//                         </div>

//                     ))
//                 ) : (
//                     <div className="">
//                         <p>No Data Found</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default TaskBoard




import React, { useContext, useState } from 'react'
import { TaskContext } from '../Context/TaskContext'
import AddTaskModal from './AddTaskModel'
import EditTaskModel from './UpdateTaskModel';
import UpdateTaskModel from './UpdateTaskModel';

// import './TaskBoard.css'

const TaskBoard = () => {
    const { tasks } = useContext(TaskContext);
    const [showAddModal, setShowAddModal] = useState(false);

    const handleUpdate=()=>{
        
    }
    const handleDelete = async (taskId) => {
        if (window.confirm("Are You wants to delete The task")){

        }
    }


    if (!localStorage.getItem("token")) {
        return null
    }

    return (
        <div className="task-board-container">
            <div className="task-board-header">
                <h3>My Tasks</h3>
                <p className="task-count">{tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}</p>
            </div>
            <button
                className="btn-add-new-task"
                onClick={() => setShowAddModal(true)}
            >
                + Add Task
            </button>

            {tasks.length > 0 ? (
                <div className="tasks-grid">
                    {tasks.map((task) => (
                        <div key={task._id} className="task-card">
                            <div className="task-card-header">
                                <h3 className="task-title">{task.title}</h3>
                                <span className="task-status">{task.progress}</span>
                            </div>

                            <p className="task-description">{task.description}</p>

                            <div className="task-meta">
                                <div className="meta-item">
                                    <span className="meta-label">Due Date:</span>
                                    <span className="meta-value">{task.dueDate}</span>
                                </div>
                                <div className="meta-item">
                                    <span className="meta-label">Time:</span>
                                    <span className="meta-value">{task.dueTime}</span>
                                </div>
                            </div>

                            <div className="task-actions">
                                {/* <button className="btn-edit bg-dark text-light">Edit</button> */}
                                <UpdateTaskModel/>
                                <button className="btn-delete" onClick={handleDelete} >Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <div className="empty-icon">📋</div>
                    <h3>No Tasks Yet</h3>
                    <p>Create your first task to get started</p>
                </div>
            )}
            <div className='d-flex justify-contents-center'><AddTaskModal show={showAddModal} handleClose={() => setShowAddModal(false)} /></div>
        </div>
    )
}

export default TaskBoard