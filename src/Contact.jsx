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
    <section className="min-h-[120vh] bg-black py-24 px-4" style={{ marginLeft: '5rem', transition: 'margin-left 0.3s ease' }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-900 p-10 rounded-2xl shadow-md w-full border border-lime-500/30"
        >
          <h2 className="text-3xl font-bold text-lime-400 mb-6">
            Send A Request
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                className="p-3 rounded-lg border border-lime-500/30 w-full bg-gray-800 text-lime-200 placeholder-lime-400/50"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="p-3 rounded-lg border border-lime-500/30 w-full bg-gray-800 text-lime-200 placeholder-lime-400/50"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="user_phone"
                placeholder="Phone Number"
                className="p-3 rounded-lg border border-lime-500/30 w-full bg-gray-800 text-lime-200 placeholder-lime-400/50"
              />
              <input
                type="text"
                name="user_country"
                placeholder="Country"
                className="p-3 rounded-lg border border-lime-500/30 w-full bg-gray-800 text-lime-200 placeholder-lime-400/50"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="p-3 rounded-lg border border-lime-500/30 w-full bg-gray-800 text-lime-200 placeholder-lime-400/50"
            />
            <button
              type="submit"
              className="w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold py-3 px-6 rounded-xl transition-all"
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
