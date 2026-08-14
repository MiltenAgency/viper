import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Viper - Portfolio & Agency",
  description:
    "Viper, a creative portfolio framer template, is a perfect fit for personal portfolios, designers, freelancers, agencies, and photographers.",
  openGraph: {
    title: "Viper - Portfolio & Agency",
    description:
      "Viper, a creative portfolio framer template, is a perfect fit for personal portfolios, designers, freelancers, agencies, and photographers.",
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
