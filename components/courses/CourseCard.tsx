"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import { Course } from "@/lib/constants";

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card 
        className="h-full overflow-hidden hover:shadow-md transition-all cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className={`object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
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
            <span className="font-semibold text-lg">${course.price}</span>
          </div>
          <h3 className="text-xl font-bold line-clamp-1">{course.title}</h3>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {course.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>{course.instructor.name}</span>
            </div>
          </div>
          
          <div className="mt-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={course.instructor.avatar}
                alt={course.instructor.name}
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium">{course.instructor.name}</span>
              <span className="text-xs text-muted-foreground">{course.instructor.qualification}</span>
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
  );
}