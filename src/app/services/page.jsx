import ServicesSection from "@/components/ServicesSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Services | Kz Himel",
  description:
    "Premium frontend, fullstack, AI integration, and DevOps services.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="// Services · What I ship"
        title="Full-service"
        highlight="product delivery"
        subtitle="8 dedicated lanes — from concept to deploy, solo or as part of your team. Focus on quality, clarity, and on-time delivery."
        stats={[
          { value: "8", label: "Core services", color: "#22D3EE" },
          { value: "6", label: "Fullstack stacks", color: "#8B5CF6" },
          { value: "3", label: "AI specialties", color: "#EC4899" },
          { value: "4+", label: "Years learning", color: "#4ADE80" },
        ]}
      />
      <ServicesSection />
      <ExperienceSection />
    </div>
  );
}
