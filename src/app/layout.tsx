import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { ThemeProvider } from "components/theme-provider";
import { Toaster } from "components/ui/toaster";

import Sidebar from "./components/sidebar/Sidebar";
import ThemeButton from "./components/theme-button/ThemeButton";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website | Marcos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={openSans.className}>
        <ThemeProvider attribute="class" enableSystem>
          <div className="max-w-[1440px] mx-auto relative md:flex">
            <ThemeButton />

            <Sidebar />

            <main className="flex-1">{children}</main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
