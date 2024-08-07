import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error
    try {
      const res = await axios.post('https://task-manager-server-client.onrender.com/api/users/login', { email, password });
      login(res.data.token);
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'An error occurred');
      } else {
        setError('An error occurred');
      }
    }
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-primary">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            <i className="fa fa-calendar"></i>
          </a>
          <div>
            <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
            <Link to="/register" className="btn btn-outline-light">Signup</Link>
          </div>
        </div>
      </nav>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
        <div className="card shadow p-3 mb-5 bg-white rounded" style={{ width: '400px' }}>
          <div className="card-body">
            <h3 className="card-title text-center text-primary">Login</h3>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block mt-3">Login</button>
            </form>
            <div className="text-center mt-3">
              <p>Don't have an account? <Link to="/register">Signup</Link></p>
              <button className="btn btn-outline-primary">Login with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
