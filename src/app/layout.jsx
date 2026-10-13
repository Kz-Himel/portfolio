import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Khayruzzaman Himel | Fullstack MERN & Frontend Developer",
  description:
    "Fullstack MERN and Frontend Developer crafting production-ready web applications, AI-integrated platforms, and responsive user experiences.",
  keywords: [
    "Khayruzzaman Himel",
    "Fullstack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "Tailwind CSS",
    "Node.js",
  ],
  authors: [{ name: "Khayruzzaman Himel" }],
  openGraph: {
    title: "Khayruzzaman Himel | Fullstack MERN & Frontend Developer",
    description:
      "Fullstack MERN and Frontend Developer crafting production-ready web applications, AI-integrated platforms, and responsive user experiences.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-bg text-text-main antialiased min-h-screen selection:bg-indigo-500 selection:text-white flex flex-col transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}