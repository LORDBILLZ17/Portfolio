import { motion } from "framer-motion";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const generateBubbles = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 40) + 30,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: 5 + Math.random() * 2,
    delay: Math.random() * 5,
  }));
};

const bubbles = generateBubbles(10);


const Hero = () => {

  const Navigate = useNavigate ()
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
      <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500 w-full pt-40">
       
        {bubbles.map((bubble) => (
           <motion.div
            key={bubble.id}
            className="absolute rounded-full bg-blue-300 dark:bg-blue-700 opacity-40"
            style={{
              width: bubble.size,
              height: bubble.size,
              top: bubble.top,
              left: bubble.left,
            }}
            animate={{
              y: [0, -20, 0, 20, 0],
              x: [0, 10, -10, 5, 0],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "easeInOut",
            }}
          />
        ))}

       
        <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row justify-center items-center px-6  md:px-20 py-16 md:py-0 space-y-6 md:space-y-0 h-full ">
        
          <div className="flex flex-col space-y-4 md:space-y-6 text-center md:text-left md:w-1/2 mt-[20px] md:mt-0 md:order-1 ">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-200"
            >
              Hi, I'm Bilal.A 👋
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-900 dark:text-gray-200 max-w-xl mx-auto md:mx-0"
            >
              I'm a passionate developer crafting beautiful web experiences. I
              specialize in creating elegant and efficient solutions that bring
              ideas to life go.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => Navigate ("/MyWorks")}
              className="bg-blue-900 dark:bg-blue-500 text-white px-8 py-4 rounded-2xl shadow-lg text-lg w-fit mx-auto md:mx-0 transform transition-transform duration-300"
            >
              View My Works
            </motion.button>
          </div>

          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white dark:border-blue-300 shadow-2xl mb-6 md:mb-0 md:order-2"
          >
            <img
              src="/Logo.png"
              alt="Bilal"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
     
    </section>
  );
};

export default Hero;
