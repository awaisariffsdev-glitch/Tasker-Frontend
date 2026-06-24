

import React, { useContext, useState } from 'react'
import { TaskContext } from '../Context/TaskContext'
import AddTaskModal from './AddTaskModel'
import UpdateTaskModel from './UpdateTaskModel';  // ✅ import
import { toast } from 'react-toastify';
import { TaskContextDelete } from '../Context/TaskContextDelete';

const TaskBoard = () => {
    const { tasks, setTasks } = useContext(TaskContext);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);  // ✅ already hai
    const [taskToEdit, setTaskToEdit] = useState(null);  // ✅ already hai
    const { deleteTask } = useContext(TaskContextDelete)

    const handleEditClick = (task) => {
        setTaskToEdit(task);
        setShowEditModal(true);
    }

    const handleDelete = async (taskId) => {
        if (!window.confirm("Wants to Delete Task!")) return;
        await deleteTask(taskId)
    }

    if (!localStorage.getItem("token")) {
        return null
    }

    return (
        <div className="task-board-container " >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }} className=''>
                <div>
                    <h3 style={{ margin: 0, fontFamily: "inherit" }} className=''>My Tasks</h3>
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

            {tasks.length > 0 ? (
                <div className="tasks-grid">
                    {tasks.map((task) => (
                        <div key={task._id} className="task-card">
                            <div className="task-card-header">
                                <h3 className="task-title text-capitalize fw-normal" >{task.title}</h3>
                                <span className="task-status">{task.progress}</span>
                            </div>
                            {/* <p>{task.description}</p> */}
                            {/* <p className="task-description">{task.description.length > 30 ? (`$
                            {task.description.substring(1, 100)}...`) : (task.description)}</p> */}
                            <p className="task-description">{task.description && task.description.length > 50 ? (`${task.description.substring(0, 50)}...`) : (task.description)}</p>
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
                                <button
                                    className="btn-edit bg-dark text-light"
                                    onClick={() => handleEditClick(task)}  // ✅ Edit button
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn-delete"
                                    onClick={() => handleDelete(task._id)}
                                >
                                    Delete
                                </button>
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

            {/* ✅ Modal yahan render karo */}
            <UpdateTaskModel
                show={showEditModal}
                task={taskToEdit}
                handleClose={() => setShowEditModal(false)}
            />

            <AddTaskModal show={showAddModal} handleClose={() => setShowAddModal(false)} />
        </div>
    )
}

export default TaskBoard