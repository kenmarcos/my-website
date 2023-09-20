import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

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
    <html lang="pt-BR">
      <body className={openSans.className}>
        <div className="relative md:flex">
          <Sidebar />

          <main className="md:flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
