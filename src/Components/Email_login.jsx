import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Email_login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Helper function to read cookies
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = { email };

    // Get eventId from the cookie
    const eventId = getCookie("eventId");

    // Check if eventId exists before proceeding
    if (!eventId) {
      toast.error("Event ID not found. Please try again later.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#FF725E",
          color: "#fff",
        },
      });
      return;
    }

    fetch(
      `https://cacyof-api.fly.dev/api/users/confirmAttendance?event=${eventId}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json,text/plain, */*",
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          toast.success("Attendance confirmed successfully!", {
            duration: 4000,
            position: "top-center",
            style: {
              background: "#4CAF50",
              color: "#fff",
            },
          });
          // Navigate to the success page
          navigate("/success");
        } else if (data.error === "not found") {
          toast.error("Email not found. Please check your email address.", {
            duration: 4000,
            position: "top-center",
            style: {
              background: "#FF725E",
              color: "#fff",
            },
          });
        } else if (data.error === "attendance already exists") {
          toast.error("Attendance already confirmed.", {
            duration: 4000,
            position: "top-center",
            style: {
              background: "#FF725E",
              color: "#fff",
            },
          });
          // Navigate to the success page
          navigate("/success");
        } else {
          toast.error(data.message || "Attendance confirmation failed!", {
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
        console.error("Error during attendance confirmation:", error);
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
    <div className="flex flex-col justify-start items-center w-screen h-screen ">
      <div className="mt-[30px]">
        <img src="./Business2.svg" alt="" />
      </div>

      <div className="font-Lato text-left text-[17px] md:text-[20px] font-[600] leading-[2.5rem] m-[20px] w-[85%] md:w-[70%]">
        <form action="" onSubmit={handleSubmit} className="w-full">
          <div className="mt-[15px]">
            <label htmlFor="">Email address</label>
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
              className="bg-[#FF725E] text-[white] mt-[15px] justify-center px-[15px] md:px-[30px] rounded-[10px]"
            >
              CONFIRM ATTENDANCE
            </button>
            <div className="mt-[20px]">
              Use phone number?{" "}
              <span
                className="text-[#FF725E]"
                onClick={() => navigate("/phone")}
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

export default Email_login;
