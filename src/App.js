// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Register';
import Login from './components/Login';

const ProtectedRoute = ({ element }) => {
  const { auth } = useAuth();
  return auth ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute element={<Dashboard />} />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
