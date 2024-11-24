import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Welcome from "./Components/Welcome";
import Register from "./Components/Register";
import Email_login from "./Components/Email_login";
import Phone_login from "./Components/Phone_login";
import Success from "./Components/Success";
import Verification from "./Components/Verification";
import Verify from "./Components/verify";
import Updateprofile from "./Components/Updateprofile";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Router>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/email" element={<Email_login />} />
          <Route path="/phone" element={<Phone_login />} />
          <Route path="/success" element={<Success />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/update" element={<Updateprofile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
