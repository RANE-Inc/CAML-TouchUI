import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const inProgress = () => {
    //TODO: need to add logic to be able to check when it reached the users location AKA the start location and than moves to tabletLogin.js

    return (
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'white',
        color: 'black',
        fontSize: '3rem',
        fontWeight: 'bold'
        }}>
        <div>C.A.M.L Moving to Pick Up Location</div>
        <motion.div 
            style={{ fontSize: '1.5rem', color: 'blue' }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
        >
            WARNING! DO NOT INTERUPT MOVING VEHICLE!
        </motion.div>
        </div>
  );
};

export default inProgress;