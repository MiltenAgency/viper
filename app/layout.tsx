import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KRONOS Horology - Independent Haute Horlogerie Suisse",
  description:
    "Independent manufacture of architectural Grade 5 titanium timepieces, flying tourbillon escapements, and sapphire dial chronometers crafted in the Swiss Jura.",
  openGraph: {
    title: "KRONOS Horology - Independent Haute Horlogerie Suisse",
    description:
      "Independent manufacture of architectural Grade 5 titanium timepieces, flying tourbillon escapements, and sapphire dial chronometers crafted in the Swiss Jura.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
