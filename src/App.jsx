import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cars from './pages/Cars';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import './App.css'; // Import your CSS file for global styles





const App = () => {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/Services" element={<Services />} />
        
      </Routes>
      </BrowserRouter>

      
    
  );
};


export default App;