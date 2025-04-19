"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users } from "lucide-react";
import { COURSES } from "@/lib/constants";

export function PopularCourses() {
  const [visibleCourses, setVisibleCourses] = useState(3);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };
  
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Courses</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Discover our most sought-after courses designed to develop core skills and subject expertise.
            </p>
          </div>
          <Button variant="link" className="mt-4 md:mt-0" asChild>
            <Link href="/courses">
              View All Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {COURSES.slice(0, visibleCourses).map((course) => (
            <motion.div key={course.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant={course.level === "Beginner" ? "secondary" : course.level === "Intermediate" ? "default" : "outline"}>
                      {course.level}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-1">
                    <Badge variant="outline">{course.category}</Badge>
                    <span className="font-medium text-lg">${course.price}</span>
                  </div>
                  <h3 className="text-xl font-bold">{course.title}</h3>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>12 Students</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/courses/${course.id}`}>
                      View Course Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {visibleCourses < COURSES.length && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setVisibleCourses(COURSES.length)}
            >
              Load More Courses
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}