"use client";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <HeroUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        {children}
      </ThemeProvider>
    </HeroUIProvider>
  );
}