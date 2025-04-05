import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import { getCookie } from "cookies-next"; // Import the cookies-next library

function Phone_login() {
  const navigate = useNavigate();
  const [phoneNo, setPhoneNumber] = useState("");
  const [eventId, setEventId] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch the event ID from the cookie
  useEffect(() => {
    const storedEventId = getCookie("eventId");
    if (storedEventId) {
      setEventId(storedEventId); // Set eventId from the cookie
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

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

    const formData = { phoneNo };
    setLoading(true);
    fetch(
      `https://cacyof-api.fly.dev/api/users/confirmAttendance?event=${eventId}`, // Use the dynamic eventId
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
        setLoading(false); // Stop loading
        if (data.data) {
          toast.success("Attendance confirmed successfully!", {
            duration: 4000,
            position: "top-center",
            style: {
              background: "#4CAF50",
              color: "#fff",
            },
          });
          // Navigate to the success page or perform any other action
          navigate("/success");
        } else if (data.error === "not found") {
          toast.error("User not found. Please check your phone number.", {
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
          // Navigate to the success page or perform any other action
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
        setLoading(false);
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

      <div className="font-Lato text-left text-[17px] md:text-[20px] font-[600] leading-[2.5rem] m-[20px] w-[80%] md:w-[70%]">
        <form action="" onSubmit={handleSubmit} className="w-full">
          <div className="mt-[15px]">
            <label htmlFor="">Phone number</label>
            <input
              type="text"
              placeholder="enter your digits"
              id="phoneNumber"
              value={phoneNo}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="block border leading-[1px] border-gray-300 focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 rounded-md px-4 py-2 w-full"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`bg-[#FF725E] text-[white] mt-[15px] justify-center px-[15px] md:px-[30px] rounded-[10px]
               ${loading ? "opacity-50 cursor-not-allowed" : ""}`}>
              {loading ? "Submitting..." : " CONFIRM ATTENDANCE"}
            </button>
            <div className="mt-[20px]">
              Use Email Address?{" "}
              <span
                className="text-[#FF725E]"
                onClick={() => navigate("/email")}>
                Confirm
              </span>
            </div>
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

export default Phone_login;
