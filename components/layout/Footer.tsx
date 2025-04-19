import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, Mail, MapPin, Phone, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/40 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-muted-foreground">{COMPANY_INFO.tagline}</p>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{COMPANY_INFO.location.address}, {COMPANY_INFO.location.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{COMPANY_INFO.contact.email}</span>
              </div>
            </div>
            <div className="flex space-x-4 pt-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href={COMPANY_INFO.contact.socialMedia.facebook} aria-label="Facebook">
                  <FacebookIcon className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href={COMPANY_INFO.contact.socialMedia.twitter} aria-label="Twitter">
                  <TwitterIcon className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href={COMPANY_INFO.contact.socialMedia.instagram} aria-label="Instagram">
                  <InstagramIcon className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href={COMPANY_INFO.contact.socialMedia.linkedin} aria-label="LinkedIn">
                  <LinkedinIcon className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  Mathematics
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  Science
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  English
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  Computer Science
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  Test Preparation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">Subscribe to our newsletter for updates on new courses and education tips.</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="max-w-[220px]"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved. Established {COMPANY_INFO.foundedYear}.</p>
        </div>
      </div>
    </footer>
  );
}