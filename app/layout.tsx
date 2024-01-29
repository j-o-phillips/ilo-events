import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "../components/navbar/Navbar";
import getCurrentUser from "@/actions/getCurrentUser";
import ToasterProvider from "@/providers/ToasterProvider";
import Footer from "@/components/footer/Footer";

const ivarReg = localFont({
  src: "./fonts/IvarDisplayRegularOT/IvarDisplay-Regular.otf",
  variable: "--font-ivarreg",
});

const ivarIta = localFont({
  src: "./fonts/IvarDisplayItalicOT/IvarDisplay-Italic.otf",
  variable: "--font-ivarita",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ilo Events",
  description: "Book and arrange events for your family",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ivarReg.variable} ${ivarIta.variable}`}
      >
        <ToasterProvider />

        <Navbar currentUser={currentUser} />
        <div className="pt-24">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
