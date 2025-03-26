import { useState } from "react";
import { useNavigate } from "react-router-dom";

const endTrip = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    // 5 sec delay to make sure they got off in time
    setClicked(true);
    setTimeout(() => {
      navigate("/resetCart");
    }, 5000); 
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
}

export default endTrip;
