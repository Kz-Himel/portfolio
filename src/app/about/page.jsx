import AboutSection from "@/components/AboutSection";
import MainLayout from "@/components/layout/MainLayout";

export const metadata = {
  title: "About | Kz Himel",
  description:
    "Frontend development services including UI/UX implementation, performance optimization, and more.",
};

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="pt-10">
        <AboutSection />
      </div>
    </MainLayout>
  );
}
