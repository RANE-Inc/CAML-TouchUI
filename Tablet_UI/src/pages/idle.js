import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const idle = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
        // Function to check if there are pending tasks
        const checkCondition = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/cart/tasks', {
                    method: 'GET', 
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log("Task List:", data);

                    // Check if there are tasks
                    if (data.length > 0) {
                        const firstTask = data[0]; // Assuming first task is the next one to be handled
                        return firstTask.taskId; // Return the taskId instead of a boolean
                    }
                } else {
                    console.error("Error fetching tasks:", response.status);
                }
            } catch (error) {
                console.error("Error during condition check:", error);
            }
            return null; // Return null if no task found
        };

        const interval = setInterval(async () => {
            const taskId = await checkCondition();
            if (taskId) {
                navigate(`/inPickUp/${taskId}`); // Navigate with taskId
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
