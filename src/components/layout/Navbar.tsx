
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Program", href: "/programs" },
  { name: "Dampak", href: "/impact" },
  { name: "Galeri", href: "/gallery" },
  { name: "Profil", href: "/profile" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out border-b",
      scrolled ? "bg-background/95 backdrop-blur-md py-1 shadow-sm" : "bg-background py-3"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center">
          <Link href="/" className="flex items-center gap-2 md:gap-5 hover:opacity-90 transition-opacity">
            <div className="relative h-12 w-12 md:h-16 md:w-16 shrink-0">
              <Image 
                src="/logo.png" 
                alt="Tunong Baroh Logo" 
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-baseline leading-none">
                <span 
                  style={{ fontFamily: '"Berlin Sans FB", "Arial Rounded MT Bold", sans-serif' }} 
                  className="text-lg md:text-3xl font-bold text-black lowercase"
                >
                  tunong
                </span>
                <span 
                  style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }} 
                  className="text-lg md:text-3xl font-bold text-[#FF0000] uppercase ml-0.5"
                >
                  BARÔH
                </span>
              </div>
              <div className="w-full h-[1.5px] bg-repeat-x bg-[length:8px_2px] mt-0.5" 
                   style={{ backgroundImage: 'linear-gradient(45deg, transparent 33.333%, #FF0000 33.333%, #FF0000 66.666%, transparent 66.666%), linear-gradient(-45deg, transparent 33.333%, #FF0000 33.333%, #FF0000 66.666%, transparent 66.666%)' }}>
              </div>
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.1em] font-medium text-black mt-0.5 hidden xs:block">
                training - organizer - distribution
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-all duration-200 font-medium relative group text-sm"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Button asChild className="bg-primary text-primary-foreground hover:scale-105 active:scale-95 transition-transform rounded-full px-6">
              <Link href="/booking">Pesan Sesi</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "lg:hidden bg-background border-b overflow-hidden transition-all duration-300 ease-in-out shadow-inner",
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 pt-2 pb-8 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-3 py-4 text-base text-foreground/80 hover:text-primary font-medium border-b border-secondary/50 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6">
            <Button asChild className="w-full bg-primary text-primary-foreground rounded-2xl h-14 text-lg font-bold shadow-lg">
              <Link href="/booking" onClick={() => setIsOpen(false)}>Pesan Sesi Sekarang</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
