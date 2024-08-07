import React from 'react';

const Task = ({ task, onEdit, onDelete }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
        <p className="card-text"><small className="text-muted">Created at {new Date(task.createdAt).toLocaleString()}</small></p>
        <button className="btn btn-secondary mr-2" onClick={() => onEdit(task)}>Edit</button>
        <button className="btn btn-danger mr-2" onClick={() => onDelete(task.id)}>Delete</button>
        <button className="btn btn-info">View Details</button>
      </div>
    </div>
  );
};

export default Task;
