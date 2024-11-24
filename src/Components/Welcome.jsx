import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-start items-center w-screen h-screen ">
      <div className="mt-[50px]">
        <img src="./welcome.svg" alt="" />
      </div>

      <div className="flex font-Lato justify-center text-center text-[24px] font-[800] leading-[2] m-[20px] text-shadow-md">
        WELCOME TO CHURCH! <br />
        ARE YOU A FIRST TIMER?
      </div>
      <button
        className="bg-[#FF725E] p-[10px] w-[200px] m-[15px] rounded-[8px] text-[#FFFFFF] text-[20px] "
        onClick={() => navigate("/register")}
      >
        {" "}
        Yes
      </button>
      <button
        className="bg-[#FF725E] p-[10px] w-[200px] m-[15px] rounded-[8px] text-[#FFFFFF] text-[20px]"
        onClick={() => navigate("/phone")}
      >
        No
      </button>

      {/* Bottom Circles */}
      <div className="absolute bottom-0 right-0">
        <div className="w-[150px] h-[150px] rounded-full bg-[#FF725E] opacity-50"></div>
      </div>
      <div className="absolute bottom-0 right-[50px]">
        <div className="w-[100px] h-[100px] rounded-full bg-[#b55346] opacity-50"></div>
      </div>
    </div>
  );
}

export default Welcome;
