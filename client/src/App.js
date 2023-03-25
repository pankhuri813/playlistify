import Kathak from "./Components/KATHAK/Kathak";
import Login from "./Components/LOGINFORMS/Login";
import Signup from "./Components/LOGINFORMS/Signup";
import Home from "./Components/HOME/Home";
import CategoryDance from "./Components/CATEGORIES/CateoryDance";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/HOME/Navbar";
import Footer from "./Components/HOME/Footer";
import Welcome from "./Components/WELCOME/Welcome";
import Hiphop from "./Components/HIP-HOP/Hiphop";
import Tapdance from './Components/TAP-DANCE/Tapdance'
import Contemporary from "./Components/CONTEMPORARY/Cotemporary";
import Jazz from './Components/JAZZ/Jazzdance';
import Vegan from './Components/VEGAN/Vegan';
import Thai from './Components/THAI/Thai'
import Southindian from './Components/SOUTHINDIAN/South'
import Potrait from './Components/POTRAIT/Potrait'
import Nonveg from './Components/NON-VEG/Nonveg'
import Chinese from './Components/CHINESE/Chinese'
import Cartoon from './Components/CARTOON/Cartoon'
import Caricature from "./Components/CARICATURE/Caricature";
import Architecture from "./Components/ARCHITECTURE/Architecture";
import Acrylic from "./Components/ACRYLIC/Acrylic";
import CategoryCooking from './Components/CATEGORIES/CategoryCooking'
import CategoryDrwaing from './Components/CATEGORIES/CategoryDrawing'

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
          <Route path="/categorydance" element={<CategoryDance />} />
          <Route path="/kathak" element={<Kathak />} />
          <Route path="/tapdance" element={<Tapdance />} />
          <Route path="/hiphop" element={<Hiphop />} />
          <Route path="/tapdance" element={<Tapdance />} />
          <Route path="/cotemporary" element ={<Contemporary />} />
          <Route path="/jazz" element ={<Jazz />} />
          <Route path="/vegan" element ={<Vegan />} />
          <Route path="/thai" element = {<Thai />} />
          <Route path="/southindian" element = {<Southindian />} />
          <Route path="/potrait" element = {<Potrait />} />
          <Route path="/nonveg" element = {<Nonveg />} />
          <Route path="/chinese" element = {<Chinese />} />
          <Route path="/cartoon" element ={<Cartoon />} />
          <Route path="/caricature" element ={<Caricature />} />
          <Route path="/architecture" element = {<Architecture />} />
          <Route path="/acrylic" element ={<Acrylic />} />
          <Route path="/categorycooking" element ={<CategoryCooking />} />
          <Route path="/categorydrawing" element = {<CategoryDrwaing />} />
          
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