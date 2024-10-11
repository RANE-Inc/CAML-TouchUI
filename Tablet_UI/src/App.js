// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';  // Import your Login component
import InMotion from './pages/inMotion';  // Import your InMotion component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Route for the Login page */}
        <Route path="/inMotion" element={<InMotion />} /> {/* Route for the InMotion page */}
      </Routes>
    </Router>
  );
};

export default App;

