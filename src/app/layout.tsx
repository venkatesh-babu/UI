import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import AboutPage from "./BlogComponent/page";
import Home from "./Home/page";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ELBRIT | Easy & Secure Pharmacy",
  description: "Leading Online Pharmacy for Medicines & Supplements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      {/* <link rel="icon" href="../../public/Assets/Images/favIcon.jpg" /> */}
      <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&amp;family=Poppins&amp;display=swap" rel="stylesheet" />
      </head>
      <body>
        <Home />
      </body>
    </html>
  );
}
