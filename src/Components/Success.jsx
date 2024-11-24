import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
function Success() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-start items-center w-screen h-screen ">
      <div className="mt-[30px]">
        <img src="./woman.svg" alt="" />
      </div>

      <div className="font-Lato text-center text-[20px] font-[600] leading-[2.5rem] m-[20px] ">
        <div className="mt-[10px] ">
          <img src="./vector.svg" alt="" />
        </div>
      </div>
      <div className="font-Lato text-center text-[35px] font-[800] leading-[2rem] m-[10px]">
        Attendance Success!
      </div>
      <div className="font-Lato text-center text-[20px] font-[600] leading-[1.5rem] m-[10px]">
        Beloved, have a wonderful <br />
        time in God's presence
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-[#FF725E] text-[white] mt-[15px] justify-center p-[15px]  rounded-[10px] "
          onClick={() => navigate("/welcome")}
        >
          SIGN FOR ANOTHER
        </button>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-[#FF725E] text-[white] mt-[15px] justify-center p-[15px]  rounded-[10px] "
          onClick={() => navigate("/")}
        >
          UPDATE PROFILE DETAILS
        </button>
      </div>
    </div>
  );
}

export default Success;
