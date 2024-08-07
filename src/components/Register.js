import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/users/register', { username, email, password });
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('username', user.username);
      localStorage.setItem('email', user.email);
      localStorage.setItem('avatarUrl', 'https://via.placeholder.com/150'); // Placeholder avatar
      console.log('username', user.username)
      navigate('/login');
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
      <nav className="navbar navbar-light bg-primary fixed-top">
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
      <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh', marginTop: '60px' }}>
        <div className="card shadow p-3 mb-5 bg-white rounded" style={{ width: '400px' }}>
          <div className="card-body">
            <h3 className="card-title text-center text-primary">Register</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-danger">{error}</p>}
              <button type="submit" className="btn btn-primary btn-block mt-3">Register</button>
            </form>
            <div className="text-center mt-3">
              <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
