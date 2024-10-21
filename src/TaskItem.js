import React, { useState } from 'react';

const TaskItem = ({ task, onUpdateTask, onDeleteTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTask, setEditTask] = useState({ ...task });

    const handleSave = () => {
        onUpdateTask(editTask);
        setIsEditing(false);
    };

    return (
        <tr>
            {isEditing ? (
                <>
                    <td>{task.id}</td>
                    <td><input className="form-control" value={editTask.title} onChange={(e) => setEditTask({ ...editTask, title: e.target.value })} /></td>
                    <td><input className="form-control" value={editTask.description} onChange={(e) => setEditTask({ ...editTask, description: e.target.value })} /></td>
                    <td><input className="form-control" type="date" value={editTask.due_date} onChange={(e) => setEditTask({ ...editTask, due_date: e.target.value })} /></td>
                    <td>
                        <select className="form-select" value={editTask.status} onChange={(e) => setEditTask({ ...editTask, status: e.target.value })}>
                            <option value={false}>Not Completed</option>
                            <option value={true}>Completed</option>
                        </select>
                    </td>
                    <td>
                        <button className="btn btn-success btn-sm me-2" onClick={handleSave}>Save</button>
                        <button className="btn btn-danger btn-sm" onClick={() => setIsEditing(false)}>Cancel</button>
                    </td>
                </>
            ) : (
                <>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.due_date}</td>
                    <td>{task.status ? 'Completed' : 'Not Completed'}</td>
                    <td>
                        <button className="btn btn-warning btn-sm me-2" onClick={() => setIsEditing(true)}>Edit</button>
                        <button className="btn btn-danger btn-sm" onClick={() => onDeleteTask(task.id)}>Delete</button>
                    </td>
                </>
            )}
        </tr>
    );
};

export default TaskItem;
