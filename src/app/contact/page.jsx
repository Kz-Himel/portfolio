import ContactSection from "@/components/ContactSection";
import { AchievementsSection } from "@/components/ExperienceSection";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Contact | Kz Himel",
  description: "Let's build your next big thing — get in touch.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="// Contact · Say hello"
        title="Let's make"
        highlight="something great"
        subtitle="Open for freelance contracts and full-time roles. Email, LinkedIn, or WhatsApp — pick what's comfortable. I respond within 24 hours."
        stats={[
          { value: "<24h", label: "Response time", color: "#22D3EE" },
          { value: "Open", label: "Availability", color: "#4ADE80" },
          { value: "Remote", label: "Work mode", color: "#8B5CF6" },
          { value: "EN · BN", label: "Languages", color: "#EC4899" },
        ]}
      />
      <ContactSection />
      <AchievementsSection />
    </div>
  );
}
