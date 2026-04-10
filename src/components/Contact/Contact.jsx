"use client";
import React, { useRef, useState } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("All fields are required");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Enter a valid email address");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, API_KEY)
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        toast.success("Message sent successfully");
      })
      .catch(() => {
        toast.error("Failed to send. Try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const inputClasses =
    "w-full bg-glass border border-glass-border rounded-xl px-4 py-3 text-text-primary text-sm placeholder:text-text-dim focus:border-accent/40 focus:outline-none transition-colors duration-300";

  return (
    <Element name="contact">
      <section id="contact" className="py-28 md:py-36" aria-labelledby="contact-heading">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-xl mx-auto px-4 md:px-8"
        >
          <motion.p
            variants={fadeUp}
            className="text-accent text-[11px] font-mono tracking-[0.15em] uppercase mb-3"
          >
            Contact
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-text-primary text-3xl md:text-4xl font-bold tracking-tight mb-10"
          >
            <span id="contact-heading">Let's build something</span>
          </motion.h2>

          <motion.form
            variants={fadeUp}
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div>
              <label htmlFor="name" className="block text-text-muted text-xs mb-1.5">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-text-muted text-xs mb-1.5">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-text-muted text-xs mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
                placeholder="What's on your mind?"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-text-primary text-canvas text-sm font-semibold py-3 rounded-full transition-all duration-300 ease-out-expo hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-canvas/30 border-t-canvas rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                "Send message"
              )}
            </button>
          </motion.form>

          <ToastContainer
            position="bottom-right"
            autoClose={4000}
            theme="dark"
            toastStyle={{ background: "var(--color-surface)", border: "1px solid var(--color-glass-border)" }}
          />
        </motion.div>
      </section>
    </Element>
  );
};

export default Contact;
