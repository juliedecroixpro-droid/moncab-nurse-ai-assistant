import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nurse AI Assistant - Gestion de tournées IDEL",
  description: "Application intelligente pour la gestion des tournées d'infirmières libérales avec assistant IA conversationnel",
  generator: "v0.app",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
