import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-blue-500 text-gray-200 dark:text-gray-200 py-6 px-4 ml-20 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Bilal. All rights reserved.</p>
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/LORDBILLZ17"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-black dark:hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:bilalmujeeb2008@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="hover:text-red-600"
          >
            <MdEmail />
          </a>
          <a
            href="https://www.linkedin.com/in/yourlinkedin/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/+2349071428947" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-600"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
