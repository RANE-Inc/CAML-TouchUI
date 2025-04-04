import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AwaitingStart = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [taskData, setTaskData] = useState(null);
  const { taskId } = useParams(); // Should Get taskId dynamically from the URL hopefully

  useEffect(() => {
    // Fetch task data from backend
    const fetchTaskData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/cart/tasks`, {
          method: 'GET', credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
        });

        const data = await response.json();
        setTaskData(data);
      } catch (error) {
        console.error('Error fetching task data:', error);
      }
    };

    fetchTaskData();

    // Set up timeouts
    const warningTimeout = setTimeout(() => setShowPopup(true), 30000); // Show warning at 30s
    const redirectTimeout = setTimeout(() => navigate('/tabletLogin'), 60000); // Redirect at 1 min

    return () => {
      clearTimeout(warningTimeout);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  const handleStart = () => {
    if (taskData && taskData.length > 0) {
      const taskId = taskData[0].taskId;
      navigate(`/inMotion/${taskId}`); // Fixed string interpolation
    } else {
      console.log('No task data available');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'white'
    }}>
      <div style={{
        fontSize: '1.5rem',
        marginBottom: '20px',
        fontWeight: 'bold',
        color: 'black'
      }}>
        Please unload your luggage and press START
      </div>
      <button
        onClick={handleStart}
        style={{
          fontSize: '5rem',
          padding: '80px 100px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer'
        }}
      >
        START
      </button>

      {showPopup && (
        <div style={{
          position: 'fixed',
          bottom: '15%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '20px',
          borderRadius: '10px'
        }}>
          <p>Please press "START" within 30 seconds, or you will be redirected.</p>
        </div>
      )}
    </div>
  );
};

export default AwaitingStart;
