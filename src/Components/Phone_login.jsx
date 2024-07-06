import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
function Phone_login() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-start items-center w-screen h-screen ">
      <div className="mt-[30px]">
        <img src="./Business2.svg" alt="" />
      </div>

      <div className="font-Lato text-left text-[20px] font-[600] leading-[2.5rem] m-[20px] w-[70%]">
        <form action="" className="w-full">
          <div className="mt-[15px]">
            <label htmlFor="">Phone number</label>
            <input
              type="text"
              placeholder="enter your digits"
              className="block  border leading-[1px] border-gray-300 focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 rounded-md px-4 py-2 w-full"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#FF725E] text-[white] mt-[15px] justify-center px-[30px] rounded-[10px] "
              onClick={() => navigate("/success")}
            >
              CONFIRM ATTENDANCE
            </button>
            <div className="mt-[20px]">
              Use Email Address?{" "}
              <span
                className="text-[#FF725E]"
                onClick={() => navigate("/email")}
              >
                Confirm
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Phone_login;
