import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vc7ng43",
        "template_eti99bb",
        form.current,
        "gQgmmgJSOvxFkN1WB"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("Error sending email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="min-h-[120vh] bg-gray-100 dark:bg-gray-900 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-md w-full"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Send A Request
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="user_phone"
                placeholder="Phone Number"
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="text"
                name="user_country"
                placeholder="Country"
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
     
    </section>
  );
};

export default Contact;
