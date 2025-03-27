import pauseIcon from './images/pause_icon.png';       // Path to pause icon
import resumeIcon from './images/resume_icon.png'; // Path to resume icon
import bathroomIcon from './images/bathroom_icon.png'; // Path to bathroom icon
import restaurantIcon from './images/restaurant_icon.png'; // Path to restaurant icon
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
 
 const inMotion = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [showRestaurantPopup, setShowRestaurantPopup] = useState(false);
    const [showWashroomPopup, setShowWashroomPopup] = useState(false);
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(null);
    const navigate = useNavigate();
    const { taskId } = useParams(); // Should Get taskId dynamically from the URL hopefully
 
   const restaurantList = [
     // should be adjust so that it dynamic and pulls from server
     { name: 'McDonald', id: 1 },
     { name: 'Subway', id: 2 },
     { name: 'Sushi Express', id: 3 },
     { name: 'Pizza Pizza', id: 4 },
     { name: 'Tim Hortons', id: 5 },
   ];
 
   const washroomList = [
     // should be adjust so that it dynamic and pulls from server
     { name: 'Washroom A', id: 1 },
     { name: 'Washroom B', id: 2 },
     { name: 'Wahroom C', id: 3 },
     { name: 'Washroom C', id: 3 },
   ];
 
   const togglePause = () => {
     setIsPaused(!isPaused);
   };
 
   const toggleBathroom = () => {
     setShowWashroomPopup(true);
   };
 
   const closePopupBath = () => {
     setShowWashroomPopup(false);
   };
 
   const handleWashroomClick = (washroom) => {
     setMessage(`Redirecting to Washroom`);
     setTimeout(() => {
       setMessage('');
     }, 5000); // Message disappears after 5 seconds
     closePopupBath();
   };
 
   const toggleRestaurant = () => {
     setShowRestaurantPopup(true);
   };
 
   const closePopupFood = () => {
     setShowRestaurantPopup(false);
   };
 
   const handleRestaurantClick = (restaurant) => {
     setMessage(`Redirecting to ${restaurant.name}`);
     setTimeout(() => {
       setMessage('');
     }, 5000); // Message disappears after 5 seconds
     closePopupFood();
   };

    // Checks if we are at destination to move on to endTrip.js
    useEffect(() => {
        const fetchTaskStatus = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/cart/task?taskId=${taskId}`, {
                    method: 'GET', credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setStatus(data.status);

                    // When status of task is completed it would hopefully redirect to endTrip.js page
                    if (data.status === "Completed") {
                        const cartId = data.cartId;
                        console.log(cartId);
                        navigate('/endTrip/${cartId}');
                    }
                } else {
                    console.error("Failed to fetch task status");
                }
            } catch (error) {
                console.error("Error fetching task status:", error);
            }
        };

        // Check every 3 seconds
        const interval = setInterval(fetchTaskStatus, 3000);

        return () => clearInterval(interval);
    }, [taskId, navigate]);

   return (
     <div className="min-h-screen bg-gray-100 flex flex-col">
       {/* Header Bar */}
       <div className="flex justify-between items-center bg-blue-600 text-white py-4 px-8">
         <h1 className="text-xl font-bold">InMotion App</h1>
         <h1 className="text-xl font-bold">C.A.M.L.</h1>
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
 
       {/* Timed Message */}
       {message && (
         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md">
           {message}
         </div>
       )}
 
       {/* Washroom Popup */}
       {showWashroomPopup && (
         <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
           <div className="bg-white rounded-lg shadow-xl p-6 w-96">
             <h2 className="text-xl font-bold mb-4">Available Washrooms</h2>
             <ul className="space-y-2">
               {washroomList.map((washroom) => (
                 <li key={washroom.id}>
                   <button
                     onClick={() => handleWashroomClick(washroom)}
                     className="w-full bg-gray-200 px-4 py-2 rounded-md text-lg text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                   >
                     {washroom.name}
                   </button
                   >
                 </li>
               ))}
             </ul>
             <button
               onClick={closePopupBath}
               className="mt-6 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
             >
               Close
             </button>
           </div>
         </div>
       )}
 
       {/* Restaurant Popup */}
       {showRestaurantPopup && (
         <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
           <div className="bg-white rounded-lg shadow-xl p-6 w-96">
             <h2 className="text-xl font-bold mb-4">Available Restaurants</h2>
             <ul className="space-y-2">
               {restaurantList.map((restaurant) => (
                 <li key={restaurant.id}>
                   <button
                     onClick={() => handleRestaurantClick(restaurant)}
                     className="w-full bg-gray-200 px-4 py-2 rounded-md text-lg text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                   >
                     {restaurant.name}
                   </button
                   >
                 </li>
               ))}
             </ul>
             <button
               onClick={closePopupFood}
               className="mt-6 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
             >
               Close
             </button>
           </div>
         </div>
       )}
     </div>
   );
 };
 
 export default inMotion;