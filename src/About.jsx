import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  // Function to handle resume download
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Make sure resume.pdf is in public/
    link.download = "LordBillz_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("Resume download initiated");
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center py-16 md:py-20 px-4">
      <div className="container max-w-4xl flex flex-col items-center space-y-8 md:space-y-10">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg mb-4 md:mb-6 border-4 border-lime-500/30"
        >
          <img
            src="/Logo.png"
            alt="LordBillz"
            className="object-cover w-full h-full rounded-full"
          />
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-6 w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lime-400">About Me</h2>
          <p className="text-base md:text-lg text-lime-200 leading-relaxed">
            Hi, I’m <span className="text-lime-400 font-semibold">Lordbillz</span> — a 
            full-stack developer passionate about building fast, accessible, and visually engaging
            digital experiences. I specialize in <strong>React, Django, Node.js, and REST APIs</strong>, 
            combining clean code with strong UI/UX principles to create functional, user-centered products.
          </p>

          <p className="text-base md:text-lg text-lime-200 leading-relaxed">
            I focus on solving real-world problems with scalable, maintainable web applications. 
            Beyond coding, I’m committed to learning emerging technologies like Web3 and improving 
            performance optimization and system design in every project I build.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/MyWorks")}
              className="bg-lime-500 hover:bg-lime-600 text-black px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl shadow-lg text-base md:text-lg w-full sm:w-auto"
            >
              View My Projects
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px -10px rgba(100, 200, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
              className="relative bg-gradient-to-r from-lime-500 to-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-lg md:text-xl shadow-xl md:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
