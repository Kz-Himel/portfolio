import AboutSection from "@/components/AboutSection";

export const metadata = {
  title: "About | Himel",
  description: "Frontend development services including UI/UX implementation, performance optimization, and more.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
    </div>
  );
}