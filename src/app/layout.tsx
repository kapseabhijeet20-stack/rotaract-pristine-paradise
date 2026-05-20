import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rotaract Club of Pune Pristine Paradise",
  description: "Empowering young leaders through service, fellowship, and innovation. Join the Rotaract Club of Pune Pristine Paradise.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
