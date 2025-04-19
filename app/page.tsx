import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";
import { PopularCourses } from "@/components/home/PopularCourses";
import { CallToAction } from "@/components/home/CallToAction";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PopularCourses />
      <TestimonialSlider />
      <CallToAction />
    </>
  );
}