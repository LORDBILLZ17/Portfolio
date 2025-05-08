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
          alert("Message sent successfully, we will get backto you shortly!");
          formRef.current.reset();
          closeForm();
        },
        (error) => {
          alert("Oops!!,Failed to send message. Please try again Later.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 relative z-0" id="services">
      <div className={`container mx-auto px-6 ${activeForm && "blur-sm brightness-75 transition-all duration-300"}`}>
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition duration-300 min-h-[350px] flex flex-col justify-between relative"
            >
              <span className="absolute top-4 right-4 text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                {service.price}
              </span>

              <div className="mb-6 text-indigo-600 dark:text-indigo-400">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setActiveForm(service.id)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-xl transition duration-300"
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {activeForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white dark:bg-gray-800 w-full max-w-lg p-8 rounded-2xl shadow-2xl relative">
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
              Hire Me - {services.find((s) => s.id === activeForm)?.title}
            </h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input type="hidden" name="service_type" value={activeForm} />
              <div>
                <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="+1 234 567 890"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Tell me more about your project..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-2xl transition duration-300"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>  
  );
};

export default Services;
