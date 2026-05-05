
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
  { name: "Dampak Lingkungan", href: "/impact" },
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
      scrolled ? "bg-background/95 backdrop-blur-md py-2 shadow-sm" : "bg-background py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image 
              src="/logo.png" 
              alt="Logo Tunong Baroh" 
              width={32} 
              height={32} 
              className="h-8 w-8 object-contain"
            />
            <span className="font-headline text-2xl font-bold text-primary tracking-tight">
              Tunong Baroh
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-all duration-200 font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Button asChild className="bg-primary text-primary-foreground hover:scale-105 active:scale-95 transition-transform rounded-full">
              <Link href="/booking">Pesan Sekarang</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "md:hidden bg-background border-b overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-3 py-3 text-lg text-foreground/80 hover:text-primary font-medium border-b border-secondary last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Button asChild className="w-full bg-primary text-primary-foreground rounded-xl h-12">
              <Link href="/booking" onClick={() => setIsOpen(false)}>Pesan Sekarang</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
