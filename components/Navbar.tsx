import { MapPin } from "lucide-react";
import { HamburgerMenu } from "./hamburger-menu";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GolaHub
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Categories
            </a>
            <a
              href="/add-business"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Add Business
            </a>
            <a
              href="/contact"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Contact
            </a>
            <a href="/about"
          className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
          >About</a>
          </nav>

          


          <HamburgerMenu isOpen={isMobileMenuOpen} onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 py-4 bg-card border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Categories
              </a>
              <a href="/add-business" className="text-foreground hover:text-primary transition-colors font-medium">
                Add Business
              </a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>
  )
}