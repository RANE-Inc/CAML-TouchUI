import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const resetCart = () => {
    const [status, setStatus] = useState(null);
    const navigate = useNavigate();
    const { cartId } = useParams(); // Get cartId dynamically from the URL

    useEffect(() => {
        const fetchCartStatus = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/cart/status?cartId=${cartId}`, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setStatus(data.status);

                    // When the cart status is "Idle", redirect to "/idle"
                    if (data.status === "Idle") {
                        navigate("/idle");
                    }
                } else {
                    console.error("Failed to fetch cart status");
                }
            } catch (error) {
                console.error("Error fetching cart status:", error);
            }
        };

        // Check every 3 seconds
        const interval = setInterval(fetchCartStatus, 3000);

        // Cleanup interval when the component unmounts
        return () => clearInterval(interval);
    }, [cartId, navigate]);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: 'white',
                color: 'black',
                fontSize: '3rem',
                fontWeight: 'bold',
            }}
        >
            <div>C.A.M.L Returning to Charging Station</div>
            <motion.div
                style={{ fontSize: '1.5rem', color: 'blue' }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                WARNING! DO NOT INTERRUPT MOVING VEHICLE!
            </motion.div>
        </div>
    );
};

export default resetCart;