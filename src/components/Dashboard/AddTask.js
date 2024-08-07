// import React, { useState } from 'react';
// import axios from 'axios';

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

// export default AddTask;
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddTask = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const res = await axios.post('http://localhost:5000/api/tasks', { title, description }, {
        headers: { 'x-auth-token': token }
      });
      onTaskAdded(res.data);
      setTitle('');
      setDescription('');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
};

export default AddTask;
