import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { getCookie } from "cookies-next"; // Import the cookies-next library
function Register() {
  const navigate = useNavigate();

  const numbers = Array.from({ length: 31 }, (_, i) => i + 1);
  const [errors, setErrors] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDeptTerm, setSearchDeptTerm] = useState("");
  const [hostel, setSelectedItem] = useState("");
  const [department, setSelectedDepartment] = useState("");
  const [eventID, setEventID] = useState(""); // For storing eventID
  const [isFinalist, setIsFinalist] = useState(""); // For the finalist question
  // Fetch the event ID from the cookie
  useEffect(() => {
    const storedEventId = getCookie("eventId");
    if (storedEventId) {
      setEventID(storedEventId); // Set eventId from the cookie
    }
  }, []);

  const items = [
    "Biobaku",
    "Jaja",
    "Marire",
    "Madam Kofo Hall",
    "Moremi Hall",
    "Sodehinde Hall",
    "High rise",
    "Kofo Hall",
    "Fagunwa",
    "MTH",
    "Makama",
    "Amina",
    "Radiography",
    "Eni-njoku Hall",
    "Elkanemi",
    "Off-campus",
    "Block 1 - Samuel Manuwa",
    "Block 2 - Samuel Manuwa",
    "Block 3 - Alli Akilu",
    "Block 4 - Alli Akilu",
    "Block 5 - Abimbola Awoliyi",
    "Block 6 - Felix Dosekun",
    "Block 7 - Thomas oritsejolomi",
    "Block 8 - Thomas Oritsejolomi",
    "OPH Hostel",
  ];

  const departments = [
    "Creative Arts",
    "English",
    "French",
    "Russian",
    "German",
    "History & Strategic Studies",
    "Linguistics/Igbo",
    "Linguistics/Yoruba",
    "Linguistics",
    "Chinese",
    "Philosophy",
    "Christian Religious Studies",
    "Islamic Religious Studies",
    "Medicine and Surgery",
    "Physiotherapy",
    "Radiography",
    "Anatomy",
    "Medical Laboratory Science",
    "Pharmacology",
    "Physiology",
    "Dentistry",
    "Nursing Science",
    "Adult Education",
    "Education Economics",
    "Business Education",
    "Education Islamic Religious Studies",
    "Education Igbo",
    "Education English",
    "Early Childhood Education",
    "Education Yoruba",
    "Education French",
    "Education History",
    "Education Christian Religious Studies",
    "Education Geography",
    "Educational Administration",
    "Educational Foundations",
    "Health Education",
    "Human Kinetics Education",
    "Education Biology",
    "Education Chemistry",
    "Education Home Economics",
    "Integrated Science Education",
    "Education Mathematics",
    "Education Physics",
    "Technology Education",
    "Special Education",
    "Biomedical Engineering",
    "Chemical Engineering",
    "Civil Engineering",
    "Computer Engineering",
    "Electrical & Electronics Engineering",
    "Mechanical Engineering",
    "Metallurgical & Materials Engineering",
    "Petroleum & Gas Engineering",
    "Surveying & Geoinformatics Engineering",
    "Systems Engineering",
    "Architecture",
    "Building",
    "Estate Management",
    "Quantity Surveying",
    "Urban & Regional Planning",
    "Law",
    "Accounting",
    "Actuarial Science",
    "Banking & Finance",
    "Business Administration",
    "IRPM",
    "Insurance",
    "Taxation",
    "Procurement",
    "DR. Pharmacy",
    "Biochemistry",
    "Biostatistics",
    "Botany",
    "Cell Biology & Genetics",
    "Chemistry",
    "Computer Science",
    "Data Science",
    "Environmental Standards",
    "Geology",
    "Geophysics",
    "Marine Biology",
    "Fisheries",
    "Mathematics",
    "Industrial Mathematics",
    "Statistics",
    "Microbiology",
    "Physics",
    "Zoology",
    "Economics",
    "Economics & Development Studies",
    "Geography",
    "Meteorology & Climate Science",
    "Mass Communication",
    "Library & Information Science",
    "Political Science",
    "Psychology",
    "Public Administration",
    "Social Work",
    "Sociology",
    "Social Standard",
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setformData({ ...formData, hostel: item });
    setSearchTerm("");
    console.log(searchTerm);
    console.log(item);
  };

  const handleItemDeptClick = (item) => {
    setSelectedDepartment(item);
    setformData({ ...formData, department: item });
    setSearchDeptTerm("");
    console.log(searchDeptTerm);
    console.log(item);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredDept = departments.filter((item) =>
    item.toLowerCase().includes(searchDeptTerm.toLowerCase())
  );
  const displayedItems = filteredItems.slice(0, 3); // Display only the first 3 matching items
  const displayedDeptItems = filteredDept.slice(0, 5); // Display only the first 3 matching items
  const handlechange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    if (name === "hostel") {
      // If the hostel field is being updated, update the searchTerm as well
      setSearchTerm(e.target.value);
    }

    if (name === "department") {
      setSearchDeptTerm(e.target.value);
    }

    console.log(hostel);

    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleFinalistChange = (e) => {
    setIsFinalist(e.target.value); // Handle yes/no radio button changes
    setformData({
      ...formData,
      isFinalist: e.target.value,
    });
  };

  const [formData, setformData] = useState({
    fullname: "",
    email: "",
    phoneNo: "",
    birthDay: "",
    birthMonth: "",
    hostel: "",
    isFinalist: "",
    department: "",
    level: "",
    gender: "",
    campus: "",
  });
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(hostel);
    const validationerrors = {};
    if (!formData.fullname.trim()) {
      validationerrors.name = "full name is required";
    }
    if (!formData.email.trim()) {
      validationerrors.email = "email is required";
    }

    if (!formData.phoneNo.trim()) {
      validationerrors.phoneno = "Phone number is required";
    }
    if (!formData.birthDay.trim()) {
      validationerrors.birthday = "Phone number is required";
    }
    if (!formData.birthMonth.trim()) {
      validationerrors.birthmonth = "Birth month is required";
    }
    if (!formData.hostel.trim()) {
      validationerrors.hostel = "Hostel is required";
    }
    if (!formData.department.trim()) {
      validationerrors.department = "Department is required";
    }

    setErrors(validationerrors);
    if (Object.keys(validationerrors).length === 0) {
      fetch(`https://cacyof-api.fly.dev/api/users?event=${eventID}`, {
        method: "POST",
        headers: {
          Accept: "application/json,text/plain, */*",
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.data) {
            // Registration successful
            toast.success("Registration successful!", {
              duration: 4000,
              position: "top-center",
              style: {
                background: "#FFA500",
                color: "#fff",
              },
            });
            // Navigate to the success page
            navigate("/success");
          } else if (data.error) {
            // User already exists
            toast.error("User already exists!", {
              duration: 4000,
              position: "top-center",
              style: {
                background: "#FF725E",
                color: "#fff",
              },
            });
          } else {
            // General error handling for unexpected responses
            toast.error(data.message || "Registration failed!", {
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
          console.error("Error during signup:", error);
          alert("An error occurred. Please try again later.");
        });
    }
  };

  useEffect(() => {
    // Fetch the eventID from local storage or another source
    const storedEventID = localStorage.getItem("eventID");
    if (storedEventID) {
      setEventID(storedEventID); // Set the eventID state
    }
  }, []);

  return (
    <div className="flex flex-col justify-start items-center w-screen h-auto box-border font-sans ">
      <div className="mt-[15px]">
        <img src="./Business.svg" alt="" />
      </div>

      <div className="flex font-Lato justify-center text-left text-[17px] md:text-[20px] font-[600] leading-[2rem] md:leading-[2.2rem] mb-7">
        <form action="" onSubmit={handlesubmit}>
          <div className="">
            <label htmlFor="">Full Name</label>
            <input
              required
              type="text"
              placeholder="Enter Your Name"
              className="w-[100%] block border leading-[1px] border-gray-300 focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 rounded-md px-2 md:px-4 py-2"
              name="fullname"
              onChange={handlechange}
            />
          </div>
          <div className=" mt-[10px] md:mt-[15px]">
            <label htmlFor="">Email address</label>
            <input
              required
              type="text"
              placeholder="e.g. sample@yahoo.com"
              name="email"
              className="w-[100%] block border leading-[1px] border-gray-300 focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 rounded-md px-2 md:px-4 py-2"
              onChange={handlechange}
            />
          </div>
          <div className="mt-[10px] md:mt-[15px]">
            <label htmlFor="">Phone Number</label>
            <input
              required
              type="tel"
              placeholder="e.g. 081 xx xxx xxx"
              className=" w-[100%] block border leading-[1px] border-gray-300 focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 rounded-md px-4 py-2"
              name="phoneNo"
              onChange={handlechange}
              pattern="^\d{11}$"
              title="Phone number should be exactly 11 digits"
            />
          </div>

          <div className="mt-[10px] md:mt-[15px]">
            <label htmlFor="">D.O.B</label>
            <div className="flex justify-between w-[100%]">
              <select
                name="birthMonth"
                className="border inline-block w-[48%] leading-[1px] border-gray-300 focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 rounded-md px-4 py-2 "
                onChange={handlechange}
                required
              >
                <option value="" disabled selected>
                  Month
                </option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
              <select
                name="birthDay"
                className="border inline-block w-[48%] leading-[1px] border-gray-300 focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 rounded-md px-4 py-2"
                onChange={handlechange}
                required
              >
                <option value="" disabled selected>
                  Day
                </option>
                {numbers.map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-[10px] md:mt-[15px]">
            <label htmlFor="">Department</label>
            <input
              required
              type="text"
              className="w-[100%] block border leading-[1px] border-gray-300 focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 rounded-md px-4 py-2"
              placeholder="Course of study..."
              name="department"
              value={department}
              onChange={handlechange}
              onFocus={() => setSelectedDepartment(null)} // Clear selected item on focus
            />
            {searchDeptTerm && (
              <ul className="list-none p-0 m-0 border border-gray-300 rounded">
                {displayedDeptItems.map((item, index) => (
                  <li
                    key={index}
                    className="p-1 border-b last:border-b-0 border-gray-300 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleItemDeptClick(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-[10px] md:mt-[15px]">
            <div className="flex justify-between w-[100%]">
              <select
                name="campus"
                className="border inline-block w-[48%] leading-[1px] border-gray-300 focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 rounded-md px-4 py-2 "
                onChange={handlechange}
                required
              >
                <option value="" disabled selected>
                  Campus
                </option>
                <option value="Unilag">UNILAG</option>
                <option value="Medilag">MEDILAG</option>
              </select>
              <select
                name="gender"
                className="border inline-block w-[48%] leading-[1px] border-gray-300 focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 rounded-md px-4 py-2"
                onChange={handlechange}
                required
              >
                <option value="" disabled selected>
                  Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="mt-[10px] md:mt-[15px]">
            <label htmlFor="">Hostel/Hall of residence</label>
            <input
              required
              type="text"
              className="w-[100%] block border leading-[1px] border-gray-300 focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 rounded-md px-4 py-2"
              placeholder="Hostel..."
              name="hostel"
              value={hostel}
              onChange={handlechange}
              onFocus={() => setSelectedItem(null)} // Clear selected item on focus
            />
            {searchTerm && (
              <ul className="list-none p-0 m-0 border border-gray-300 rounded">
                {displayedItems.map((item, index) => (
                  <li
                    key={index}
                    className="p-1 border-b last:border-b-0 border-gray-300 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-[10px] md:mt-[15px]">
            <div className="flex justify-between w-[100%]">
              <select
                name="level"
                className="border inline-block w-[48%] leading-[1px] border-gray-300 focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 rounded-md px-4 py-2 "
                onChange={handlechange}
                required
              >
                <option value="" disabled selected>
                  Level
                </option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
                <option value="600">600</option>
              </select>

              <select
                name="Finalist"
                className="border inline-block w-[48%] leading-[1px] border-gray-300 focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 rounded-md px-4 py-2 "
                onChange={handleFinalistChange}
                required
              >
                <option value="" disabled selected>
                  Finalist?
                </option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>

          <div className="text-center leading-[2.5rem]">
            <button
              type="submit"
              className="bg-[#FF725E] text-[white] mt-[12px] justify-center px-[30px] rounded-[10px] "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
