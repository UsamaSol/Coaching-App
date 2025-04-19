"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Academic Journey with {COMPANY_INFO.name}?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join hundreds of students who have transformed their academic performance and achieved their goals with our expert guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Enroll Now <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/courses">Explore Courses</Link>
            </Button>
          </div>
          
          <div className="mt-10 p-4 md:p-6 bg-background rounded-lg shadow-sm max-w-md mx-auto">
            <p className="font-medium text-sm md:text-base">
              "Joining {COMPANY_INFO.name} was the best decision I made for my academic future. The personalized attention and expert guidance helped me achieve my dream score."
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              — Emily Chen, Harvard University
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}