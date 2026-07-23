import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Kz Himel | MERN & Frontend Developer",
  description:
    "Junior MERN Developer crafting modern, animated, and scalable web experiences using Next.js, React, and modern UI technologies.",
  keywords: ["Frontend Developer", "MERN Developer", "Next.js", "React", "Kz Himel", "Web Developer"],
  openGraph: {
    title: "Kz Himel | Frontend Developer",
  description: "Frontend Developer crafting modern web experiences.",
  type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-bg text-text-main antialiased selection:bg-accent/20 selection:text-accent">
        <SmoothScroll>
          <Navbar />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}