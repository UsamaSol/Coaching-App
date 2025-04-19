"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/layout/ModeToggle";
import { GraduationCap, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY_INFO } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 relative z-20">
          <GraduationCap className="h-7 w-7 text-primary" />
          <span className="font-bold text-xl">{COMPANY_INFO.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-base font-medium transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="/contact">Enroll Now</Link>
          </Button>
          <ModeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="relative z-20"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-background/95 backdrop-blur-sm z-10 pt-20"
              >
                <nav className="container mx-auto px-4 flex flex-col gap-6 mt-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-xl font-medium py-2 border-b border-border",
                        pathname === link.href
                          ? "text-primary font-semibold"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button className="mt-4 w-full" asChild>
                    <Link href="/contact">Enroll Now</Link>
                  </Button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}