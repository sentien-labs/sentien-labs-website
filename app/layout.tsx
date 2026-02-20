import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sentien Labs — AI · Finance · Future",
  description: "AI-native company building intelligent products at the intersection of artificial intelligence, finance, and the future.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-[#0A1628] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
