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
<<<<<<< HEAD
        <div className="container relative md:flex">
=======
        <div className="max-w-[1440px] mx-auto relative md:flex">
>>>>>>> 6b2479a3694f5827e837f4eda1c2a835c96d61e8
          <Sidebar />

          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
