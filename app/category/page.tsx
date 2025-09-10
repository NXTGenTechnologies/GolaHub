"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function CategoriesPage() {
  const categories = [
    { name: "Restaurants", slug: "restaurants", icon: "🍽️", count: "120+" },
    { name: "Shops", slug: "shops", icon: "🛍️", count: "85+" },
    { name: "Doctors", slug: "doctors", icon: "👨‍⚕️", count: "45+" },
    { name: "Coaching Centers", slug: "coaching", icon: "📚", count: "30+" },
    { name: "Event Services", slug: "events", icon: "🎉", count: "25+" },
    { name: "Beauty & Wellness", slug: "beauty", icon: "💄", count: "40+" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-16 px-2">
        <div className="container mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center text-primary mb-4"
          >
            Browse Categories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Discover the best businesses and services in Gola across different categories
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/category/${category.slug}`}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {category.count} businesses
                    </p>
                    <div className="text-primary font-medium">
                      Explore →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}