import React, { useState } from 'react';
import pauseIcon from './images/pause_icon.png';       // Path to pause icon
import resumeIcon from './images/resume_icon.png'; // Path to resume icon
import bathroomIcon from './images/bathroom_icon.png'; // Path to bathroom icon
import restaurantIcon from './images/restaurant_icon.png'; // Path to restaurant icon

const InMotion = () => {
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => {
    setIsPaused(!isPaused);
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
        <div className="text-lg font-semibold">
          {isPaused ? 'Paused' : 'In Progress'}
        </div>
      </div>

      {/* Main Content - Centered Vertically and Horizontally */}
      <div className="flex flex-grow items-center justify-center w-full px-4">
        {/* Buttons Container */}
        <div className="flex flex-row justify-center w-full max-w-6xl space-x-4">
          {/* Pause Button */}
          <button
            onClick={togglePause}
            className="bg-blue-600 text-white font-bold py-8 px-4 basis-1/3 flex-grow rounded-lg text-3xl shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex flex-col items-center justify-center"
          >
            {isPaused ? <img src={pauseIcon} alt="Pause Icon" className="w-80 h-80 mb-2" /> : <img src={resumeIcon} alt="Resume Icon" className="w-80 h-80 mb-2" />}
            {isPaused ? 'Resume' : 'Pause'}
          </button>

          {/* Bathroom Button */}
          <button
            onClick={toggleBathroom}
            className="bg-green-600 text-white font-bold py-8 px-4 basis-1/3 flex-grow rounded-lg text-3xl shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex flex-col items-center justify-center"
          >
            <img src={bathroomIcon} alt="Bathroom Icon" className="w-80 h-80 mb-2" />
            Bathroom
          </button>

          {/* Restaurant Button */}
          <button
            onClick={toggleRestaurant}
            className="bg-red-600 text-white font-bold py-8 px-4 basis-1/3 flex-grow rounded-lg text-3xl shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 flex flex-col items-center justify-center"
          >
            <img src={restaurantIcon} alt="Restaurant Icon" className="w-80 h-80 mb-2" />
            Restaurant
          </button>
        </div>
      </div>
    </div>
  );
};

export default InMotion;
