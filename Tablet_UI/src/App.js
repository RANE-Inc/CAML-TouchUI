import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/tabletLogin'; // Import Login component
import InMotion from './pages/inMotion'; // Import InMotion component
import Idle from './pages/idle'; // Import idle component
import InPickUp from './pages/inPickUp'; // Import inProgress component
import AwaitingStart from './pages/awaitingStart'; // Import awaitingStart component
import EndTrip from './pages/endTrip'; // Import endTrip component
import ResetCart from './pages/resetCart'; // Import resetCart componenet

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Set Login as the default route */}
        <Route path="/" element={<Idle />} />
        <Route path="/idle" element={<Idle />} />

        {/* Route for login page */}
        <Route path="/tabletLogin/:taskId" element={<Login />} />

        {/* Route for InMotion page */}
        <Route path="/inMotion/:taskId" element={<InMotion />} />

        {/* Route for InProgress page */}
        <Route path="/inPickUp/:taskId" element={<InPickUp />} />

        {/* Route for AwaitingStart page */}
        <Route path="/awaitingStart/:taskId" element={<AwaitingStart/>} />

        {/* Route for EndTrip page */}
        <Route path="/endTrip/:cartId" element={<EndTrip/>} />

        {/* Route for ResetCart page */}
        <Route path="/resetCart/:cartId" element={<ResetCart/>} />
      </Routes>
    </Router>
  );
};

export default App;
