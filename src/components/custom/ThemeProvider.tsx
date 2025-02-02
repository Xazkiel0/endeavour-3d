"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

interface ThemesWrapperProps {
  children: React.ReactNode;
}

const ThemeProviderWrapper = ({ children }: ThemesWrapperProps) => {
  return (
    <ThemeProvider
      enableSystem={false}
      attribute="class"
      defaultTheme={"dark"}
      enableColorScheme
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
