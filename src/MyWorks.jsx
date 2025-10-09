import { motion } from "framer-motion";
import { projects } from "./Data";

const Workshop = () => {
  return (
    <section className="pt-24 pb-20 bg-black lg:pl-20" id="workshop">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-lime-400">
          Featured Projects
        </h2>

        <p className="text-center text-lime-200 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          A selection of my most recent work — each project reflects practical solutions,
          real challenges, and measurable impact built with modern web technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-900 p-5 sm:p-6 rounded-2xl shadow-lg flex flex-col border border-lime-500/20 hover:border-lime-400/40 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />

              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-lime-400">
                {project.title}
              </h3>

              <p className="text-lime-200 text-sm sm:text-base mb-4 leading-relaxed">
                {project.description || 
                  "A detailed case study showcasing my approach to solving real-world problems through scalable, maintainable code."}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-lime-900/50 text-lime-300 text-xs sm:text-sm font-medium px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex space-x-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lime-400 hover:text-lime-300 text-sm sm:text-base transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lime-400 hover:text-lime-300 text-sm sm:text-base transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshop;
