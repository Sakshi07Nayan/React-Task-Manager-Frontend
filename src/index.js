// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles.css'; // Import custom styles if any
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
