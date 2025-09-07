"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient"></div>

      <div className="relative z-10">
        <Navbar />

        <section className="py-16 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We’d love to hear from you. Whether you have a question, suggestion, or just want to say hello, drop us a message and we’ll get back to you as soon as possible.
          </motion.p>
        </section>

        <section className="py-12 md:py-16 max-w-3xl mx-auto px-6">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-primary/20 rounded-xl bg-background/50 backdrop-blur-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border border-primary/20 rounded-xl bg-background/50 backdrop-blur-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full p-4 border border-primary/20 rounded-xl bg-background/50 backdrop-blur-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-shadow shadow-glow"
            >
              Send Message
            </motion.button>
          </motion.form>
        </section>

        
        <section className="py-12 md:py-16 max-w-3xl mx-auto px-6 text-center space-y-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-primary"
          >
            Contact Information
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground"
          >
            123 Business Street, Cityname, Country <br />
            Email: contact@golahub.com <br />
            Phone: +91 98765 43210
          </motion.p>
        </section>
      </div>
    </div>
  );
}
