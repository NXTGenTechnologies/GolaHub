"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="bg-yellow-400 text-black text-center py-6 font-bold text-xl"
      >
        Get in Touch
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
        
        {/* Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          className="md:col-span-2"
        >
          <Card className="h-full bg-orange-400 text-black">
            <CardHeader>
              <CardTitle className="text-center text-lg font-bold">Contact Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" rows={5} />
                <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info and Map */}
        <div className="flex flex-col gap-6">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
          >
            <Card className="h-48 bg-cyan-400 text-white p-4">
              <CardHeader>
                <CardTitle>Contact info</CardTitle>
              </CardHeader>
              <CardContent>
                <p>📍 123 Business Street, Cityname, Country</p>
                <p>📧 info@golahub.com</p>
                <p>📞 +91 98765 43210</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
          >
            <Card className="h-48 bg-green-400 text-white overflow-hidden">
              <CardHeader>
                <CardTitle>Google Map</CardTitle>
              </CardHeader>
              <CardContent className="p-0 h-full">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.018745264279!2d-122.08424968469235!3d37.42206597982579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e5e1d7a4d1%3A0x1a8c71cc92b3a2d0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1696923544321!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
