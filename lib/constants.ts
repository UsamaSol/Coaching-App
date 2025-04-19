import { DivideIcon as LucideIcon, BookOpen, ChevronRight, Users, Award, Clock, BookCheck, BookMarked, BookText, Globe, School } from "lucide-react";

export type Course = {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Science' | 'Mathematics' | 'English' | 'History' | 'Computer Science';
  duration: string;
  schedule: string;
  price: number;
  image: string;
  instructor: {
    name: string;
    qualification: string;
    experience: string;
    avatar: string;
  };
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
};

export const FEATURES: Feature[] = [
  {
    title: "Expert Instructors",
    description: "Learn from educators with decades of teaching experience and proven track records of student success.",
    icon: Users,
  },
  {
    title: "Comprehensive Curriculum",
    description: "Our carefully designed curriculum covers all aspects of the subject and aligns with examination standards.",
    icon: BookOpen,
  },
  {
    title: "Proven Results",
    description: "Consistently producing top performers in national examinations and competitive tests year after year.",
    icon: Award,
  },
  {
    title: "Flexible Scheduling",
    description: "Choose from various time slots for classes that fit perfectly with your school and other commitments.",
    icon: Clock,
  },
];

export const COURSES: Course[] = [
  {
    id: "science-101",
    title: "Foundations of Science",
    description: "A comprehensive introduction to core scientific principles covering physics, chemistry, and biology for middle school students.",
    level: "Beginner",
    category: "Science",
    duration: "12 weeks",
    schedule: "Mon, Wed, Fri (4:00 PM - 5:30 PM)",
    price: 299,
    image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    instructor: {
      name: "Dr. Sarah Johnson",
      qualification: "Ph.D. in Physics",
      experience: "15 years",
      avatar: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    id: "math-advanced",
    title: "Advanced Mathematics",
    description: "Dive deep into calculus, statistics, and trigonometry with challenging problems and examination strategies.",
    level: "Advanced",
    category: "Mathematics",
    duration: "16 weeks",
    schedule: "Tue, Thu (5:00 PM - 7:00 PM), Sat (10:00 AM - 12:00 PM)",
    price: 349,
    image: "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    instructor: {
      name: "Prof. Robert Chen",
      qualification: "M.Sc. Mathematics",
      experience: "20 years",
      avatar: "https://images.pexels.com/photos/5905900/pexels-photo-5905900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    id: "english-composition",
    title: "English Composition & Literature",
    description: "Enhance writing skills, critical analysis, and comprehension through classic and contemporary literature.",
    level: "Intermediate",
    category: "English",
    duration: "14 weeks",
    schedule: "Mon, Thu (4:30 PM - 6:00 PM)",
    price: 279,
    image: "https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    instructor: {
      name: "Ms. Emily Parker",
      qualification: "M.A. in English Literature",
      experience: "12 years",
      avatar: "https://images.pexels.com/photos/7586136/pexels-photo-7586136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    id: "history-world",
    title: "World History",
    description: "Explore major historical events, civilizations, and their impact on modern society with engaging discussions.",
    level: "Intermediate",
    category: "History",
    duration: "10 weeks",
    schedule: "Wed, Fri (3:30 PM - 5:00 PM)",
    price: 259,
    image: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    instructor: {
      name: "Dr. Michael Torres",
      qualification: "Ph.D. in History",
      experience: "18 years",
      avatar: "https://images.pexels.com/photos/8617942/pexels-photo-8617942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    id: "cs-programming",
    title: "Introduction to Computer Programming",
    description: "Learn the fundamentals of programming, algorithms, and problem-solving using Python and JavaScript.",
    level: "Beginner",
    category: "Computer Science",
    duration: "14 weeks",
    schedule: "Tue, Sat (2:00 PM - 4:00 PM)",
    price: 329,
    image: "https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    instructor: {
      name: "Mr. Jason Lee",
      qualification: "M.S. in Computer Science",
      experience: "10 years",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    id: "math-foundations",
    title: "Mathematical Foundations",
    description: "Build a strong foundation in algebra, geometry, and arithmetic with practical applications and problem-solving techniques.",
    level: "Beginner",
    category: "Mathematics",
    duration: "12 weeks",
    schedule: "Mon, Wed (3:00 PM - 4:30 PM)",
    price: 289,
    image: "https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    instructor: {
      name: "Mrs. Lisa Wong",
      qualification: "B.Ed. in Mathematics",
      experience: "15 years",
      avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sophia Martinez",
    role: "Harvard University Student",
    content: "The advanced mathematics program at Excel Academy was instrumental in my success. The instructors don't just teach the subject; they inspire a love for learning that stays with you forever.",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    name: "James Wilson",
    role: "National Science Olympiad Winner",
    content: "I credit my success in the Science Olympiad to the rigorous training and personalized attention I received at Excel Academy. The practical labs and problem-solving approach made complex concepts easy to grasp.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "3",
    name: "Emma Thompson",
    role: "Parent of Two Students",
    content: "As a parent, I've seen remarkable improvement in my children's academic performance since they joined Excel Academy. The progress reports and parent-teacher meetings keep us informed about their development.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "4",
    name: "David Chen",
    role: "MIT Engineering Student",
    content: "The computer programming course at Excel Academy gave me the head start I needed for my engineering degree. The curriculum was challenging yet accessible, with plenty of real-world applications.",
    avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const SUBJECTS = [
  {
    name: "Mathematics",
    icon: BookCheck,
    description: "From algebra to calculus, our math programs build strong problem-solving skills and mathematical reasoning.",
  },
  {
    name: "Science",
    icon: BookMarked,
    description: "Comprehensive courses in physics, chemistry, and biology with hands-on experiments and conceptual clarity.",
  },
  {
    name: "English",
    icon: BookText,
    description: "Develop strong communication skills, literary analysis, and writing proficiency for academic and professional success.",
  },
  {
    name: "Computer Science",
    icon: Globe,
    description: "Learn programming languages, algorithms, and computational thinking for the digital age.",
  },
  {
    name: "Test Preparation",
    icon: School,
    description: "Specialized coaching for standardized tests like SAT, ACT, AP exams, and competitive entrance examinations.",
  },
];

export const COMPANY_INFO = {
  name: "Excel Academy",
  tagline: "Nurturing Excellence, Inspiring Success",
  description: "Excel Academy is a premier coaching center dedicated to academic excellence and holistic development. We provide comprehensive educational support to students of all ages and backgrounds.",
  foundedYear: "2005",
  location: {
    address: "123 Education Avenue, Knowledge Park",
    city: "Scholastica",
    state: "CA",
    zipCode: "90210",
    country: "United States",
    coordinates: {
      lat: 34.0522,
      lng: -118.2437
    }
  },
  contact: {
    email: "info@excelacademy.edu",
    phone: "+1 (555) 123-4567",
    socialMedia: {
      facebook: "https://facebook.com/excelacademy",
      twitter: "https://twitter.com/excelacademy",
      instagram: "https://instagram.com/excelacademy",
      linkedin: "https://linkedin.com/company/excelacademy"
    }
  }
};