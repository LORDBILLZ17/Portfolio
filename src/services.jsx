import { useState, useRef } from "react";
import { FaPaintBrush, FaCode, FaMobileAlt, FaObjectGroup } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

const services = [
  {
    id: "uiux",
    title: "UI/UX Design",
    description:
      "With a strong foundation in human-centered design, I deliver intuitive and visually appealing interfaces that elevate user satisfaction.",
    icon: <FaObjectGroup size={40} />,
    price: " $120",
  },
  {
    id: "webdev",
    title: "Web Development",
    description:
      "Fast, scalable, and responsive websites using modern technologies. Clean code and future-ready architecture.",
    icon: <FaCode size={40} />,
    price: " $200",
  },
  {
    id: "graphics",
    title: "Graphics Design",
    description:
      "I create visuals that communicate your brand clearly — logos, posters, social graphics, and more.",
    icon: <FaPaintBrush size={40} />,
    price: " $150",
  },
  {
    id: "apps",
    title: "Application Development",
    description:
      "Cross-platform mobile and desktop apps with full-cycle development from concept to deployment.",
    icon: <FaMobileAlt size={40} />,
    price: " $100",
  },
];

// Updated Services with Black & Green Theme
const Services = () => {
  const [activeForm, setActiveForm] = useState(null);
  const formRef = useRef();

  const closeForm = () => setActiveForm(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zrcvm56",
        "template_eqt9bgj",
        formRef.current,
        "gQgmmgJSOvxFkN1WB"
      )
      .then(
        (result) => {
          alert("Message sent successfully, we will get back to you shortly!");
          formRef.current.reset();
          closeForm();
        },
        (error) => {
          alert("Oops!!,Failed to send message. Please try again Later.");
          console.error(error.text);
        }
      );
  };

  const services = [
    {
      id: "uiux",
      title: "UI/UX Design",
      description:
        "With a strong foundation in human-centered design, I deliver intuitive and visually appealing interfaces that elevate user satisfaction.",
      icon: <FaObjectGroup size={40} className="text-lime-400" />,
      price: " $120",
    },
    {
      id: "webdev",
      title: "Web Development",
      description:
        "Fast, scalable, and responsive websites using modern technologies. Clean code and future-ready architecture.",
      icon: <FaCode size={40} className="text-lime-400" />,
      price: " $200",
    },
    {
      id: "graphics",
      title: "Graphics Design",
      description:
        "I create visuals that communicate your brand clearly — logos, posters, social graphics, and more.",
      icon: <FaPaintBrush size={40} className="text-lime-400" />,
      price: " $150",
    },
    {
      id: "apps",
      title: "Application Development",
      description:
        "Cross-platform mobile and desktop apps with full-cycle development from concept to deployment.",
      icon: <FaMobileAlt size={40} className="text-lime-400" />,
      price: " $100",
    },
  ];

  return (
    <section className="py-20 bg-black" id="services" style={{ marginLeft: '5rem', transition: 'margin-left 0.3s ease' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-lime-400">
          My Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              className="bg-gray-900 p-8 rounded-2xl shadow-lg flex flex-col relative overflow-hidden border border-lime-500/20"
            >
              <span className="absolute top-4 right-4 text-xl font-bold text-lime-400">
                {service.price}
              </span>
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-lime-400">
                {service.title}
              </h3>
              <p className="text-lime-200 leading-relaxed mb-6">
                {service.description}
              </p>
              <button
                onClick={() => setActiveForm(service.id)}
                className="mt-auto bg-lime-500 hover:bg-lime-600 text-black font-medium py-2 px-4 rounded-xl transition duration-300"
              >
                Hire Me
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {activeForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-gray-900 w-full max-w-lg p-8 rounded-2xl shadow-2xl relative border border-lime-500/30">
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 text-lime-400 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-6 text-center text-lime-400">
              Hire Me - {services.find((s) => s.id === activeForm)?.title}
            </h3>
            {/* Form content remains the same */}
     
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
