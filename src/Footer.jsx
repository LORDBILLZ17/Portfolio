import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (

    <footer className="bg-gray-900 dark:bg-blue-500 text-gray-200 py-6 px-4">
  <div className="ml-[20%] max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-sm">&copy; {new Date().getFullYear()} Bilal. All rights reserved.</p>
    <div className="flex gap-5 text-xl">
      <a
        href="https://github.com/LORDBILLZ17"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-black dark:hover:text-white"
        title="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="mailto:bilalmujeeb2008@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
        className="hover:text-red-600"
        title="Email"
      >
        <MdEmail />
      </a>
      <a
        href="https://www.linkedin.com/in/bilal-profile-name/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-blue-600"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://wa.me/2349071428947" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="hover:text-green-600"
        title="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  </div>
</footer>



  );
};

export default Footer;
