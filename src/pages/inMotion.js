// src/pages/InMotion.js
import React, { useState } from 'react';

const InMotion = () => {
  const [isPaused, setIsPaused] = useState(false); // State to track whether the system is paused

  const togglePause = () => {
    setIsPaused(!isPaused); // Toggle the pause state
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Status Tab */}
      <div className="bg-blue-600 text-white py-2 px-4 rounded-md mb-6">
        {isPaused ? 'Paused' : 'In Progress'}
      </div>

      {/* Pause Button */}
      <button
        onClick={togglePause}
        className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-2xl shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {isPaused ? 'Resume' : 'Pause'} {/* Button text changes based on state */}
      </button>
    </div>
  );
};

export default InMotion;
