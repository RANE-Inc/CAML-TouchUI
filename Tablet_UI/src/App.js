import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/tabletLogin'; // Import Login component
import InMotion from './pages/inMotion'; // Import InMotion component
import Idle from './pages/idle'; // Import idle component
import InPickUp from './pages/inPickUp'; // Import inProgress component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Set Login as the default route */}
        <Route path="/" element={<Idle />} />

        {/* Route for login page */}
        <Route path="/tabletLogin" element={<Login />} />

        {/* Route for InMotion page */}
        <Route path="/inMotion" element={<InMotion />} />

        {/* Route for InProgress page */}
        <Route path="/inPickUp" element={<InPickUp />} />
      </Routes>
    </Router>
  );
};

export default App;
