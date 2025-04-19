"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const testimonial = TESTIMONIALS[currentIndex];

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(goToNext, 7000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-muted-foreground text-lg">
            Discover how our coaching has transformed the academic journey of our students.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Card className="border-none shadow-md bg-background">
                  <CardContent className="p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6 items-center">
                      <div className="mx-auto md:mx-0">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-xl">
                          <Image 
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      
                      <div className="text-center md:text-left">
                        <Quote className="h-8 w-8 text-primary/20 mx-auto md:mx-0 mb-4" />
                        
                        <p className="text-lg md:text-xl italic mb-6">
                          "{testimonial.content}"
                        </p>
                        
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="rounded-full"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-primary w-6" : "bg-primary/30"
                    }`}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}