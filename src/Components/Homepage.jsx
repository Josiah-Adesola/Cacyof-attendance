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
    <div className="relative w-screen h-screen place-content-center bg-[#FF725E]">
      <div class="absolute inset-y-0 right-0 w-2/4 h-screen bg-[#FF25]"></div>

      <div className="p-[50px]">
        <div className="flex justify-center m-[10px] z-40">
          <img src="./LOGO1.svg" alt="" />
          <img src="./LOGO2.svg" alt="" />
          <img src="./LOGO3.svg" alt="" />
        </div>
        <div className="flex font-Lato justify-center text-center text-[30px] font-[800] text-[#FFFFFF] leading-[28.8px] mt-[25px] ">
          WELCOME TO <br /> CACYOF UNILAG/MEDILAG
        </div>

        <div className="flex font-Lato justify-center text-center text-[25px] font-[700] leading-[28.8px] mt-[20px] z-auto ">
          A home of love and fulfillment!
        </div>
        <div className="flex font-Lato justify-center text-center text-[15px] font-[700] leading-[28.8px] mt-[70px]">
          <button
            className="text-[#FFFFFF] bg-[black] p-[10px] px-[25px] rounded-[10px] z-10"
            onClick={() => navigate("/welcome")}
          >
            NEXT{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
