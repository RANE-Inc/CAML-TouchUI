import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EndTrip = () => {
  const [clicked, setClicked] = useState(false);
  const [cartId, setCartId] = useState(null); // State to store cartId
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartId = async () => {
      const fetchedCartId = await getCartId();
      setCartId(fetchedCartId);
    };

    fetchCartId();
  }, []); // Run once when component mounts

  const getCartId = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/cart/tasks', {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const data = await response.json();
        const firstTask = data[0]; // Assuming first task is the next one to be handled
        return firstTask.cartId;
      } else {
        console.error("Error fetching tasks:", response.status);
      }
    } catch (error) {
      console.error("Error during condition check:", error);
    }
    return null; // Return null if no task found
  };

  const handleClick = () => {
    if (cartId) {
      setClicked(true);
      // 5 sec delay to make sure they got off in time
      setTimeout(() => {
        navigate(`/resetCart/${cartId}`);
      }, 5000);
    } else {
      console.error("No cartId found");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleClick}
        className="bg-red-600 text-white text-5xl font-bold px-12 py-6 rounded-xl shadow-lg transition-transform transform active:scale-95"
      >
        {clicked ? "ENDING TRIP..." : "END TRIP"}
      </button>
    </div>
  );
};

export default EndTrip;
