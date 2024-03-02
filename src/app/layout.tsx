import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "./context/theme-context";
import ActiveSectionContextProvider from "./context/active-section-context";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muziyuan(Rossen) Gao | Personal Portfolio",
  description: "Rossen is a full-stack developer with 5 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ActiveSectionContextProvider>
          <ThemeContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ThemeContextProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
