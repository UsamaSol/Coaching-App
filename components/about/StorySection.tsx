"use client";

import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/lib/constants";

export function StorySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground text-lg">
              The journey of {COMPANY_INFO.name} from its humble beginnings to becoming a leading coaching center.
            </p>
          </motion.div>
          
          <div className="space-y-10">
            <StoryItem
              year="2005"
              title="The Beginning"
              content="Founded by Dr. James Williams with a vision to transform education through personalized coaching. Starting with just 3 classrooms and 50 students, we focused on mathematics and science courses."
            />
            
            <StoryItem
              year="2010"
              title="Expansion Phase"
              content="Expanded our curriculum to include English, History, and Computer Science. Our student base grew to over 500, and we moved to a larger facility to accommodate the growing demand."
            />
            
            <StoryItem
              year="2015"
              title="Digital Transformation"
              content="Introduced blended learning approaches combining traditional classroom teaching with digital resources. Launched our first online courses to reach students beyond geographical boundaries."
            />
            
            <StoryItem
              year="2020"
              title="Excellence Center"
              content="Established specialized excellence centers for competitive exam preparation. Our alumni network grew to over 5,000 students studying at prestigious universities worldwide."
            />
            
            <StoryItem
              year="Present"
              title="Continuing the Legacy"
              content="Today, we stand as a premier coaching institution with state-of-the-art facilities, a team of over 50 expert educators, and a comprehensive curriculum designed to meet the evolving educational needs of students."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface StoryItemProps {
  year: string;
  title: string;
  content: string;
}

function StoryItem({ year, title, content }: StoryItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative pl-8 md:pl-0 md:grid md:grid-cols-[120px,1fr] gap-6 items-start"
    >
      <div className="md:text-right">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm md:text-base">
          {year}
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute left-0 top-0 -ml-4 md:ml-[-17px] h-full">
          <div className="w-px h-full bg-border relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
          </div>
        </div>
        
        <div className="pt-1 pb-8">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">
            {content}
          </p>
        </div>
      </div>
    </motion.div>
  );
}