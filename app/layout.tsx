import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Footer from "@/components/Footer";
import { StaggeredColumnsPreloader } from "@/components/StaggeredColumnsPreloader";
import { AgentationDevtools } from "./agentation-devtools";

export const metadata: Metadata = {
  title: "ATELIER PADEL PRIVÉ — Architectural Glass Courts & Private Sanctuary",
  description:
    "An ultra-exclusive architectural sanctuary of 360° panoramic structural glass courts, black silica sand turf, bespoke carbon racquets, and private court salon allocations in Monaco and Geneva.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "ATELIER PADEL PRIVÉ — Architectural Glass Courts & Private Sanctuary",
    description:
      "An ultra-exclusive architectural sanctuary of 360° panoramic structural glass courts, black silica sand turf, bespoke carbon racquets, and private court salon allocations in Monaco and Geneva.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StaggeredColumnsPreloader />
        <LenisProvider />
        <main>{children}</main>
        <Footer />
        <AgentationDevtools />
      </body>
    </html>
  );
}
