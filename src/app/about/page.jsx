import AboutSection from "@/components/AboutSection";
import { ExperienceSection, AchievementsSection } from "@/components/ExperienceSection";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "About | Kz Himel",
  description:
    "Junior MERN & Frontend Developer — journey, process, and the story behind the craft.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="// About · Origin story"
        title="The story of"
        highlight="how I build"
        subtitle="Self-taught engineer, client-obsessed, and always leveling up. Here's the full story: where I started, how I work, and where we can go together."
        stats={[
          { value: "30+", label: "Projects shipped", color: "#22D3EE" },
          { value: "1.5+", label: "Years building", color: "#8B5CF6" },
          { value: "12+", label: "Clients served", color: "#EC4899" },
          { value: "96/100", label: "Avg. Lighthouse", color: "#4ADE80" },
        ]}
      />
      <AboutSection />
      <ExperienceSection />
      <AchievementsSection />
    </div>
  );
}
