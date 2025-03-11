import type { Metadata } from "next";

import { firaSans } from "@/fonts";
import "./globals.css";



export const metadata: Metadata = {
  title: "Lemon Door - Psychedelic & Futuristic Clothing",
  description:
    "Lemon Door is a unique clothing brand specializing in psychedelic and futuristic designs. We create and modify t-shirts, hoodies, and sweatshirts to give them a one-of-a-kind style.",
  keywords: [
    "Lemon Door",
    "psychedelic clothing",
    "futuristic fashion",
    "custom apparel",
    "hoodies",
    "t-shirts",
    "sweatshirts",
    "unique fashion",
    "alternative clothing",
    "trippy designs",
  ],
  icons: "/favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no">
      <body
        className={` ${firaSans.className} antialiased  min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
