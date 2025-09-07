"use client";

import CategoryGrid from "@/components/CategoryGrid";
import FeaturedBusiness from "@/components/FeaturedBusiness";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testinomials from "@/components/Testinomials";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      
      <Navbar />
      <Hero />
      <CategoryGrid />
      <FeaturedBusiness />
      <Testinomials />
        
    </div>
  );
}
