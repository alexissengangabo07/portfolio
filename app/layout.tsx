import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Alexis Senga Ngabo (Dr. Code) | Full-Stack Web Developer & Founder at KivuNex",
  description:
    "Portfolio officiel d'Alexis Senga Ngabo (Dr. Code), développeur web Full-Stack et fondateur de KivuNex. Expert en React, Next.js, Node.js, Express et solutions web scalables basé à Goma, RDC.",
  icons: {
    icon: "/kivunex.png",
    apple: "/kivunex.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
