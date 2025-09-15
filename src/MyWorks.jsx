import { motion } from "framer-motion";
import { projects } from "./Data";
import Footer from "./Footer";

const Workshop = () => {
  

  return (
    <section className="pt-24 pb-20 bg-black" id="workshop" style={{ marginLeft: '5rem', transition: 'margin-left 0.3s ease' }}>
      <div className="container px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-lime-400">
          Recent Projects.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((projects, index) => (
            <motion.div
              key={projects.id}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col border border-lime-500/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={projects.image}
                alt={projects.title}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-lime-400">
                {projects.title}
              </h3>
              <p className="text-lime-200 mb-4">
                {projects.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {projects.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-lime-900 text-lime-400 text-sm font-medium px-2.5 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex space-x-4">
                <a
                  href={projects.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime-400 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={projects.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Workshop;
