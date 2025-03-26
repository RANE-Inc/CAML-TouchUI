import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const idle = () => {
    const navigate = useNavigate();
    const [conditionMet, setConditionMet] = useState(false);
  
    useEffect(() => {
          // Function to check if the task list is empty or not
        const checkCondition = async () => {
        try {
            const response = await fetch('https://localhost:4000/api/cart/tasks', {
            method: 'GET', credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            });
    
            if (response.ok) {
            const data = await response.json();
            // Check if the task list is empty
            return data.length === 0; 
            } else {
            console.error("Error fetching tasks:", response.status);
            return false;
            }
        } catch (error) {
            console.error("Error during condition check:", error);
            return false;
        }
        };

        const interval = setInterval(() => {
        if (checkCondition()) {
            setConditionMet(true);
            navigate('/inPickUp');
        }
        }, 5000); // Check every 5 seconds

        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'white',
        color: 'black',
        fontSize: '6rem',
        fontWeight: 'bold'
        }}>
        <div>C.A.M.L</div>
        <div style={{ fontSize: '3rem' }}>CAML Autonomous Mobility Lift</div>
        <motion.div 
            style={{ fontSize: '1.5rem', color: 'blue' }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
        >
            Waiting for next Trip!
        </motion.div>
        </div>
  );
};

export default idle;