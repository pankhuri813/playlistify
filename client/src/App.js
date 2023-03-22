import Kathak from "./Components/KATHAK/Kathak";
import Login from "./Components/LOGINFORMS/Login";
import Signup from "./Components/LOGINFORMS/Signup";
import Home from "./Components/HOME/Home";
import Categories from "./Components/CATEGORIES/Categories";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/HOME/Navbar";
import Footer from "./Components/HOME/Footer";
import Welcome from "./Components/WELCOME/Welcome";
import Hiphop from "./Components/HIP-HOP/Hiphop";
import Tapdance from './Components/TAP-DANCE/Tapdance'
import Contemporary from "./Components/CONTEMPORARY/Cotemporary";
import Jazz from './Components/JAZZ/Jazzdance';

function App() {
  if (
    window.location.pathname !== "/login" &&
    window.location.pathname !== "/welcome" &&
    window.location.pathname !== "/signup"
  ) {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Kathak" element={<Kathak />} />
          <Route path="/Tapdance" element={<Tapdance />} />
          <Route path="/Hiphop" element={<Hiphop />} />
          <Route path="/Tapdance" element={<Tapdance />} />
          <Route path="/Cotemporary" element ={<Contemporary />} />
          <Route path="/Jazz" element ={<Jazz />} />
        </Routes>
        <Footer />
      </>
    );
  } else if (
    window.location.pathname === "/login" ||
    window.location.pathname === "/welcome" ||
    window.location.pathname === "/signup"
  ) {
    return (
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    );
  }
}

export default App;