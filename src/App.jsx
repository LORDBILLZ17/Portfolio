import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';  // Main page
import About from './About'; // About page
import Services from './services';
import Contact from './Contact';
import MyWorks from './MyWorks';
import Footer from './Footer';
import { useEffect } from 'react';
import { useState } from 'react';
import SplashScreen from './SplashScreen';
const App = ({ sidebarHovered = '5rem' })=> {
  const [showSplash, setShowSplash] = useState(true);
     
  useEffect(() => {
    // Hide splash after content loads
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5500);
    
    return () => clearTimeout(timer);
  }, []);


  return (
    
      <div className="flex min-h-screen">
        <Navbar />
        {showSplash && <SplashScreen />}
      <div className="flex-1 shadow-2xl overflow-auto">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path='/Services' element={<Services />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/MyWorks' element={<MyWorks />}></Route>
          </Routes>
            <Footer  sidebarWidth={sidebarHovered ? '' : '5rem'} />
        </div>
      </div>
  
  );
};

export default App;



