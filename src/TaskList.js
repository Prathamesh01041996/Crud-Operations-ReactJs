import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
    return (
        <div className="container my-4">
            <div className="card shadow-sm">
                <div className="card-header bg-secondary text-white">
                    <h5> List</h5>
                </div>
                <div className="card-body">
                    <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Due Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.length > 0 ? (
                                tasks.map((task) => (
                                    <TaskItem
                                        key={task.id}
                                        task={task}
                                        onUpdateTask={onUpdateTask}
                                        onDeleteTask={onDeleteTask}
                                    />
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">No tasks available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TaskList;
