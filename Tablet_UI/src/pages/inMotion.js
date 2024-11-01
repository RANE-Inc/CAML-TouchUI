// src/pages/InMotion.js
import React, { useState } from 'react';


const InMotion = () => {
  const [isPaused, setIsPaused] = useState(false); // State to track whether the system is paused

  const togglePause = () => {
    setIsPaused(!isPaused); // Toggle the pause state
  };

  const toggleBathroom = () => {
    // Add logic for Bathroom here
  };

  const toggleRestaurant = () => {
    // Add logic for Restaurant here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Bar */}
      <div className="flex justify-between items-center bg-blue-600 text-white py-4 px-8">
        <h1 className="text-xl font-bold">InMotion App</h1>
        {/* Status Tab */}
        <div className="text-lg font-semibold">
          {isPaused ? 'Paused' : 'In Progress'}
        </div>
      </div>

      {/* Main Content - Centered Vertically and Horizontally */}
      <div className="flex flex-grow items-center justify-center w-full px-4">
        {/* Buttons Container */}
        <div className="flex flex-row w-full max-w-2xl space-x-4">
          {/* Pause Button */}
          <button
            onClick={togglePause}
            className="bg-blue-600 text-white font-bold py-10 px-6 min-h-[120px] flex-grow rounded-full text-5xl shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex flex-col items-center justify-center"
          >
            <img src="/path/to/pause-icon.png" alt="Pause" className="w-12 h-12 mb-2" />
            {isPaused ? 'Resume' : 'Pause'}
          </button>

          {/* Bathroom Button */}
          <button
            onClick={toggleBathroom}
            className="bg-green-600 text-white font-bold py-10 px-6 min-h-[120px] flex-grow rounded-full text-5xl shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex flex-col items-center justify-center"
          >
            <img src="/path/to/bathroom-icon.png" alt="Bathroom" className="w-12 h-12 mb-2" />
            Bathroom
          </button>

          {/* Restaurant Button */}
          <button
            onClick={toggleRestaurant}
            className="bg-red-600 text-white font-bold py-10 px-6 min-h-[120px] flex-grow rounded-full text-5xl shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 flex flex-col items-center justify-center"
          >
            <img src="./images/restaurant_icon.png" alt="Restaurant" className="w-12 h-12 mb-2" />
            Restaurant
          </button>
        </div>
      </div>
    </div>
  );
};

export default InMotion;
