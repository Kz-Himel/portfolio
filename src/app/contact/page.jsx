import ContactSection from "@/components/ContactSection";
import MainLayout from "@/components/layout/MainLayout";

export const metadata = {
  title: "Contact | Kz Himel",
  description: "Get in touch with Kamrul Himel for freelance projects or collaborations.",
};

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="pt-10">
        <ContactSection />
      </div>
    </MainLayout>
  );
}