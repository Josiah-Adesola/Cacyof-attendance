import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
function Homepage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to set a cookie
  const setCookie = (name, value, hours) => {
    const date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000); // Set expiration time
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const eventId = queryParams.get("eventId"); // Get 'eventId' from the URL

    if (eventId) {
      setCookie("eventId", eventId, 6); // Set cookie with a 6-hour expiration
    }
  }, [location]);

  return (
    <div className="relative w-screen h-screen bg-[#ff715e2e] font-sans flex justify-center items-center">
      {/* Left Background - Orange */}
      <div className="absolute inset-y-0 left-0 w-1/2 h-full bg-[#ff725e]"></div>

      {/* Right Background - Blue (Updated color code) */}
      <div className="absolute inset-y-0 right-0 w-1/2 h-full bg-[#ff715e83]"></div>

      {/* Content in the center */}
      <div className="relative z-10 p-[50px] text-center">
        {/* Logo Images */}
        <div className="flex justify-center space-x-[20px] mb-[10px] text-shadow-lg">
          <img src="./LOGO1.svg" alt="Logo 1" />
          <img src="./LOGO2.svg" alt="Logo 2" />
          <img src="./LOGO3.svg" alt="Logo 3" />
        </div>

        {/* Welcome Text */}
        <div className="font-Lato text-[30px] font-[800] text-[#FFFFFF] leading-[28.8px] mt-[25px] text-shadow-lg">
          WELCOME TO <br /> CACYOF UNILAG/MEDILAG
        </div>

        {/* Subheading */}
        <div className="font-Lato text-[25px] font-[700] text-[000000] leading-[28.8px] mt-[20px] text-shadow-md">
          A home of love and fulfillment!
        </div>

        {/* Button */}
        <div className="mt-[70px]">
          <button
            className="text-[#FFFFFF] bg-black p-[10px] px-[25px] rounded-[10px] text-shadow-lg cursor-pointer transition duration-300 ease-in-out shadow-lg animate-bounce"
            onClick={() => navigate("/welcome")}
          >
            NEXT {">>>"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
