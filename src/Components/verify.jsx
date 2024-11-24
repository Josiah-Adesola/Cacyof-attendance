import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "react-hot-toast";

const OtpInput = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const navigate = useNavigate();
  const location = useLocation(); // Use this to retrieve passed state
  const email = location.state?.email || ""; // Retrieve email passed from previous page

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus the next input box when a digit is entered
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const otpCode = otp.join(""); // Combine OTP digits into a single string

    if (otpCode.length !== 6) {
      toast.error("Please enter a 6-digit OTP", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#FF725E",
          color: "#fff",
        },
      });
      return;
    }

    const payload = {
      otp: otpCode,
      email: email,
    };

    // Make the request to verify OTP
    fetch(`https://cacyof-api.fly.dev/api/auth/verify-otp`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Session created") {
          toast.success("OTP verified!", {
            duration: 4000,
            position: "top-center",
            style: {
              background: "#4CAF50",
              color: "#fff",
            },
          });
          // Navigate to the next page if OTP is verified
          navigate("/update");
        } else {
          toast.error(data.message || "OTP verification failed.", {
            duration: 4000,
            position: "top-center",
            style: {
              background: "#FF725E",
              color: "#fff",
            },
          });
        }
      })
      .catch((error) => {
        console.error("Error during OTP verification:", error);
        toast.error("An error occurred. Please try again later.", {
          duration: 4000,
          position: "top-center",
          style: {
            background: "#FF725E",
            color: "#fff",
          },
        });
      });
  };

  return (
    <div className="flex flex-col items-center p-4 mt-12 font-sans">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 p-2  hover:bg-gray-300 rounded-md self-start"
      >
        <FaArrowLeft />
        <span>Back</span>
      </button>
      <h2 className="text-2xl font-bold mb-4 ">Verification code</h2>
      <p className="text-[20px] font-[600] leading-[1.5rem] mb-6">
        We have sent the OTP to your email address: {email}
      </p>
      <div className="flex space-x-4 mb-6">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onFocus={(e) => e.target.select()} // Auto-select input on focus
            className="w-12 h-14 border-2 border-gray-300 rounded-lg text-center text-4xl outline-none focus:border-indigo-500"
          />
        ))}
      </div>
      <button
        className="bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-6 rounded-lg"
        onClick={handleSubmit}
      >
        CONFIRM
      </button>

      {/* Bottom Circles */}
      <div className="absolute bottom-0 right-0">
        <div className="w-[150px] h-[150px] rounded-full bg-[#FF725E] opacity-50"></div>
      </div>
      <div className="absolute bottom-0 right-[50px]">
        <div className="w-[100px] h-[100px] rounded-full bg-[#FF725E] opacity-50"></div>
      </div>
    </div>
  );
};

export default OtpInput;
