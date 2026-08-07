import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Skills | Kz Himel",
  description: "The tech stack, proficiency levels, and tools I use daily.",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="// Skills · Stack v2.0"
        title="Technologies I"
        highlight="ship with"
        subtitle="Hand-picked, battle-tested, continuously upgraded. Every layer of the stack — frontend, backend, database, and DevOps — optimized for production."
        stats={[
          { value: "18+", label: "Technologies", color: "#22D3EE" },
          { value: "92%", label: "Frontend pro", color: "#8B5CF6" },
          { value: "83%", label: "Backend pro", color: "#EC4899" },
          { value: "91%", label: "DevOps pro", color: "#4ADE80" },
        ]}
      />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}
