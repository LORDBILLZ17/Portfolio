import { motion } from "framer-motion";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-black flex items-center justify-center py-20" style={{ marginLeft: '5rem', transition: 'margin-left 0.3s ease' }}>
      <div className="container max-w-screen-lg flex flex-col items-center space-y-10 px-6">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg mb-6 border-4 border-lime-500/30"
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
          <h2 className="text-4xl font-bold text-lime-400">About Me</h2>
          <p className="text-lg text-lime-200">
            Hi, I'm Bilal! I'm a passionate developer with a love for creating
            innovative web applications. With experience in frontend and backend
            technologies, I enjoy bringing creative ideas to life. My goal is to
            create user-centric solutions that are both functional and beautiful.
          </p>
          <p className="text-lg text-lime-200">
            I'm constantly exploring new technologies and tools to enhance my
            skills and build more powerful, scalable applications.
          </p>

          <p className="text-lime-400 text-3xl font-extrabold">
            My Skills
          </p>

          <div className="space-y-6">
            {[
              { skill: "JavaScript", percentage: "90%" },
              { skill: "Tailwind", percentage: "95%" },
              { skill: "Django", percentage: "95%" },
              { skill: "Python", percentage: "90%" },
              { skill: "HTML", percentage: "95%" },
              { skill: "UI/UX", percentage: "90%" },
              { skill: "Java", percentage: "85%" },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between text-lime-200">
                  <span>{item.skill}</span>
                  <span>{item.percentage}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-lime-500 h-2.5 rounded-full" 
                    style={{ width: item.percentage }}
                  ></div>
                </div>
              </div>
            ))}
            <br />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/MyWorks")}
              className="bg-lime-500 hover:bg-lime-600 text-black px-8 py-4 rounded-2xl shadow-lg text-lg"
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
