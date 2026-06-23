// // import React, { useContext } from 'react'
// // import { TaskContext } from '../Context/TaskContext'

// // const TaskBoard = () => {
// //     const { tasks } = useContext(TaskContext);
// //     // console.log(tasks)
// //     // console.log(tasks)
// //     if (!localStorage.getItem("token")) {
// //         return (
// //             <>

// //             </>
// //         )
// //     }


// //     return (
// //         <div>
// //             <div className='text-light'>
// //                 {tasks.length > 0 ? (
// //                     tasks.map((task) => (


// //                         <div key={task._id}>
// //                             <h2>{task.title}</h2>
// //                             <p>{task.description}</p>
// //                         </div>

// //                     ))
// //                 ) : (
// //                     <div className="">
// //                         <p>No Data Found</p>
// //                     </div>
// //                 )}
// //             </div>
// //         </div>
// //     )
// // }

// // export default TaskBoard




// import React, { useContext, useState } from 'react'
// import { TaskContext } from '../Context/TaskContext'
// import AddTaskModal from './AddTaskModel'
// import EditTaskModel from './UpdateTaskModel';
// import UpdateTaskModel from './UpdateTaskModel';

// // import './TaskBoard.css'

// const TaskBoard = () => {
//     const { tasks } = useContext(TaskContext);
//     const [showAddModal, setShowAddModal] = useState(false);

//     const handleUpdate = () => {

//     }
//     const handleDelete = async (taskId) => {
//         if (window.confirm("Are You wants to delete The task")) {

//         }
//     }


//     if (!localStorage.getItem("token")) {
//         return null
//     }

//     return (
//         < className="task-board-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <div>
//                 <h3 style={{ margin: 0 }}>My Tasks</h3>
//                 <p className="task-count">{tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}</p>
//             </div>
//             <button
//                 style={{
//                     background: '#1a1a2e',
//                     color: '#e0e0ff',
//                     border: '0.5px solid #3a3a5c',
//                     borderRadius: '8px',
//                     padding: '6px 14px',
//                     fontSize: '13px',
//                     cursor: 'pointer',
//                     fontWeight: '500'
//                 }}
//                 onClick={() => setShowAddModal(true)}
//             >
//                 + Add Task
//             </button>



//             {
//                 tasks.length > 0 ? (
//                     <div className="tasks-grid">
//                         {tasks.map((task) => (
//                             <div key={task._id} className="task-card">
//                                 <div className="task-card-header">
//                                     <h3 className="task-title">{task.title}</h3>
//                                     <span className="task-status">{task.progress}</span>
//                                 </div>

//                                 <p className="task-description">{task.description}</p>

//                                 <div className="task-meta">
//                                     <div className="meta-item">
//                                         <span className="meta-label">Due Date:</span>
//                                         <span className="meta-value">{task.dueDate}</span>
//                                     </div>
//                                     <div className="meta-item">
//                                         <span className="meta-label">Time:</span>
//                                         <span className="meta-value">{task.dueTime}</span>
//                                     </div>
//                                 </div>

//                                 <div className="task-actions">
//                                     {/* <button className="btn-edit bg-dark text-light">Edit</button> */}
//                                     <UpdateTaskModel />
//                                     <button className="btn-delete" onClick={handleDelete} >Delete</button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <div className="empty-state">
//                         <div className="empty-icon">📋</div>
//                         <h3>No Tasks Yet</h3>
//                         <p>Create your first task to get started</p>
//                     </div>
//                 )
//             }
//             <div className='d-flex justify-contents-center'><AddTaskModal show={showAddModal} handleClose={() => setShowAddModal(false)} /></div>
//         </div >
//     )
// }

// export default TaskBoard


import React, { useContext, useState } from 'react'
import { TaskContext } from '../Context/TaskContext'
import AddTaskModal from './AddTaskModel'
import UpdateTaskModel from './UpdateTaskModel';
// import DeleteTask from '../Services/DeleteTask';
import { toast } from 'react-toastify';
import { TaskContextDelete } from '../Context/TaskContextDelete';
// import { TaskContextDelete } from '../Context/TaskContextDelete'
const TaskBoard = () => {
    const { tasks, setTasks } = useContext(TaskContext);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);
    const { deleteTask } = useContext(TaskContextDelete)

    const handleEditClick = (task) => {
        setTaskToEdit(task);
        setShowEditModal(true);
    }

   const handleDelete=async( taskId)=> {
        if (!window.confirm("Wants to Delete Task!"))
        return;
        await deleteTask(taskId)

    }

    if (!localStorage.getItem("token")) {
        return null
    }

    return (
        <div className="task-board-container">

            {/* Header row - My Tasks + Add Task button */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div>
                    <h3 style={{ margin: 0 }}>My Tasks</h3>
                    <p className="task-count" style={{ margin: 0 }}>{tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}</p>
                </div>
                <button
                    style={{
                        background: '#1a1a2e',
                        color: '#e0e0ff',
                        border: '0.5px solid #3a3a5c',
                        borderRadius: '8px',
                        padding: '6px 14px',
                        fontSize: '13px',
                        cursor: 'pointer',
                        fontWeight: '500'
                    }}
                    onClick={() => setShowAddModal(true)}
                >
                    + Add Task
                </button>
            </div>

            {/* Tasks below */}
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
                                <button className="btn-edit bg-dark text-light" onClick={() => handleEditClick(task)}>
                                    Edit
                                </button>

                                {/* <UpdateTaskModel
                                    show={showEditModal}
                                    task={taskToEdit}
                                    handleClose={() => setShowEditModal(false)}
                                /> */}
                                <button className="btn-delete" onClick={() => handleDelete(task._id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <div className="empty-icon text-dark">📋</div>
                    <h3 className='text-dark'>No Tasks Yet</h3>
                    <p>Create your first task to get started</p>
                </div>
            )}

            <div className='d-flex justify-contents-center'>
                <AddTaskModal show={showAddModal} handleClose={() => setShowAddModal(false)} />
            </div>

        </div>
    )
}

export default TaskBoard