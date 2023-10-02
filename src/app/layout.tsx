import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { Toaster } from "components/ui/toaster";

import Sidebar from "./components/sidebar/Sidebar";

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
        <div className="max-w-[1440px] mx-auto relative md:flex">
          <Sidebar />

          <main className="flex-1">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
