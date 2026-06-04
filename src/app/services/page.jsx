import MainLayout from "@/components/layout/MainLayout";
import ServicesSection from "@/components/ServicesSection";

export const metadata = {
  title: "Services | Kz Himel",
  description: "Frontend development services including UI/UX implementation, performance optimization, and more.",
};

export default function ServicesPage() {
  return (
    <MainLayout>
      <div className="pt-10">
        <ServicesSection />
      </div>
    </MainLayout>
  );
}