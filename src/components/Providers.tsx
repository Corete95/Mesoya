"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
interface Props {
  children: ReactNode | ReactNode[];
}
const Providers = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // if (!mounted) {
  //   return null;
  // }

  if (!mounted) {
    return (
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    );
  }

  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
};

export default Providers;
