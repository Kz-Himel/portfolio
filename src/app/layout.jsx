import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import SideRail from "@/components/SideRail";
import CosmicBackground from "@/components/CosmicBackground";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kz Himel | MERN & Frontend Developer",
  description:
    "Junior MERN Developer crafting modern, animated, and scalable web experiences using Next.js, React, and modern UI technologies.",
  keywords: ["MERN Developer", "Front End Developer", "Next.js", "React", "Kz Himel", "Web Developer"],
  openGraph: {
    title: "Kz Himel | MERN Developer",
  description: "Frontend Developer crafting modern web experiences.",
  type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-bg text-text-main antialiased selection:bg-accent/20 selection:text-accent">
        <SmoothScroll>
          <CosmicBackground />
          <Navbar />
          <SideRail />
          <CustomCursor />
          <main className="relative z-[2]">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}