import './App.css';
import Footer from './Component/Footer';
import Navabar from './Component/Navabar';
import Home from './pages/Home';
import About from './pages/About';
import Wedding from "./pages/Wedding"

import { BrowserRouter ,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navabar/>
    <BrowserRouter>
    <Routes>  
      <Route path='/' element={<Home/> }/>
      <Route path='/about' element={<About/> }/>
      <Route path='/wedding' element={<Wedding/> }/>
    </Routes>
    
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
