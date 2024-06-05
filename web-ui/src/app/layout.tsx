import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderTabs } from "../components/Header/HeaderTabs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-center items-center sticky top-0 z-[999]">
          <HeaderTabs />
        </header>
        {children}
      </body>
    </html>
  );
}
