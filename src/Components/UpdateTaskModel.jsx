import React, { useState, useContext, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { TaskContext } from '../Context/TaskContext'
// import AddTask from '../Services/AddTask'
// import GetData from '../Services/GetData'
import { toast, ToastContainer } from 'react-toastify'
import { TaskContextUpdate } from '../Context/TaskContextUpdate'
// import updatedTasks from '../Context/TaskContextUpdate'
// import UpdatedTask from '../Services/UpdateTask'
// import './AddTaskModal.css'

const UpdateTaskModel = ({ show, handleClose, task }) => {
    const { setTasks } = useContext(TaskContext);
    const [loading, setLoading] = useState(false);
    const { updateTask } = useContext(TaskContextUpdate)
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        dueDate: "",
        dueTime: "",
        progress: "Pending",
        categoryId: "",
        statusId: ""
    });



    useEffect(() => {
        if (task) {
            setFormData({
                title: task.title || "",
                description: task.description || "",
                dueDate: task.dueDate || "",
                dueTime: task.dueTime || "",
                progress: task.progress || "Pending",
            })
        }
    }, [task])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title || !formData.description || !formData.dueDate || !formData.dueTime) {
            toast.error("Please fill all required fields");
            return;
        }

        // console.log(formData)

        setLoading(true);
        const result = await updateTask(task._id, formData);

        if (result) {
            // Refresh tasks from backend
            // const updatedTasks = await GetData();
            // setTasks([...updatedTasks].reverse() || []);

            // Reset form
            handleClose();
        }

        setLoading(false);
    };

    return (
        <Modal show={show} onHide={handleClose} centered className="add-task-modal" backdrop={loading ? "static" : true}>
            <Modal.Header closeButton={!loading}>
                <Modal.Title>Edit Task</Modal.Title>
            </Modal.Header>
            {/* <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                pauseOnHover={false}
                theme="dark"
                style={{ zIndex: 99999 }}
            /> */}

            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    {/* Title */}
                    <div className="form-group mb-3">
                        <label htmlFor="title" className="form-label">Task Title *</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter task title"
                            disabled={loading}
                        />
                    </div>

                    {/* Description */}
                    <div className="form-group mb-3">
                        <label htmlFor="description" className="form-label">Description *</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            rows="3"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter task description"
                            disabled={loading}
                        />
                    </div>

                    {/* Due Date & Time */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="dueDate" className="form-label">Due Date *</label>
                            <input
                                type="date"
                                className="form-control"
                                id="dueDate"
                                name="dueDate"
                                value={formData.dueDate}
                                onChange={handleChange}
                                disabled={loading}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="dueTime" className="form-label">Due Time *</label>
                            <input
                                type="time"
                                className="form-control"
                                id="dueTime"
                                name="dueTime"
                                value={formData.dueTime}
                                onChange={handleChange}
                                disabled={loading}
                            />
                        </div>
                    </div>

                    {/* Progress Status */}
                    <div className="form-group mb-3">
                        <label htmlFor="progress" className="form-label">Progress Status</label>
                        <select
                            className="form-control"
                            id="progress"
                            name="progress"
                            value={formData.progress}
                            onChange={handleChange}
                            disabled={loading}
                        >
                            <option value="Pending">Pending</option>
                            <option value="in Process">In Process</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} disabled={loading}>
                    Cancel
                </Button>
                <Button
                    variant="primary"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="btn-add-task"
                >
                    {loading ? "Updating..." : "Update Task"}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UpdateTaskModel