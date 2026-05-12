import SkillsSection from "@/components/SkillsSection";

export const metadata = {
  title: "Skills | Himel",
  description: "Technologies and tools I use to build modern web applications.",
};

export default function SkillsPage() {
  return (
    <div className="pt-20">
      <SkillsSection />
    </div>
  );
}