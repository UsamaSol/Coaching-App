"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/lib/constants";

export function AboutHero() {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About {COMPANY_INFO.name}</h1>
            <div className="space-y-4 text-lg">
              <p>
                {COMPANY_INFO.name} is a premier coaching institution dedicated to academic excellence and holistic development of students. Since our establishment in {COMPANY_INFO.foundedYear}, we have been committed to providing high-quality education and personalized guidance to help students achieve their academic and career goals.
              </p>
              <p>
                With a team of experienced educators, a comprehensive curriculum, and a supportive learning environment, we strive to nurture the intellectual curiosity and critical thinking skills of our students, preparing them not just for examinations but for life.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary">18+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Expert Instructors</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Students Taught</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl relative">
              <Image
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="About Excel Academy"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-background rounded-lg p-6 shadow-lg max-w-xs">
              <div className="font-medium text-lg">Our Mission</div>
              <div className="text-muted-foreground mt-2">
                To empower students with knowledge, skills, and confidence to excel academically and become lifelong learners.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}