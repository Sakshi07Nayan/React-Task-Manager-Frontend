// import React, { useState } from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types';

// const AddTask = ({ onTaskAdded }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [status, setStatus] = useState('TODO');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');
//     try {
//       const res = await axios.post('http://localhost:5000/api/tasks', { title, description, status }, {
//         headers: { 'x-auth-token': token }
//       });
//       console.log('Task Created:', res.data);
//       onTaskAdded(res.data);
//       setTitle('');
//       setDescription('');
//       setStatus('TODO');
//     } catch (err) {
//       console.error(err.response.data);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-4">
//       <div className="form-group">
//         <input type="text" className="form-control" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
//       </div>
//       <div className="form-group">
//         <input type="text" className="form-control" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
//       </div>
//       <div className="form-group">
//         <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
//           <option value="TODO">TODO</option>
//           <option value="IN_PROGRESS">IN PROGRESS</option>
//           <option value="DONE">DONE</option>
//         </select>
//       </div>
//       <button type="submit" className="btn btn-primary">Add Task</button>
//     </form>
//   );
// };

// AddTask.propTypes = {
//   onTaskAdded: PropTypes.func.isRequired,
// };

// export default AddTask;
// AddTask.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddTask = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('todo'); // Default status

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const res = await axios.post('http://localhost:5000/api/tasks', {
        title,
        description,
        status
      }, {
        headers: { 'x-auth-token': token }
      });
      console.log('Task Created:', res.data); // Debugging log
      onTaskAdded(res.data);
      setTitle('');
      setDescription('');
      setStatus('todo');
    } catch (err) {
      console.error('Error Creating Task:', err.response.data); // Debugging log
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label>Status</label>
        <select
          className="form-control"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="todo">TODO</option>
          <option value="in-progress">IN PROGRESS</option>
          <option value="done">DONE</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
};

export default AddTask;
