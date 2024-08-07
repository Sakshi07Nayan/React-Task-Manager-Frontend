// import React from 'react';
// import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const TaskList = ({ tasks, onEdit, onDelete }) => {
//   console.log('Rendering TaskList with tasks:', tasks); // Log tasks to check if they are passed correctly

//   return (
//     <div>
//       {tasks.map(task => (
//         <div key={task._id} className="card mb-2">
//           <div className="card-body">
//             <h5 className="card-title">{task.title}</h5>
//             <p className="card-text">{task.description}</p>
//             <p className="card-text"><small>Created on: {new Date(task.createdAt).toLocaleDateString()}</small></p>
//             <div className="btn-group">
//               <button className="btn btn-primary" onClick={() => onEdit(task)}>Edit</button>
//               <button className="btn btn-danger" onClick={() => onDelete(task._id)}>Delete</button>
//               <button className="btn btn-secondary">View Details</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// TaskList.propTypes = {
//   tasks: PropTypes.array.isRequired,
//   onEdit: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired
// };

// export default TaskList;
