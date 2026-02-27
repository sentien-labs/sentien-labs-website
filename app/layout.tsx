import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sentien Labs | B2B AI Consulting",
  description:
    "Sentien Labs delivers practical AI consulting for businesses: free inefficiency analysis, custom workflow implementation, and ongoing managed support.",
  icons: {
    icon: "/pfp-logo-llc.png",
    apple: "/pfp-logo-llc.png",
  },
  openGraph: {
    title: "Sentien Labs | B2B AI Consulting",
    description:
      "We make your business smarter with AI through measurable process improvements and managed support.",
    images: ["/pfp-logo-llc.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
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
