import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { appendFile } from 'fs';

const root = ReactDOM.createRoot(document.getElementById('root'));
const path = require('path');
const express = require('express');
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
