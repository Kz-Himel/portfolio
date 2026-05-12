import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "kz Himel | Frontend Developer",
  description:
    "Frontend Developer crafting modern, animated, and scalable web experiences using Next.js, React, and modern UI technologies.",
  keywords: ["Frontend Developer", "Next.js", "React", "Kz Himel", "Web Developer"],
  openGraph: {
    title: "Himel | Frontend Developer",
    description: "Frontend Developer crafting modern web experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <SmoothScroll>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
      </body>
    </html>
  );
}