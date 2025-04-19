"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COURSES, SUBJECTS } from "@/lib/constants";
import { CourseCard } from "@/components/courses/CourseCard";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  
  const filteredCourses = COURSES.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });
  
  return (
    <div className="pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-muted-foreground text-lg">
            Explore our comprehensive range of courses designed to help you excel in academics and beyond.
          </p>
        </div>
        
        {/* Subject Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12"
        >
          {SUBJECTS.map((subject, index) => {
            const Icon = subject.icon;
            
            return (
              <div 
                key={index}
                className="text-center p-4 rounded-lg border border-border hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer"
                onClick={() => setSelectedCategory(subject.name)}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-base mb-1">{subject.name}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {subject.description}
                </p>
              </div>
            );
          })}
        </motion.div>
        
        {/* Search & Filters */}
        <div className="mb-12 bg-muted/30 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,auto] gap-4 items-end">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Categories</SelectItem>
                <SelectItem value="Mathematics">Mathematics</SelectItem>
                <SelectItem value="Science">Science</SelectItem>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="History">History</SelectItem>
                <SelectItem value="Computer Science">Computer Science</SelectItem>
              </SelectContent>
            </Select>
            
            <Select
              value={selectedLevel}
              onValueChange={setSelectedLevel}
            >
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No courses found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filter criteria
            </p>
            <Button variant="outline" onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
              setSelectedLevel("All");
            }}>
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}