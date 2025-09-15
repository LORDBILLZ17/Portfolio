import React, { useState, useEffect } from 'react';

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50">
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-lime-400 to-green-500 bg-clip-text text-transparent">
          LODBILLZ
        </h1>
        <p className="text-gray-500 text-lg md:text-xl tracking-widest mt-2 uppercase">
          Your All Tech Developer
        </p>
      </div>
      
      <div className="relative w-48 h-48 md:w-60 md:h-60 mb-8">
        {/* Orbital circles */}
        <div className="absolute inset-0 border-2 border-lime-500/20 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-10 border-2 border-lime-500/40 rounded-full animate-spin-medium reverse-spin"></div>
        <div className="absolute inset-20 border-2 border-lime-500/60 rounded-full animate-spin-fast"></div>
        
        {/* Core */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-lime-400 to-green-500 rounded-full shadow-lg shadow-lime-500/50"></div>
        
        {/* Particles */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-lime-400 rounded-full shadow-lg shadow-lime-400 animate-orbit1"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-lime-400 rounded-full shadow-lg shadow-lime-400 animate-orbit2"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-lime-400 rounded-full shadow-lg shadow-lime-400 animate-orbit3"></div>
      </div>
      
  
      
     
    </div>
  );
};

export default SplashScreen;