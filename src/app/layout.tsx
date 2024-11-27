import type { Metadata } from "next";
import "./globals.css";
import Home from "./Home/page";


export const metadata: Metadata = {
  title: "ELBRIT | Easy & Secure Pharmacy",
  description: "Leading Online Pharmacy for Medicines & Supplements",
};

export default function RootLayout() {
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
