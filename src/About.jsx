import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
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
  return (
    <section className="min-h-screen bg-black flex items-center justify-center py-16 md:py-20 px-4">
      <div className="container max-w-4xl flex flex-col items-center space-y-8 md:space-y-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg mb-4 md:mb-6 border-4 border-lime-500/30"
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
          className="text-center space-y-6 w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lime-400">About Me</h2>
          <p className="text-base md:text-lg text-lime-200">
            Hi, I'm Lordbillz! I'm a passionate developer with a love for creating
            innovative web applications. With experience in frontend and backend
            technologies, I enjoy bringing creative ideas to life. My goal is to
            create user-centric solutions that are both functional and beautiful.
          </p>
          <p className="text-base md:text-lg text-lime-200">
            I'm constantly exploring new technologies and tools to enhance my
            skills and build more powerful, scalable applications.
          </p>

          <p className="text-lime-400 text-2xl md:text-3xl font-extrabold mt-8">
            My Skills
          </p>

          <div className="space-y-4 md:space-y-6">
            {[
              { skill: "JavaScript", percentage: "90%" },
              { skill: "Tailwind", percentage: "95%" },
              { skill: "Django", percentage: "90%" },
              { skill: "Python", percentage: "90%" },
              { skill: "HTML", percentage: "95%" },
              { skill: "UI/UX", percentage: "90%" },
              { skill: "Java", percentage: "85%" },
              { skill: "Graphics Design", percentage: "95%" },             
            ].map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between text-lime-200 text-sm md:text-base">
                  <span>{item.skill}</span>
                  <span>{item.percentage}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 md:h-2.5 mt-1">
                  <div 
                    className="bg-lime-500 h-full rounded-full" 
                    style={{ width: item.percentage }}
                  ></div>
                </div>
              </div>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/MyWorks")}
              className="bg-lime-500 hover:bg-lime-600 text-black px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl shadow-lg text-base md:text-lg mt-6 w-full md:w-auto"
            >
              View My Works
            </motion.button>
           
          </div>
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
      </div>
                  
    </section>
  );
};

export default About;