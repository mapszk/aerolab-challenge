import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

const inter = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aerolab Challenge",
  description: "Hire me :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
