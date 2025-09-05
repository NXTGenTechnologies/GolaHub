"use client"
import { Button } from "@/components/ui/button"

interface HamburgerMenuProps {
  isOpen: boolean
  onToggle: () => void
}

export function HamburgerMenu({ isOpen, onToggle }: HamburgerMenuProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onToggle}
      className="md:hidden relative w-10 h-10 p-0 focus:outline-none"
      aria-label="Toggle menu"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-6 h-5 relative">
          <span
            className={`absolute left-0 w-full h-0.5 bg-foreground transition-all duration-300 ease-in-out ${
              isOpen ? "top-2 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 top-2 w-full h-0.5 bg-foreground transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 w-full h-0.5 bg-foreground transition-all duration-300 ease-in-out ${
              isOpen ? "top-2 -rotate-45" : "top-4"
            }`}
          />
        </div>
      </div>
    </Button>
  )
}
