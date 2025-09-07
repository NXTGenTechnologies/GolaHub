"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient"></div>

      <div className="relative z-10">
        <Navbar />

       
        <section className="relative py-16 text-center overflow-hidden">
          <div className="relative max-w-3xl mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-primary mb-6"
            >
              About GolaHub
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed border border-primary/20 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl transition-shadow duration-300"
            >
              GolaHub connects you with the best{" "}
              <span className="text-accent font-semibold">restaurants</span>,{" "}
              <span className="text-accent font-semibold">dentists</span>,{" "}
              <span className="text-accent font-semibold">coaching centers</span>,{" "}
              <span className="text-accent font-semibold">medical clinics</span>,{" "}
              <span className="text-accent font-semibold">book shops</span>, and essential services in your area.  
              We help businesses grow while making life easier for the community.
            </motion.p>
          </div>
        </section>

      
        <section className="py-12 md:py-16 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-10">Our Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-primary/20 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-accent mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To build a connected community where businesses and customers thrive together,
                making everyday services accessible, reliable, and trustworthy for everyone.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-primary/20 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-accent mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To connect people with the best local services and businesses,
                empowering communities with information and opportunities to grow and succeed.
              </p>
            </motion.div>
          </div>
        </section>

       
        <Section
          title="Delicious Dining"
          text="Discover the best local restaurants, from cozy cafes to family favorites. GolaHub brings food lovers closer to the finest dining experiences in town."
          img="/indian-restaurant-interior.png"
          alt="Restaurants in Gola"
          flip={false}
        />
        <Section
          title="Trusted Dental Care"
          text="Whether you need routine check-ups or advanced treatments, find reliable dental clinics and experienced doctors right here in GolaHub."
          img="/modern-dental-clinic.png"
          alt="Dental services"
          flip={true}
        />
        <Section
          title="Local Businesses"
          text="Support your community by shopping local. From clothing boutiques to essential services, GolaHub makes it simple to discover trusted businesses nearby."
          img="/fashion-clothing-store-interior.jpg"
          alt="Shops and services"
          flip={false}
        />
        <Section
          title="Coaching & Education"
          text="GolaHub helps students and parents find trusted coaching centers and educational institutions that build brighter futures."
          img="/modern-coaching-center-classroom.jpg"
          alt="Coaching Center"
          flip={true}
        />
        <Section
          title="Medical Clinics"
          text="From general practitioners to specialized healthcare, GolaHub connects you to clinics where your health and well-being come first."
          img="/modern-medical-clinic.jpg"
          alt="Medical Clinic"
          flip={false}
        />
        <Section
          title="Books & Knowledge"
          text="Explore local bookstores and libraries in Gola. Whether it’s textbooks, novels, or rare finds, GolaHub helps you discover the joy of reading."
          img="/bookstore-interior-with-shelves.jpg"
          alt="Book shelf"
          flip={true}
        />

        
        <Journey />

       
        <Achievements />

       
        <Testimonials />

        
        <section className="py-16 text-center bg-secondary text-secondary-foreground relative overflow-hidden rounded-t-2xl shadow-3xl">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/modern-cafe-interior.png"
              alt="Background"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-6 animate-glow hover:scale-105 transition-transform"
            >
              Ready to explore GolaHub?
            </motion.h2>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="px-8 py-3 rounded-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 transition shadow-glow animate-glow"
            >
              Get Started
            </motion.button>
          </div>
        </section>
      </div>
    </div>
  );
}


function Section({
  title,
  text,
  img,
  alt,
  flip,
}: {
  title: string;
  text: string;
  img: string;
  alt: string;
  flip: boolean;
}) {
  return (
    <section className="py-12 md:py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: flip ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className={`glass-effect p-6 md:p-8 rounded-xl shadow-glow hover:-translate-y-1 transition-transform ${
          flip ? "order-2 md:order-1" : ""
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-3 md:mb-4 hover:scale-105 transition-transform">
          {title}
        </h2>
        <p className="text-foreground leading-relaxed hover:text-muted-foreground transition-colors">
          {text}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: flip ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className={flip ? "order-1 md:order-2" : ""}
      >
        <Image
          src={img}
          alt={alt}
          width={550}
          height={350}
          className="rounded-lg shadow-3xl hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
    </section>
  );
}


function Journey() {
  const milestones = [
    { year: "2022", text: "Founded GolaHub to connect local businesses." },
    { year: "2023", text: "Reached 10,000+ active users in our community." },
    { year: "2024", text: "Expanded services across 5+ industries." },
    { year: "2025", text: "Recognized as a trusted local business platform." },
  ];

  return (
    <section className="py-16 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">
        Our Journey
      </h2>
      <div className="relative border-l-4 border-primary pl-6 space-y-8">
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: false }}
          >
            <span className="text-xl font-semibold text-accent">{m.year}</span>
            <p className="text-muted-foreground">{m.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


function Counter({ target }: { target: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.6 });
  const count = useMotionValue(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let controls: any;
    if (inView) {
      controls = animate(count, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => setCurrent(Math.floor(v)),
      });
    } else {
      setCurrent(0);
      count.set(0);
    }
    return () => controls?.stop();
  }, [inView, target, count]);

  return <span ref={ref}>{new Intl.NumberFormat().format(current)}</span>;
}


function Achievements() {
  const stats = [
    { label: "Restaurants", value: 500 },
    { label: "Dentists", value: 200 },
    { label: "Happy Users", value: 10000 },
    { label: "Industries Served", value: 5 },
  ];

  return (
    <section className="py-16 max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-primary mb-10">Achievements</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: false }}
            className="glass-effect p-6 rounded-xl shadow-glow hover:-translate-y-1 transition-transform"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-accent">
              <Counter target={s.value} />+
            </h3>
            <p className="text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


function Testimonials() {
  const reviews = [
    {
      name: "Sarah K.",
      text: "GolaHub made finding the best dental clinic so easy!",
    },
    {
      name: "Rajesh P.",
      text: "The restaurant recommendations are always spot on!",
    },
    {
      name: "Ananya M.",
      text: "I love how easy it is to discover coaching centers nearby.",
    },
  ];

  return (
    <section className="py-16 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">
        What People Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: false }}
            className="glass-effect p-6 rounded-xl shadow-glow hover:-translate-y-2 transition-transform"
          >
            <p className="text-muted-foreground mb-4">“{r.text}”</p>
            <h4 className="font-semibold text-primary">– {r.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
