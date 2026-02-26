import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sentien Labs — AI · Finance · Future",
  description: "AI-native company building intelligent products at the intersection of artificial intelligence, finance, and the future.",
  icons: {
    icon: "/pfp-logo-llc.png",
    apple: "/pfp-logo-llc.png",
  },
  openGraph: {
    images: ["/pfp-logo-llc.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Orbitron (headlines) + Inter (body) — brand typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-dvh bg-[#0A1628] text-white antialiased"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
