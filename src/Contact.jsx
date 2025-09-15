import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaBell } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const showToast = (message, type = "success") => {
    const toast = document.getElementById("toast");
    const messageSpan = document.getElementById("toast-message");

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
    setIsSending(true);

    emailjs
      .sendForm(
        "service_zrcvm56", // Your EmailJS service ID
        "template_eqt9bgj", // Your EmailJS template ID
        form.current,
        "gQgmmgJSOvxFkN1WB" // Your EmailJS public key
      )
      .then(
        (result) => {
          showToast(" 🔔 Your Message was sent successfully! I'll reply to you soon .", "success");
          setIsSending(false);
          setSent(true);
          form.current.reset();
          
          setTimeout(() => {
            setSent(false);
          }, 3000);
        },
        (error) => {
          showToast("Oops! Something went Wrong. Please try again later.", "error");
          console.error(error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <section className="min-h-screen bg-black py-24 px-4">
      {/* Toast Notification */}
      <div
        id="toast"
        className="hidden fixed bottom-5 right-5 z-50 items-center bg-green-500 text-white text-sm font-medium px-4 py-3 rounded-lg shadow-lg transition-all duration-300 opacity-0 max-w-md"
      >
        <span id="toast-message"></span>
      </div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-900 p-6 sm:p-10 rounded-2xl shadow-md w-full border border-lime-500/30"
        >
          <h2 className="text-3xl font-bold text-lime-400 mb-6 text-center sm:text-left">
            Send Me A Message
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                  className="p-3 rounded-lg border border-lime-500/30 w-full bg-gray-800 text-lime-200 placeholder-lime-400/50 focus:border-lime-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                  className="p-3 rounded-lg border border-lime-500/30 w-full bg-gray-800 text-lime-200 placeholder-lime-400/50 focus:border-lime-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Phone Number"
                  className="p-3 rounded-lg border border-lime-500/30 w-full bg-gray-800 text-lime-200 placeholder-lime-400/50 focus:border-lime-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="user_country"
                  placeholder="Country"
                  className="p-3 rounded-lg border border-lime-500/30 w-full bg-gray-800 text-lime-200 placeholder-lime-400/50 focus:border-lime-500 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
                className="p-3 rounded-lg border border-lime-500/30 w-full bg-gray-800 text-lime-200 placeholder-lime-400/50 focus:border-lime-500 focus:outline-none"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-lime-500 hover:bg-lime-600 disabled:bg-lime-700 text-black font-bold py-3 px-4 rounded-xl transition duration-300"
              disabled={isSending || sent}
            >
              {isSending ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : sent ? (
                "Request Sent"
              ) : (
                "Send Request"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;