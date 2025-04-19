"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Dr. James Williams",
    role: "Founder & Director",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Ph.D. in Education with over 25 years of teaching experience. Passionate about making education accessible and engaging for all students.",
    socialMedia: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 2,
    name: "Prof. Sarah Chen",
    role: "Academic Head",
    image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Mathematics expert with 15+ years of experience in curriculum development and academic administration.",
    socialMedia: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 3,
    name: "Dr. Michael Johnson",
    role: "Science Department Lead",
    image: "https://images.pexels.com/photos/8617942/pexels-photo-8617942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Ph.D. in Physics and author of multiple research papers. Specializes in making complex scientific concepts easy to understand.",
    socialMedia: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 4,
    name: "Ms. Emily Parker",
    role: "English & Literature Expert",
    image: "https://images.pexels.com/photos/7586136/pexels-photo-7586136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "M.A. in English Literature with experience in teaching critical analysis and creative writing to students of all levels.",
    socialMedia: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  }
];

export function TeamSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg">
            Our expert educators bring decades of experience and passion to the classroom, dedicated to helping students reach their full potential.
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member) => (
            <motion.div key={member.id} variants={itemVariants}>
              <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {member.bio}
                  </p>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                      <FacebookIcon className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                      <TwitterIcon className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                      <LinkedinIcon className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}