import { motion } from "framer-motion";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const About = () => {
  
  const Navigate = useNavigate ()
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center py-20">
      <div className="container max-w-screen-lg flex flex-col items-center space-y-10 px-6">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg mb-6"
        >
          <img
            src="/Logo.png"
            alt="Bilal"
            className="object-cover w-full h-full rounded-full"
          />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left space-y-6"
        >
          <h2 className="text-4xl font-bold text-black dark:text-white">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Hi, I'm Bilal! I'm a passionate developer with a love for creating
            innovative web applications. With experience in frontend and backend
            technologies, I enjoy bringing creative ideas to life. My goal is to
            create user-centric solutions that are both functional and beautiful.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I'm constantly exploring new technologies and tools to enhance my
            skills and build more powerful, scalable applications.
          </p>

          <p className="text-black text-3xl font-extrabold dark:text-white">
            My Skills
          </p>

          <div className="space-y-6">
            <div className="flex items-center justify-between text-gray-700 dark:text-gray-300">
              <span>JavaScript</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" style={{ width: "90%" }}></div>
            </div>

            <div className="flex items-center justify-between text-gray-700 dark:text-gray-300">
              <span>Tailwind</span>
              <span>95%</span>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" style={{ width: "95%" }}></div>
            </div>

            <div className="flex items-center justify-between text-gray-700 dark:text-gray-300">
              <span>HTML</span>
              <span>95%</span>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" style={{ width: "95%" }}></div>
            </div>

            <div className="flex items-center justify-between text-gray-700 dark:text-gray-300">
              <span>UI/UX</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" style={{ width: "90%" }}></div>
            </div>

            <div className="flex items-center justify-between text-gray-700 dark:text-gray-300">
              <span>Java</span>
              <span>85%</span>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" style={{ width: "85%" }}></div>
            </div>
            <br />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => Navigate ("/MyWorks")}
              className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-2xl shadow-lg text-lg"
            >
              View My Works
            </motion.button>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
};

export default About;
