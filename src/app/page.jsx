import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">

      {/* Main Content Sections */}
      <main className="flex-grow">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}