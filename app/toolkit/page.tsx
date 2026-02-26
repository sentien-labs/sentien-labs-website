import type { Metadata } from "next";
import ToolkitClient from "./ToolkitClient";

export const metadata: Metadata = {
  title: "The AI Money Toolkit 2026 — Free PDF | Sentien Labs",
  description:
    "50 AI side hustles, 20 vetted tools, 12 power prompts, and the complete crypto evaluation checklist. Free PDF from Sentien Labs.",
  keywords: [
    "AI side hustles",
    "make money with AI",
    "AI tools 2026",
    "crypto AI tools",
    "VerdictSwarm",
    "Sentien Labs",
    "AI money toolkit",
    "earn with AI",
  ],
  openGraph: {
    title: "The AI Money Toolkit 2026 — Free PDF",
    description:
      "50 AI side hustles · 20 vetted tools · 12 power prompts · Crypto checklist. The complete system for earning with AI.",
    url: "https://sentionlabs.io/toolkit",
    siteName: "Sentien Labs",
    images: [
      {
        url: "/pfp-logo-llc.png",
        width: 512,
        height: 512,
        alt: "Sentien Labs AI Money Toolkit",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The AI Money Toolkit 2026 — Free PDF | Sentien Labs",
    description:
      "50 AI side hustles, 20 vetted tools, 12 power prompts. Free from @SentienLabs.",
    images: ["/pfp-logo-llc.png"],
    creator: "@SentienLabs",
  },
  alternates: {
    canonical: "https://sentionlabs.io/toolkit",
  },
};

export default function ToolkitPage() {
  return <ToolkitClient />;
}
