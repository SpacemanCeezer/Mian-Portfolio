import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assuming App.jsx is your main component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Make sure 'root' is a valid DOM element
);
