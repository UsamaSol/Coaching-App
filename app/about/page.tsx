import { AboutHero } from "@/components/about/AboutHero";
import { StorySection } from "@/components/about/StorySection";
import { TeamSection } from "@/components/about/TeamSection";
import { CallToAction } from "@/components/home/CallToAction";
import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About Us | ${COMPANY_INFO.name}`,
  description: "Learn about our journey, mission, and the dedicated team behind our coaching center.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <TeamSection />
      <CallToAction />
    </>
  );
}