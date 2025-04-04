// src/components/WebSocketConnection.js
import React, { useEffect, useState } from 'react';

const WebSocketConnection = () => {
  const [message, setMessage] = useState(null);
  const ws = new WebSocket('ws://192.168.1.100:5000'); // Replace with actual backend WebSocket URL

  useEffect(() => {
    // WebSocket connection setup
    ws.onopen = () => {
      console.log('WebSocket connected to backend');
      ws.send('Hello from React app!');
    };

    ws.onmessage = (event) => {
      setMessage(event.data);
    };

    ws.onerror = (error) => {
      console.error('WebSocket Error:', error);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      {message && (
        <div>
          <h3>Message from Backend:</h3>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default WebSocketConnection;
