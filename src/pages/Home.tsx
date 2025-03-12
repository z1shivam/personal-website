import AboutSection from "@/components/Home/AboutSection";
import ContactSection from "@/components/Home/ContactSection";
import FeaturedSection from "@/components/Home/FeaturedSection";
import HeroSection from "@/components/Home/HeroSection";
import LatestPosts from "@/components/Home/LatestPosts";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home - Shivam";
  }, []);
  
  return (
    <>
      <HeroSection />
      <LatestPosts />
      <FeaturedSection />
      <ContactSection />
      <AboutSection />
    </>
  );
}
