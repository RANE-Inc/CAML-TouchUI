import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/tabletLogin'; // Import Login component
import InMotion from './pages/inMotion'; // Import InMotion component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Set Login as the default route */}
        <Route path="/" element={<Login />} />

        {/* Route for InMotion page */}
        <Route path="/inMotion" element={<InMotion />} />
      </Routes>
    </Router>
  );
};

export default App;
