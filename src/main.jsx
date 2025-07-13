import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';         // <– Loads Tailwind
import App from './App.jsx';  // <– Your main UI

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
