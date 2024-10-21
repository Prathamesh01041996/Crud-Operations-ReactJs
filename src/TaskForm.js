import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    due_date: '',
    status: false,  
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title) return;
    onAddTask(task);
    setTask({ title: '', description: '', due_date: '', status: false });
  };

  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h5>Create New Task</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Task Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter task title"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
              />
            </div>

            <div className="form-group mb-3">
              <label>Task Description</label>
              <textarea
                className="form-control"
                placeholder="Enter task description"
                rows="3"
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
              ></textarea>
            </div>

            <div className="form-group mb-3">
              <label>Due Date</label>
              <input
                type="date"
                className="form-control"
                value={task.due_date}
                onChange={(e) => setTask({ ...task, due_date: e.target.value })}
              />
            </div>

            <div className="form-group mb-3">
              <label>Status</label>
              <select
                className="form-select"
                value={task.status}
                onChange={(e) => setTask({ ...task, status: e.target.value === 'true' })}
              >
                <option value={false}>Not Completed</option>
                <option value={true}>Completed</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success">Add Task</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
