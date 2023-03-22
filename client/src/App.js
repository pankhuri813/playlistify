import Kathak from "./Components/KATHAK/Kathak.js";
import Login from "./Components/LOGINFORMS/Login.js";
import Signup from "./Components/LOGINFORMS/Signup.js";
import Home from "./Components/HOME/Home.js";
import Categories from "./Components/CATEGORIES/Categories.js";
import HIPHOP from './Components/HIP-HOP/Hiphop.js';
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/Categories' element={<Categories/>}/>
      <Route path="/Kathak" element={<Kathak />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Hip-Hop" element={<HIPHOP />} />
    </Routes>
    </Router>
  );
}

export default App;




// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Homepage from './Homepage';
// import Homemain from './Homemain';
// import Categories from './Categories';
// import Kathak from './Kathak';

// function App() {
//   return (
//     <div>
      
// <Router>
//   <Routes>
//     <Route path ="/" element={<Homepage/>}/>
//     <Route path="/homemain" element={ <Homemain/> }/>
//     <Route path="/categorypage" element={<Categories/>}/>
//     <Route path ="/kathak" element={<Kathak/>}/>
//   </Routes>
// </Router>

//     </div>

//   );
// }

// export default App;
