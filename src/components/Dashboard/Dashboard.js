import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './AddTask';
import EditTaskModal from './EditTask';
import ViewTaskModal from './ViewModel';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const username = localStorage.getItem('username') || 'User';
  const avatarUrl = localStorage.getItem('avatarUrl') || 'https://via.placeholder.com/150';

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('https://task-manager-server-client.onrender.com/api/tasks', {
          headers: { 'x-auth-token': token }
        });
        console.log('Fetched Tasks:', res.data);
        setTasks(res.data);
      } catch (err) {
        console.error('Error Fetching Tasks:', err.response.data);
      }
    };
    fetchTasks();
  }, []);

  const handleTaskAdded = (newTask) => {
    console.log('New Task Added:', newTask);
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setShowEditModal(true);
  };

  const handleViewTask = (task) => {
    setSelectedTask(task);
    setShowViewModal(true);
  };

  const handleTaskUpdated = (updatedTask) => {
    setTasks(tasks.map(task => (task._id === updatedTask._id ? updatedTask : task)));
  };

  const handleDeleteTask = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`https://task-manager-server-client.onrender.com/api/tasks/${id}`, {
        headers: { 'x-auth-token': token }
      });
      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) {
      console.error('Error Deleting Task:', err.response.data);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('avatarUrl');
    window.location.href = '/login'; // Redirect to login page
  };

  const renderTaskList = (status) => {
    const filteredTasks = tasks.filter(task => task.status === status);
    console.log(`Filtered Tasks for ${status}:`, filteredTasks);

    return (
      <div>
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <div key={task._id} className="card mb-2" style={{ backgroundColor: 'rgb(207, 223, 239)' }}>
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text">{task.description}</p>
                <p className="card-text"><small>Created on: {task.createdAt ? new Date(task.createdAt).toLocaleDateString() : 'N/A'}</small></p>
                <div className="btn-group">
                  <button className="btn btn-primary" onClick={() => handleEditTask(task)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDeleteTask(task._id)}>Delete</button>
                  <button className="btn btn-secondary" onClick={() => handleViewTask(task)}>View Details</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No tasks available.</p>
        )}
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><b>Task Manager</b></a>
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
            {renderTaskList('todo')}
          </div>
          <div className="col-md-4">
            <h2 className="text-center">IN PROGRESS</h2>
            {renderTaskList('in-progress')}
          </div>
          <div className="col-md-4">
            <h2 className="text-center">DONE</h2>
            {renderTaskList('done')}
          </div>
        </div>
      </div>
      {selectedTask && (
        <EditTaskModal
          show={showEditModal}
          handleClose={() => setShowEditModal(false)}
          task={selectedTask}
          onTaskUpdated={handleTaskUpdated}
        />
      )}
      {selectedTask && (
        <ViewTaskModal
          show={showViewModal}
          handleClose={() => setShowViewModal(false)}
          task={selectedTask}
        />
      )}
    </div>
  );
};

export default Dashboard;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AddTask from './AddTask';

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
//         console.log('Fetched Tasks:', res.data); // Debugging log
//         setTasks(res.data);
//       } catch (err) {
//         console.error('Error Fetching Tasks:', err.response.data); // Debugging log
//       }
//     };
//     fetchTasks();
//   }, []);

//   const handleTaskAdded = (newTask) => {
//     console.log('New Task Added:', newTask); // Debugging log
//     setTasks(prevTasks => [...prevTasks, newTask]);
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
//       setTasks(tasks.filter(task => task._id !== id));
//     } catch (err) {
//       console.error('Error Deleting Task:', err.response.data); // Debugging log
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('username');
//     localStorage.removeItem('avatarUrl');
//     window.location.href = '/login'; // Redirect to login page
//   };

//   const renderTaskList = (status) => {
//     const filteredTasks = tasks.filter(task => task.status === status);
//     console.log(`Filtered Tasks for ${status}:`, filteredTasks); // Debugging log

//     return (
//       <div>
//         {filteredTasks.length > 0 ? (
//           filteredTasks.map(task => (
//             <div key={task._id} className="card mb-2">
//               <div className="card-body">
//                 <h5 className="card-title">{task.title}</h5>
//                 <p className="card-text">{task.description}</p>
//                 <p className="card-text"><small>Created on: {task.createdAt ? new Date(task.createdAt).toLocaleDateString() : 'N/A'}</small></p>
//                 <div className="btn-group">
//                   <button className="btn btn-primary" onClick={() => handleEditTask(task)}>Edit</button>
//                   <button className="btn btn-danger" onClick={() => handleDeleteTask(task._id)}>Delete</button>
//                   <button className="btn btn-secondary">View Details</button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No tasks available.</p>
//         )}
//       </div>
//     );
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
//             {renderTaskList('todo')}
//           </div>
//           <div className="col-md-4">
//             <h2 className="text-center">IN PROGRESS</h2>
//             {renderTaskList('in-progress')}
//           </div>
//           <div className="col-md-4">
//             <h2 className="text-center">DONE</h2>
//             {renderTaskList('done')}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
