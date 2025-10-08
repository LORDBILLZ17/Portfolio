import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Advanced particle system with multiple types
const generateParticles = (count) => {
  const particles = [];
  const types = ['circle', 'square', 'triangle', 'line', 'blob'];
  const colors = [
    'rgba(173, 255, 47, 0.8)', // LemonGreen
    'rgba(50, 205, 50, 0.6)', // LimeGreen
    'rgba(152, 251, 152, 0.6)', // PaleGreen
    'rgba(0, 255, 127, 0.6)' // SpringGreen
  ];
  
  for (let i = 0; i < count; i++) {
    const type = types[Math.floor(Math.random() * types.length)];
    const size = Math.floor(Math.random() * 25) + 6;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particles.push({
      id: i,
      type,
      size,
      color,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 20 + Math.random() * 20,
      delay: Math.random() * 10,
      rotation: Math.random() * 360,
      blur: Math.random() * 5,
    });
  }
  
  return particles;
};

const particles = generateParticles(20);

const Hero = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  
  const textVariants = [
    "A Full Stack Developer",
    "A Web3 Enthusiast",
    "A Project Manager",
    "A Database Manager",
    "A Problem Solver",
    "A Graphic Designer"
  ];

  // Function to handle resume download
  const downloadResume = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    
    // Path to your resume file in the public folder
    // Make sure to place your resume.pdf file in the public folder
    link.href = '/resume.pdf';
    
    // Set the download attribute with the desired file name
    link.download = 'Lord_B_Resume.pdf';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Track download event with analytics
    console.log('Resume download initiated');
  };

  // Animated text cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textVariants.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 40;
        setMousePosition({ x, y });
      }
    };
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setScrollProgress(Math.min(scrollY / windowHeight, 1));
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  
  // Dynamic background with multiple gradients and effects
  const bgGradient = `
    radial-gradient(circle at 0% 0%, rgba(0, 0, 0, 0.9) 0%, transparent 50%),
    radial-gradient(circle at 100% 0%, rgba(30, 30, 30, 0.7) 0%, transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(20, 20, 20, 0.8) 0%, transparent 50%),
    radial-gradient(circle at 0% 100%, rgba(10, 10, 10, 0.6) 0%, transparent 50%),
    linear-gradient(${135 + scrollProgress * 45}deg, 
      rgba(0, 0, 0, 0.95) 0%, 
      rgba(30, 30, 30, ${0.8 - scrollProgress * 0.3}) 40%, 
      rgba(20, 20, 20, ${0.9 - scrollProgress * 0.4}) 100%
    )
  `;

  return (
    <motion.section 
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden lg:pl-20 lg:mt-0 mt-16" // Added margin for sidebar and navbar
      style={{
        background: bgGradient,
      }}
      initial="hidden"
      animate="visible"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid pattern */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(173, 255, 47, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(173, 255, 47, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            backgroundPosition: `${mousePosition.x * 0.1}px ${mousePosition.y * 0.1}px`,
          }}
        />
        
        {/* Advanced particles */}
        {particles.map((particle) => (
          <motion.div
            key={`particle-${particle.id}`}
            className={`absolute ${particle.type === 'circle' ? 'rounded-full' : ''} ${particle.type === 'triangle' ? 'transform rotate-0' : ''}`}
            style={{
              width: particle.size,
              height: particle.type === 'line' ? 2 : particle.size,
              top: particle.top,
              left: particle.left,
              rotate: particle.rotation,
              background: particle.color,
              filter: `blur(${particle.blur}px)`,
              clipPath: particle.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              rotate: particle.rotation + 360,
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-16 md:py-0">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Text content */}
          <motion.div 
            className="text-center lg:text-left space-y-6 md:space-y-8"
            variants={containerVariants}
            style={{
              x: mousePosition.x * -0.5,
              y: mousePosition.y * -0.5,
            }}
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.p 
                className="text-lg md:text-xl font-medium text-lime-300 tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Welcome to My Digital Universe
              </motion.p>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400">Lord.B</span>
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
              <div className="h-12 md:h-16 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.h2 
                    key={currentTextIndex}
                    className="text-xl sm:text-2xl md:text-3xl font-semibold text-lime-400"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {textVariants[currentTextIndex]}
                  </motion.h2>
                </AnimatePresence>
              </div>
              <motion.p
                className="text-lg md:text-xl text-lime-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                I craft immersive digital experiences that blend cutting-edge technology with 
                artistic vision. From concept to deployment, I transform ideas into exceptional 
                web solutions that captivate audiences and deliver measurable results.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px -10px rgba(173, 255, 47, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/MyWorks")}
                className="relative bg-gradient-to-r from-lime-500 to-green-600 text-black px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-lg md:text-xl shadow-xl md:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10">Explore My Works</span>
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px -10px rgba(173, 255, 47, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/Contact")}
                className="relative border-2 border-lime-400 text-lime-400 px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-lg md:text-xl backdrop-blur-xl bg-black/30"
              >
                <span className="relative z-10">Start a Project</span>
              </motion.button>

              {/* Download Resume Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px -10px rgba(100, 200, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume}
                className="relative bg-gradient-to-r from-lime-500 to-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-lg md:text-xl shadow-xl md:shadow-2xl overflow-hidden mt-4 sm:mt-0"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </span>
              </motion.button>
            </motion.div>
            
            {/* Stats bar */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start mt-6 md:mt-8"
            >
              {[
                { value: "40+", label: "Projects" },
                { value: "3+", label: "Years Exp" },
                { value: "99.99%", label: "Satisfaction" },
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-lime-500/10 backdrop-blur-sm border border-lime-500/20"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-xl md:text-2xl font-bold text-lime-400">{stat.value}</div>
                  <div className="text-lime-300 text-xs md:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image content with advanced effects */}
          <motion.div 
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.5,
            }}
            onHoverStart={() => setIsHoveringImage(true)}
            onHoverEnd={() => setIsHoveringImage(false)}
          >
            <div className="relative">
              <motion.div 
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden border-4 border-lime-400/30 shadow-xl md:shadow-2xl relative"
                whileHover={{ 
                  rotate: isHoveringImage ? 5 : 0,
                  transition: { duration: 0.5 }
                }}
              >
                <img
                  src="/Logo.png"
                  alt="Lord.B - Full Stack Developer & Projects Manager"
                  className="object-cover w-full h-full"
                />
                
                {/* Hover effect overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-lime-500/30 to-green-500/30 opacity-0"
                  animate={{ opacity: isHoveringImage ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              {/* Floating elements around image */}
              <motion.div 
                className="absolute -top-4 -left-4 w-16 h-16 md:-top-6 md:-left-6 md:w-24 md:h-24 rounded-full bg-lime-400/30 mix-blend-overlay blur-xl md:blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-14 h-14 md:-bottom-6 md:-right-6 md:w-20 md:h-20 rounded-full bg-green-400/30 mix-blend-overlay blur-xl md:blur-2xl"
                animate={{
                  scale: [1.3, 1, 1.3],
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;