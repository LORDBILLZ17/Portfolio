import { FaGithub, FaLinkedin, FaWhatsapp, FaTwitter, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = ({ sidebarWidth = '5rem' }) => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/LORDBILLZ17",
      label: "GitHub",
      color: "hover:text-lime-400",
      title: "Check out my code on GitHub"
    },
    {
      icon: <MdEmail />,
      href: "mailto:bilalmujeeb2008@gmail.com",
      label: "Email",
      color: "hover:text-lime-400",
      title: "Send me an email"
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/bilal-profile-name/",
      label: "LinkedIn",
      color: "hover:text-lime-400",
      title: "Connect with me on LinkedIn"
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/2347076675086",
      label: "WhatsApp",
      color: "hover:text-lime-400",
      title: "Message me on WhatsApp"
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com",
      label: "Twitter",
      color: "hover:text-lime-400",
      title: "Follow me on Twitter"
    },
    {
      icon: <FaDiscord />,
      href: "https://discord.com",
      label: "Discord",
      color: "hover:text-lime-400",
      title: "Join me on Discord"
    }
  ];

  return (
    <footer className="bg-black py-8 px-24 ml-[-20] border-t border-lime-500/20 w-full" style={{ marginLeft: sidebarWidth }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright text with animation */}
        <motion.p 
          className="text-lime-400 text-sm font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          &copy; {currentYear} Bilal.A | Crafting Digital Excellence
        </motion.p>
        
        {/* Social links with enhanced styling */}
        <div className="flex gap-5 text-xl">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`text-lime-500/80 ${link.color} transition-all duration-300 transform hover:scale-110 hover:text-lime-400 border border-lime-500/20 rounded-full p-2 bg-black/50 backdrop-blur-sm`}
              title={link.title}
              whileHover={{ 
                scale: 1.2,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        
        {/* Additional footer text */}
        <motion.p 
          className="text-lime-500/60 text-xs font-light hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Built with React & Tailwind CSS
        </motion.p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden h-1">
        <motion.div 
          className="h-full bg-gradient-to-r from-transparent via-lime-500/50 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;