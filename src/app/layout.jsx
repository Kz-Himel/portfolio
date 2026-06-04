import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Kz Himel | MERN Developer",
  description:
    "Hunior MERN Developer crafting modern, animated, and scalable web experiences using Next.js, React, and modern UI technologies.",
  keywords: ["Frontend Developer", "Next.js", "React", "Kz Himel", "Web Developer"],
  openGraph: {
    title: "Kz Himel | Frontend Developer",
    description: "Frontend Developer crafting modern web experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <SmoothScroll>
            <body>
              <CustomCursor />
              {children}
              </body>
          </SmoothScroll>
      </body>
    </html>
  );
}