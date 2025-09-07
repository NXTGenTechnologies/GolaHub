import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { TypingEffect } from "./typing-effect";

export default function Hero() {
    const typingWords = ["restaurants", "shops", "doctors", "coaching"]
    
  return (
    <section className="relative py-24 px-2 bg-gradient-to-br from-background via-muted/30 to-accent/10 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 text-balance leading-tight">
            Discover Gola's Best{" "}
            <div className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              <TypingEffect words={typingWords} />
            </div>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty max-w-3xl mx-auto leading-relaxed">
            Find restaurants, shops, doctors, coaching centers, and more in your local area. Connect with trusted
            businesses in Gola.
          </p>

          <div className="relative max-w-3xl mx-auto mb-12">
            <div className="flex items-center bg-card/80 backdrop-blur rounded-2xl border border-border shadow-2xl hover:shadow-3xl transition-all duration-300">
              <Search className="w-6 h-6 text-muted-foreground ml-6" />
              <Input
                placeholder="Search for shops, restaurants, services..."
                className="border-0 bg-transparent text-lg py-8 px-6 focus-visible:ring-0 placeholder:text-muted-foreground/70"
              />
              <Button className="m-3 px-10 py-6 text-lg bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 text-white font-semibold">
                Search
              </Button>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-12 py-8 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          >
            Browse Categories
          </Button>
        </div>
      </section>
  )
}