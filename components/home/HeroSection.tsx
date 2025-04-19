"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Unlock Your Academic Potential With {COMPANY_INFO.name}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-md">
              Expert guidance, personalized coaching, and proven strategies to excel in academics and competitive examinations.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/courses">
                  Explore Courses
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Book a Free Session</Link>
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden shadow-sm">
                    <Image
                      src={`https://images.pexels.com/photos/22000${i}/pexels-photo-22000${i}.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1`}
                      alt="Student"
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-lg font-medium">500+</div>
                <div className="text-sm text-muted-foreground">Successful Students</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="text-lg font-medium">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Students learning"
                fill
                className="object-cover"
                priority
                onLoad={() => setIsLoaded(true)}
              />
              <div className="absolute inset-0 bg-primary/10" />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-[240px]">
                <div className="text-sm font-medium">Admissions Open</div>
                <div className="text-xs text-muted-foreground mt-1">Register now for the new academic year classes and get early bird discounts.</div>
                <Button variant="link" size="sm" className="mt-2 p-0 h-auto" asChild>
                  <Link href="/contact">
                    Register Now <ChevronRight className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}