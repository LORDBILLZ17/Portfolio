import React, { useState, useEffect } from "react";
import { Home, User, Briefcase, Phone, Menu, X, Laptop2, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

// Updated Navbar with Black & Green Theme
const Navbar = ({ setSidebarHovered }) => {
  const savedTheme = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(savedTheme === null ? true : savedTheme === "true");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [activeTab, setActiveTab] = useState("/");
  const location = useLocation();

  // Update active tab when route changes
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

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

  const handleSidebarHover = (isHovered) => {
    setHovered(isHovered);
    setSidebarHovered(isHovered);
  };

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/about", icon: User, label: "About" },
    { path: "/Services", icon: Briefcase, label: "Services" },
    { path: "/Contact", icon: Phone, label: "Contact" },
    { path: "/MyWorks", icon: Laptop2, label: "My Works" },
  ];

  return (
    <>
      {/* Desktop Sidebar - Enhanced with black and green theme */}
      <motion.nav
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`hidden md:flex fixed left-0 top-0 h-full bg-black shadow-2xl flex-col items-start py-8 space-y-2 z-50 
        transition-all duration-300 ${hovered ? "w-56" : "w-20"} border-r border-lime-500/30`}
        onMouseEnter={() => handleSidebarHover(true)}
        onMouseLeave={() => handleSidebarHover(false)}
      >
        {/* Logo with better styling */}
        <motion.div 
          className="w-14 h-14 rounded-2xl border-2 border-lime-500/30 bg-lime-500/5 backdrop-blur-sm mx-auto mb-8 flex items-center justify-center overflow-hidden shadow-lg"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img
            src="/Logo.png"
            alt="Bilal Logo"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Navigation Items */}
        <div className="w-full space-y-2 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.path;
            
            return (
              <Link 
                to={item.path} 
                key={item.path}
                className="cursor-pointer outline-none w-full block"
                onClick={() => setActiveTab(item.path)}
              >
                <motion.div 
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-4 p-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? "bg-lime-500/20 text-lime-400 shadow-inner" 
                      : "text-lime-400/70 hover:bg-lime-500/10 hover:text-lime-400"
                  }`}
                >
                  <Icon size={24} className="flex-shrink-0" />
                  {hovered && (
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm font-medium"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Dark mode toggle with better styling */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleDarkMode}
          className="mt-auto mx-auto p-3 rounded-full bg-lime-500/10 backdrop-blur-sm text-lime-400 border border-lime-500/20 shadow-lg"
          aria-label="Toggle dark mode"
        >
          <AnimatePresence mode="wait">
            {darkMode ? (
              <motion.div
                key="sun"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Sun size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Moon size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Mobile Navbar - Enhanced with black and green theme */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="md:hidden fixed top-0 left-0 w-full bg-black backdrop-blur-md flex items-center justify-between px-5 py-3 z-50 shadow-lg border-b border-lime-500/30"
      >
        <motion.div 
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-xl border-2 border-lime-500/30 bg-lime-500/5 flex items-center justify-center overflow-hidden"
        >
          <img
            src="/Logo.png"
            alt="Bilal Logo"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-lime-500/10 text-lime-400 border border-lime-500/20"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu} 
            className="text-lime-400 p-2 rounded-lg bg-lime-500/10 border border-lime-500/20"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu - Enhanced with black and green theme */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-16 inset-x-0 mx-4 bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-lime-500/30 flex flex-col items-center justify-center space-y-2 py-6 z-40"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.path;
              
              return (
                <Link 
                  to={item.path} 
                  key={item.path}
                  onClick={() => {
                    setMenuOpen(false);
                    setActiveTab(item.path);
                  }}
                  className="w-full px-4"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? "bg-lime-500/20 text-lime-400 shadow-inner" 
                        : "text-lime-400/70 hover:bg-lime-500/10 hover:text-lime-400"
                    }`}
                  >
                    <Icon size={24} />
                    <span className="text-lg font-medium">{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


export default Navbar;