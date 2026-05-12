import ServicesSection from "@/components/ServicesSection";

export const metadata = {
  title: "Services | Himel",
  description: "Frontend development services including UI/UX implementation, performance optimization, and more.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServicesSection />
    </div>
  );
}