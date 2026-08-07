import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import { ExperienceSection, AchievementsSection } from "@/components/ExperienceSection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ServicesSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
}
