// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import TaskList from './TaskList';
// import AddTask from './AddTask';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Dashboard = () => {
//   const [tasks, setTasks] = useState([]);
//   const username = localStorage.getItem('username') || 'User';
//   const avatarUrl = localStorage.getItem('avatarUrl') || 'https://via.placeholder.com/150';

//   useEffect(() => {
//     const fetchTasks = async () => {
//       const token = localStorage.getItem('token');
//       try {
//         const res = await axios.get('http://localhost:5000/api/tasks', {
//           headers: { 'x-auth-token': token }
//         });
//         setTasks(res.data);
//       } catch (err) {
//         console.error(err.response.data);
//       }
//     };
//     fetchTasks();
//   }, []);

//   const handleTaskAdded = (task) => {
//     setTasks([...tasks, task]);
//   };

//   const handleEditTask = async (task) => {
//     // Implement edit task functionality
//   };

//   const handleDeleteTask = async (id) => {
//     const token = localStorage.getItem('token');
//     try {
//       await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
//         headers: { 'x-auth-token': token }
//       });
//       setTasks(tasks.filter(task => task.id !== id));
//     } catch (err) {
//       console.error(err.response.data);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('username');
//     localStorage.removeItem('avatarUrl');
//     window.location.href = '/login'; // Redirect to login page
//   };

//   return (
//     <div className="container-fluid">
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand" href="#">Task Manager</a>
//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <img src={avatarUrl} alt="avatar" className="rounded-circle" width="40" height="40" />
//             </li>
//             <li className="nav-item ml-2">
//               <span className="navbar-text">{username}</span>
//             </li>
//             <li className="nav-item ml-3">
//               <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <div className="container mt-4">
//         <AddTask onTaskAdded={handleTaskAdded} />
//         <div className="row">
//           <div className="col-md-4">
//             <h2 className="text-center">TODO</h2>
//             <TaskList tasks={tasks.filter(task => task.status === 'TODO')} onEdit={handleEditTask} onDelete={handleDeleteTask} />
//           </div>
//           <div className="col-md-4">
//             <h2 className="text-center">IN PROGRESS</h2>
//             <TaskList tasks={tasks.filter(task => task.status === 'IN_PROGRESS')} onEdit={handleEditTask} onDelete={handleDeleteTask} />
//           </div>
//           <div className="col-md-4">
//             <h2 className="text-center">DONE</h2>
//             <TaskList tasks={tasks.filter(task => task.status === 'DONE')} onEdit={handleEditTask} onDelete={handleDeleteTask} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './TaskList';
import AddTask from './AddTask';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const username = localStorage.getItem('username') || 'User';
  const avatarUrl = localStorage.getItem('avatarUrl') || 'https://via.placeholder.com/150';

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:5000/api/tasks', {
          headers: { 'x-auth-token': token }
        });
        setTasks(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchTasks();
  }, []);

  const handleTaskAdded = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const handleEditTask = async (task) => {
    // Implement edit task functionality
  };

  const handleDeleteTask = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
        headers: { 'x-auth-token': token }
      });
      setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('avatarUrl');
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Task Manager</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <img src={avatarUrl} alt="avatar" className="rounded-circle" width="40" height="40" />
            </li>
            <li className="nav-item ml-2">
              <span className="navbar-text">{username}</span>
            </li>
            <li className="nav-item ml-3">
              <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-4">
        <AddTask onTaskAdded={handleTaskAdded} />
        <div className="row">
          <div className="col-md-4">
            <h2 className="text-center">TODO</h2>
            <TaskList tasks={tasks.filter(task => task.status === 'TODO')} onEdit={handleEditTask} onDelete={handleDeleteTask} />
          </div>
          <div className="col-md-4">
            <h2 className="text-center">IN PROGRESS</h2>
            <TaskList tasks={tasks.filter(task => task.status === 'IN_PROGRESS')} onEdit={handleEditTask} onDelete={handleDeleteTask} />
          </div>
          <div className="col-md-4">
            <h2 className="text-center">DONE</h2>
            <TaskList tasks={tasks.filter(task => task.status === 'DONE')} onEdit={handleEditTask} onDelete={handleDeleteTask} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
