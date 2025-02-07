// // src/pages/inMotion.js
// import React, { useEffect, useState } from 'react';
// import ROSLIB from 'roslib';

// const InMotion = () => {
//   const [rosMessage, setRosMessage] = useState('');
//   const [rosConnected, setRosConnected] = useState(false);

//   // Create the ROSLIB ROS connection object
//   const ros = new ROSLIB.Ros({
//     url: 'ws://localhost:9090', // URL of your ROS WebSocket server
//   });

//   useEffect(() => {
//     // Connect to the ROS WebSocket server
//     ros.on('connection', () => {
//       console.log('Connected to ROS WebSocket server');
//       setRosConnected(true);
//     });

//     // Handle disconnection
//     ros.on('close', () => {
//       console.log('Disconnected from ROS WebSocket server');
//       setRosConnected(false);
//     });

//     // Subscribe to a topic (e.g., /rosout for logging messages)
//     const listener = new ROSLIB.Topic({
//       ros,
//       name: '/rosout',
//       messageType: 'rosgraph_msgs/Log',
//     });

//     listener.subscribe((message) => {
//       console.log('Received message on /rosout:', message);
//       setRosMessage(message.msg); // Update state with the received message
//     });

//     // Cleanup when component unmounts
//     return () => {
//       listener.unsubscribe();
//       ros.close();
//     };
//   }, []);

//   const sendMessage = () => {
//     const message = new ROSLIB.Message({ data: 'Hello from React!' });

//     // Publish to a topic (e.g., /my_topic)
//     const publisher = new ROSLIB.Topic({
//       ros,
//       name: '/my_topic',
//       messageType: 'std_msgs/String',
//     });

//     publisher.publish(message);
//   };

//   return (
//     <div>
//       <h1>In Motion - ROS 2 Communication</h1>
//       <p>{rosConnected ? 'Connected to ROS WebSocket Server' : 'Connecting to ROS...'}</p>
//       <p>Received from ROS 2: {rosMessage}</p>
//       <button onClick={sendMessage}>Send Message to ROS 2</button>
//     </div>
//   );
// };

// export default InMotion;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login'; // Import Login component
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
