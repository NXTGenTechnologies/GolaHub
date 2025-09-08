"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Contact() {
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const infoVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-gradient"></div>

      <div className="relative z-10">
        <Navbar />

        <section className="py-16 text-center px-4 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
          >
            We’d love to hear from you. Whether you have a question, suggestion, or just want to say hello, drop us a message and we’ll get back to you as soon as possible.
          </motion.p>
        </section>

        <section className="py-12 md:py-16 max-w-3xl mx-auto px-4 md:px-8 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg">
          <motion.form
            initial="hidden"
            whileInView="visible"
            variants={formVariants}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={formVariants}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-primary/20 rounded-xl bg-white/50 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary hover:shadow-md transition-all duration-300"
              />
            </motion.div>
            <motion.div variants={formVariants}>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border border-primary/20 rounded-xl bg-white/50 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary hover:shadow-md transition-all duration-300"
              />
            </motion.div>
            <motion.div variants={formVariants}>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full p-4 border border-primary/20 rounded-xl bg-white/50 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary hover:shadow-md transition-all duration-300"
              />
            </motion.div>
            <motion.button
              variants={formVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 hover:shadow-primary/30 transition duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </section>

        <section className="py-12 md:py-16 max-w-3xl mx-auto px-4 md:px-8 text-center space-y-6">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            variants={infoVariants}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-primary"
          >
            Contact Information
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={infoVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg leading-relaxed space-y-2"
          >
            <a href="https://goo.gl/maps/your-location-link" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              123 Business Street, Cityname, Country
            </a>
            <br />
            <a href="mailto:contact@golahub.com" className="hover:text-accent transition-colors">
              contact@golahub.com
            </a>
            <br />
            <a href="tel:+919876543210" className="hover:text-accent transition-colors">
              +91 98765 43210
            </a>
          </motion.p>
        </section>

        <section className="py-12 md:py-16 max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full aspect-video rounded-xl overflow-hidden border border-primary/20 shadow-md"
          >
            <iframe
              title="GolaHub Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.018745264279!2d-122.08424968469235!3d37.42206597982579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e5e1d7a4d1%3A0x1a8c71cc92b3a2d0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1696923544321!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
