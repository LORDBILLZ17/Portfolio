import { useState, useRef } from "react";
import { FaPaintBrush, FaCode, FaMobileAlt, FaObjectGroup, FaCodepen, FaCodeBranch } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Services = () => {
  const [activeForm, setActiveForm] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const closeForm = () => setActiveForm(null);

  const showToast = (message, type = "success") => {
    const toast = document.getElementById("services-toast");
    const messageSpan = document.getElementById("services-toast-message");

    messageSpan.textContent = message;

    toast.classList.remove("bg-green-500", "bg-red-500");
    toast.classList.add(type === "success" ? "bg-green-500" : "bg-red-500");

    toast.classList.remove("hidden", "opacity-0");
    toast.classList.add("flex", "opacity-100");

    setTimeout(() => {
      toast.classList.remove("opacity-100");
      toast.classList.add("opacity-0");
      setTimeout(() => {
        toast.classList.remove("flex");
        toast.classList.add("hidden");
      }, 300);
    }, 5000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_zrcvm56",
        "template_eqt9bgj",
        formRef.current,
        "gQgmmgJSOvxFkN1WB"
      )
      .then(
        (result) => {
          showToast("Request sent successfully! I'll get back to you shortly.", "success");
          formRef.current.reset();
          setIsSubmitting(false);
          closeForm();
        },
        (error) => {
          showToast("Oops!! Something went Wrong. Please try again later.", "error");
          console.error(error.text);
          setIsSubmitting(false);
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
      price: " $250",
    },
    {
      id: "graphics",
      title: "Graphics Design",
      description:
        "I create visuals that communicate your brand clearly — logos, posters, social graphics, and more.",
      icon: <FaPaintBrush size={40} className="text-lime-400" />,
      price: " $70",
    },
    {
      id: "apps",
      title: "Application Development",
      description:
        "Cross-platform mobile and desktop apps with full-cycle development from concept to deployment.",
      icon: <FaMobileAlt size={40} className="text-lime-400" />,
      price: " $170",
    },
    {
      id: "Backend",
      title: "Backend Management",
      description:
        "Robust backend solutions with full-cycle development from architecture design to deployment and maintenance.",
      icon: <FaCodeBranch size={40} className="text-lime-400" />,
      price: " $120",
    },
    {
      id: "Frontend",
      title: "Frontend Management",
      description:
        "Modern, responsive frontend development from UX/UI design to implementation and optimization across web and mobile platforms.",
      icon: <FaCodepen size={40} className="text-lime-400" />,
      price: " $100",
    },
  ];

  return (
    <section className="pt-24 pb-12 md:py-20 bg-black lg:pl-20 " id="services">
      {/* Toast Notification */}
      <div
        id="services-toast"
        className="hidden fixed top-5 right-5 z-50 items-center bg-green-500 text-white text-sm font-medium px-4 py-3 rounded-lg shadow-lg transition-all duration-300 opacity-0 max-w-md"
      >
        <span id="services-toast-message"></span>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-lime-400">
          My Services
        </h2>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col relative overflow-hidden border border-lime-500/20"
            >
              <div className="mb-4 sm:mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-lime-400">
                {service.title}
              </h3>
              <p className="text-lime-200 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                {service.description}
              </p>
              <button
                onClick={() => setActiveForm(service.id)}
                className="mt-auto bg-lime-500 hover:bg-lime-600 text-black font-medium py-2 px-4 rounded-xl transition duration-300 text-sm sm:text-base"
              >
                Hire Me
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {activeForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-3 sm:p-4">
          <div className="bg-gray-900 w-full max-w-lg rounded-2xl shadow-2xl relative border border-lime-500/30 flex flex-col max-h-[90vh] mx-2 sm:mx-0">
            <div className="p-4 sm:p-6 border-b border-lime-500/20 sticky top-0 bg-gray-900 rounded-t-2xl z-10">
              <button
                onClick={closeForm}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-lime-400 hover:text-red-500 text-xl"
              >
                &times;
              </button>
              <h3 className="text-xl sm:text-2xl font-bold text-center text-lime-400 pr-8">
                Hire Me - {services.find((s) => s.id === activeForm)?.title}
              </h3>
            </div>
            
            <div className="overflow-y-auto p-4 sm:p-6">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-3 sm:space-y-4">
                <input type="hidden" name="service_type" value={services.find((s) => s.id === activeForm)?.title} />
                
                <div>
                  <label htmlFor="name" className="block text-lime-300 mb-1 sm:mb-2 text-sm sm:text-base">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-lime-200 border border-lime-500/30 focus:border-lime-500 focus:outline-none text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-lime-300 mb-1 sm:mb-2 text-sm sm:text-base">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-lime-200 border border-lime-500/30 focus:border-lime-500 focus:outline-none text-sm sm:text-base"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-lime-300 mb-1 sm:mb-2 text-sm sm:text-base">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="user_phone"
                    className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-lime-200 border border-lime-500/30 focus:border-lime-500 focus:outline-none text-sm sm:text-base"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="country" className="block text-lime-300 mb-1 sm:mb-2 text-sm sm:text-base">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="user_country"
                    className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-lime-200 border border-lime-500/30 focus:border-lime-500 focus:outline-none text-sm sm:text-base"
                    placeholder="Enter your country"
                  />
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-lime-300 mb-1 sm:mb-2 text-sm sm:text-base">Budget Range</label>
                  <select
                    id="budget"
                    name="user_budget"
                    className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-lime-200 border border-lime-500/30 focus:border-lime-500 focus:outline-none text-sm sm:text-base"
                  >
                    <option value="">Select budget range</option>
                    <option value="$100 - $500">$100 - $500</option>
                    <option value="$500 - $1000">$500 - $1000</option>
                    <option value="$1000 - $5000">$1000 - $5000</option>
                    <option value="$5000+">$5000+</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="timeline" className="block text-lime-300 mb-1 sm:mb-2 text-sm sm:text-base">Project Timeline</label>
                  <select
                    id="timeline"
                    name="user_timeline"
                    className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-lime-200 border border-lime-500/30 focus:border-lime-500 focus:outline-none text-sm sm:text-base"
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1-2 weeks">1-2 weeks</option>
                    <option value="1 month">1 month</option>
                    <option value="2-3 months">2-3 months</option>
                    <option value="3+ months">3+ months</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-lime-300 mb-1 sm:mb-2 text-sm sm:text-base">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-lime-200 border border-lime-500/30 focus:border-lime-500 focus:outline-none text-sm sm:text-base"
                    placeholder="Tell me about your project requirements, goals, and any specific details you'd like to share"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-lime-500 hover:bg-lime-600 disabled:bg-lime-700 text-black font-bold py-2 sm:py-3 px-4 rounded-xl transition duration-300 mt-3 sm:mt-4 text-sm sm:text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Request"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;