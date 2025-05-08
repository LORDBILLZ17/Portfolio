import React, { useState, useEffect } from "react";
import { Home, User, Briefcase, Phone, Menu, Laptop2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const savedTheme = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(savedTheme === null ? true : savedTheme === "true");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-20 bg-blue-900 dark:bg-gray-800 shadow-lg flex-col items-center py-10 space-y-10 z-50">
        <img
          src="/Logo.png"
          alt="Bilal Logo"
          className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-400 mb-6"
        />

        <Link to="/" className="cursor-pointer outline-none">
          <motion.div whileHover={{ scale: 1.2 }}>
            <Home size={28} className="text-black dark:text-white" />
          </motion.div>
        </Link>

        
        <Link to="/about" className="cursor-pointer outline-none">
          <motion.div whileHover={{ scale: 1.2 }}>
            <User size={28} className="text-black dark:text-white" />
          </motion.div>
        </Link>

        <Link to="/Services" className="cursor-pointer outline-none">
          <motion.div whileHover={{ scale: 1.2 }}>
            <Briefcase size={28} className="text-black dark:text-white" />
          </motion.div>
        </Link>

        <Link to="/Contact" className="cursor-pointer outline-none">
          <motion.div whileHover={{ scale: 1.2 }}>
            <Phone size={28} className="text-black dark:text-white" />
          </motion.div>
        </Link>

        
        <Link to="/MyWorks" className="cursor-pointer outline-none">
          <motion.div whileHover={{ scale: 1.2 }}>
            <Laptop2 size={28} className="text-black dark:text-white" />
          </motion.div>
        </Link>
        <motion.button
          whileHover={{ scale: 1.2 }}
          onClick={toggleDarkMode}
          className="mt-auto text-2xl outline-none"
        >
          {darkMode ? "☀️" : "🌙"}
        </motion.button>
      </nav>

      
      <div className="md:hidden fixed top-0 left-0 w-full bg-blue-900 dark:bg-gray-800 flex items-center justify-between px-4 py-3 z-50 shadow-md">
        <img
          src="/Logo.png"
          alt="Bilal Logo"
          className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-400"
        />
        <button onClick={toggleMenu} className="text-white">
          <Menu size={28} />
        </button>
      </div>

      
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden fixed top-16 left-0 w-full bg-blue-900 dark:bg-gray-800 flex flex-col items-center justify-center text-center space-y-6 py-8 z-40 shadow-lg"
        >
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-white text-lg">
            <Home className="mx-auto mb-1" size={24} />
            Home
          </Link>

          <Link to="/Contact" onClick={() => setMenuOpen(false)} className="text-white text-lg">
            <Phone className="mx-auto mb-1" size={24} />
            Contact
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-white text-lg">
            <User className="mx-auto mb-1" size={24} />
            About
          </Link>

          <Link to="/Services" onClick={() => setMenuOpen(false)} className="text-white text-lg">
            <Briefcase className="mx-auto mb-1" size={24} />
            Services
          </Link>

          <Link to="/Myworks" onClick={() => setMenuOpen(false)} className="text-white text-lg">
            <Briefcase className="mx-auto mb-1" size={24} />
            Myworks
          </Link>

          <button onClick={toggleDarkMode} className="text-xl text-white mt-2">
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
