
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Homemain from './Homemain';
import Categories from './Categories';
import Kathak from './Kathak';

function App() {
  return (
    <div>
      
<Router>
  <Routes>
    <Route path ="/" element={<Homepage/>}/>
    <Route path="/homemain" element={ <Homemain/> }/>
    <Route path="/categorypage" element={<Categories/>}/>
    <Route path ="/kathak" element={<Kathak/>}/>
  </Routes>
</Router>

   

    </div>

  );
}

export default App;
