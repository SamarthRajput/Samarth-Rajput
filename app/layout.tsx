import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./_components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Samarth Rajput",
  description: "Created by Samarth Rajput",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`} >
        <div >
          {children}
        </div>
      </body>
    </html>
  );
}
