import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Verification() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = { email };

    // Make the request to get OTP
    fetch(`https://cacyof-api.fly.dev/api/auth/request-otp`, {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Verification email sent") {
          toast.success("OTP sent successfully!", {
            duration: 4000,
            position: "top-center",
            style: {
              background: "#4CAF50",
              color: "#fff",
            },
          });
          // Navigate to the verify page, passing the email via state
          navigate("/verify", { state: { email } });
        } else if (data.message === "User not found") {
          toast.error("User not found. Please check your email address.", {
            duration: 4000,
            position: "top-center",
            style: {
              background: "#FF725E",
              color: "#fff",
            },
          });
        } else {
          toast.error(data.message || "Error sending OTP. Please try again.", {
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
        console.error("Error during OTP request:", error);
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
    <div className="flex flex-col justify-start items-center w-screen h-screen p-3 text-left ">
      <div className="mt-[30px] self-end">
        <img src="./design.svg" alt="" />
      </div>
      <div className="text-left font-Lato text-[24px] font-[800] leading-[2] text-shadow-sm">
        OTP Verification
      </div>
      <div className="text-left text-[20px] font-[600] leading-[1.5rem]">
        Enter E-mail to get one time password
      </div>

      <div className="text-left text-[20px] font-[600] leading-[2.5rem] w-[85%] md:w-[70%]">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mt-[15px] text-[25px] font-[600]">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. sample@yahoo.com"
              className="block border leading-[1px] border-gray-300 focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 rounded-md px-4 py-2 w-full"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#FF725E] text-[white] mt-[15px] justify-center px-[30px] rounded-[10px]"
            >
              Get OTP
            </button>
          </div>
        </form>
      </div>

      {/* Bottom Circles */}
      <div className="absolute bottom-0 right-0">
        <div className="w-[150px] h-[150px] rounded-full bg-[#FF725E] opacity-50"></div>
      </div>
      <div className="absolute bottom-0 right-[50px]">
        <div className="w-[100px] h-[100px] rounded-full bg-[#FF725E] opacity-50"></div>
      </div>
    </div>
  );
}

export default Verification;
