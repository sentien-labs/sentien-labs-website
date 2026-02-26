"use client";

import { useState } from "react";

// ─── What's Inside items ──────────────────────────────────────────────────────
const TOOLKIT_CONTENTS = [
  {
    icon: "🔵",
    title: "The Complete AI Tool Stack",
    desc: "20 vetted tools across 4 tiers — from free essentials to income accelerators. Exact pricing, affiliate links, and Dr. S's personal takes on each.",
  },
  {
    icon: "💰",
    title: "50 AI Side Hustles",
    desc: "Ranked by difficulty and monthly earning potential. From beginner ($200+/mo) to advanced ($100K+/mo). One clear winner for your skill level.",
  },
  {
    icon: "🔍",
    title: "AI Crypto Project Checklist",
    desc: "The 10-point checklist to evaluate any token in under 30 minutes. Used alongside VerdictSwarm for maximum protection.",
  },
  {
    icon: "🧠",
    title: "12 Power Prompts for Financial Analysis",
    desc: "The exact ChatGPT and Claude prompts Dr. S uses for token deep-dives, portfolio risk analysis, business validation, and more.",
  },
  {
    icon: "📈",
    title: "Top 10 AI Business Opportunities for 2026",
    desc: "Where real money is being made right now — with entry costs, revenue potential, and realistic timelines to first dollar.",
  },
  {
    icon: "⚡",
    title: "VerdictSwarm Spotlight",
    desc: "Full walkthrough of the AI-powered crypto scanner built by Sentien Labs. How to use it, what it catches, and why it changes the game.",
  },
];

// ─── Email Form Component ─────────────────────────────────────────────────────
function EmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center space-y-6 py-4">
        {/* Success state */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/40 text-3xl">
          ✅
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#00E5FF] mb-2">
            You&apos;re in. Let&apos;s go.
          </h3>
          <p className="text-white/60 text-sm max-w-sm mx-auto">
            Welcome to the Sentien Labs community. Your toolkit is ready below.
          </p>
        </div>

        {/* Download button placeholder */}
        <div className="space-y-3">
          <a
            href="#download"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00E5FF] text-[#0A1628] font-bold text-lg hover:bg-white transition-colors"
          >
            <span>📥</span>
            Download the AI Money Toolkit 2026
          </a>
          <p className="text-xs text-white/30">
            PDF link coming soon — you&apos;ll also receive it by email once the guide is published.
          </p>
        </div>

        {/* Next steps */}
        <div className="pt-4 border-t border-white/10">
          <p className="text-xs text-white/40 mb-3">While you wait — check these out:</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              href="https://vswarm.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00E5FF] hover:text-white transition"
            >
              ⚡ Try VerdictSwarm →
            </a>
            <a
              href="https://x.com/SentienLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition"
            >
              Follow @SentienLabs
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Your first name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={status === "loading"}
          className="w-full px-4 py-3.5 rounded-xl bg-[#0A1628] border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF]/50 transition disabled:opacity-50"
        />
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "loading"}
          className="w-full px-4 py-3.5 rounded-xl bg-[#0A1628] border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF]/50 transition disabled:opacity-50"
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm text-center">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 px-6 rounded-xl bg-[#00E5FF] text-[#0A1628] font-bold text-lg hover:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <span className="inline-block w-4 h-4 border-2 border-[#0A1628]/40 border-t-[#0A1628] rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <span>📥</span>
            Send Me the Free Toolkit
          </>
        )}
      </button>

      <p className="text-center text-xs text-white/30">
        No spam. No fluff. Just signal. Unsubscribe anytime.
      </p>
    </form>
  );
}

// ─── Main Client Component ────────────────────────────────────────────────────
export default function ToolkitClient() {
  return (
    <main className="min-h-dvh bg-[#0A1628] text-white">
      {/* ── Nav bar ─────────────────────────────────────────────────────── */}
      <nav className="w-full border-b border-white/5 bg-[#0A1628]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/pfp-logo-llc.png"
              alt="Sentien Labs"
              className="h-8 w-8 rounded-lg"
            />
            <span className="font-bold text-sm">
              Sentien <span className="text-[#00E5FF]">Labs</span>
            </span>
          </a>
          <a
            href="https://vswarm.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#00E5FF] border border-[#00E5FF]/30 px-3 py-1.5 rounded-lg hover:bg-[#00E5FF]/10 transition"
          >
            ⚡ Try VerdictSwarm
          </a>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#00E5FF]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-12 flex flex-col lg:flex-row items-center gap-10">
          {/* Left: text */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/5 text-xs text-[#00E5FF] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              FREE PDF GUIDE · 2026 EDITION
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
                style={{ fontFamily: "'Orbitron', 'Space Grotesk', sans-serif" }}>
              The <span className="text-[#00E5FF]">AI Money</span>
              <br />
              Toolkit 2026
            </h1>

            <p className="text-lg text-white/60 leading-relaxed max-w-xl mx-auto lg:mx-0">
              50 side hustles. 20 vetted tools. 12 power prompts. The complete system
              for earning with AI — built by{" "}
              <span className="text-white font-medium">Dr. S</span> at Sentien Labs.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm">
              {[
                { num: "50", label: "Side Hustles" },
                { num: "20", label: "AI Tools" },
                { num: "12", label: "Power Prompts" },
                { num: "100%", label: "Free" },
              ].map(({ num, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-black text-[#00E5FF]">{num}</div>
                  <div className="text-xs text-white/40">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form card */}
          <div className="w-full max-w-md flex-shrink-0">
            <div className="rounded-2xl border border-[#00E5FF]/20 bg-[#1A2332] p-6 shadow-xl shadow-[#00E5FF]/5">
              <div className="mb-5">
                <h2 className="text-xl font-bold mb-1">Get the Free PDF</h2>
                <p className="text-sm text-white/50">
                  Enter your email — we&apos;ll send it straight to your inbox.
                </p>
              </div>
              <EmailForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Dr. S Quote Block ───────────────────────────────────────────── */}
      <section className="border-y border-white/5 bg-[#0E1E38]">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src="/dr-s-avatar.png"
                  alt="Dr. S — Host of Sentien Labs"
                  className="h-20 w-20 rounded-2xl object-cover border-2 border-[#00E5FF]/30"
                />
                <div className="absolute -bottom-1 -right-1 bg-[#00E5FF] text-[#0A1628] text-xs font-bold px-1.5 py-0.5 rounded-md">
                  Dr. S
                </div>
              </div>
            </div>
            {/* Quote */}
            <div className="flex-1 text-center sm:text-left">
              <blockquote className="text-lg sm:text-xl text-white/80 leading-relaxed italic">
                &ldquo;We&apos;re at the most unusual moment in financial history. AI isn&apos;t just a
                buzzword anymore — it&apos;s a toolkit that anyone with a laptop and a few hours
                a week can use to generate real, measurable income. The people who figure this
                out in 2026 will talk about it the way people talked about getting into Bitcoin
                in 2017.&rdquo;
              </blockquote>
              <div className="mt-3">
                <p className="font-bold text-[#00E5FF]">Dr. S</p>
                <p className="text-xs text-white/40">Host · Sentien Labs · sentionlabs.io</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's Inside ───────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black mb-3"
              style={{ fontFamily: "'Orbitron', 'Space Grotesk', sans-serif" }}>
            What&apos;s <span className="text-[#00E5FF]">Inside</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Six sections. Everything you need to start earning with AI in 2026.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLKIT_CONTENTS.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-[#1A2332] p-5 hover:border-[#00E5FF]/30 hover:bg-[#00E5FF]/5 transition-colors"
            >
              <div className="text-2xl mb-3">{icon}</div>
              <h3 className="font-bold text-white mb-2 leading-tight">{title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 50 Hustles Preview ──────────────────────────────────────────── */}
      <section className="bg-[#0E1E38] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black mb-3"
                style={{ fontFamily: "'Orbitron', 'Space Grotesk', sans-serif" }}>
              50 Ways to <span className="text-[#00E5FF]">Earn with AI</span>
            </h2>
            <p className="text-white/50 max-w-lg mx-auto">
              Ranked by difficulty. One fits exactly where you are right now.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {[
              { label: "🟢 Beginner", examples: "AI Prompt Selling, Voiceover Services, Blog Writing", range: "$200–$3K/mo" },
              { label: "🟡 Intermediate", examples: "Faceless YouTube, Affiliate Marketing, Notion Templates", range: "$500–$15K/mo" },
              { label: "🟠 Growth", examples: "Content Agency, AI Automation Consulting, Paid Newsletter", range: "$1K–$30K/mo" },
              { label: "🔴 Advanced", examples: "AI SaaS Product, Full Marketing Agency, Membership Community", range: "$5K–$500K+/mo" },
            ].map(({ label, examples, range }) => (
              <div key={label} className="rounded-xl border border-white/10 bg-[#1A2332]/60 p-4">
                <div className="font-bold text-sm mb-1">{label}</div>
                <div className="text-xs text-white/50 mb-2">{examples}</div>
                <div className="text-xs text-[#00E5FF] font-medium">{range}</div>
              </div>
            ))}

            {/* CTA card */}
            <div className="sm:col-span-2 lg:col-span-1 rounded-xl border border-[#00E5FF]/30 bg-[#00E5FF]/5 p-4 flex flex-col items-center justify-center text-center gap-2">
              <div className="text-2xl">📥</div>
              <p className="text-sm font-bold text-[#00E5FF]">All 50 hustles in the free PDF</p>
              <p className="text-xs text-white/40">With earnings data + first steps</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VerdictSwarm Callout ─────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="rounded-2xl border border-[#00E5FF]/20 bg-gradient-to-br from-[#1A2332] to-[#0E1E38] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="text-4xl flex-shrink-0">⚡</div>
          <div className="flex-1">
            <div className="text-xs text-[#00E5FF] font-medium uppercase tracking-widest mb-2">
              From Sentien Labs
            </div>
            <h3 className="text-xl font-black mb-2">
              VerdictSwarm — AI Crypto Scanner
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xl">
              Evaluate any crypto token in minutes. AI-powered risk scoring, on-chain
              intelligence, and red flag alerts. The toolkit includes a full walkthrough
              on how to use it alongside the checklist inside.
            </p>
          </div>
          <a
            href="https://vswarm.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-[#00E5FF] text-[#0A1628] font-bold text-sm hover:bg-white transition-colors whitespace-nowrap"
          >
            Try It Free →
          </a>
        </div>
      </section>

      {/* ── Bottom CTA / Form ────────────────────────────────────────────── */}
      <section className="bg-[#0E1E38] border-t border-white/5">
        <div className="max-w-xl mx-auto px-6 py-16 text-center space-y-8">
          {/* Dr. S + Nex pointing to the form */}
          <div className="flex justify-center">
            <img
              src="/duo-pointing-cta.png"
              alt="Dr. S and Nex pointing you to the free toolkit"
              className="max-h-72 object-contain drop-shadow-[0_0_30px_rgba(0,229,255,0.15)]"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-black mb-3"
                style={{ fontFamily: "'Orbitron', 'Space Grotesk', sans-serif" }}>
              The window is <span className="text-[#00E5FF]">open</span>.
            </h2>
            <p className="text-white/50 text-lg">
              Get the free toolkit and start building your AI income stack today.
            </p>
          </div>

          <div className="rounded-2xl border border-[#00E5FF]/20 bg-[#1A2332] p-6 text-left">
            <div className="mb-5 text-center">
              <p className="text-sm text-white/50">
                Free PDF · No credit card · Instant access
              </p>
            </div>
            <EmailForm />
          </div>

          <p className="text-xs text-white/25 leading-relaxed">
            By entering your email, you join the Sentien Labs newsletter. We publish
            weekly AI + finance insights, tool recommendations, and early product access.
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <div className="flex items-center gap-2">
            <img src="/pfp-logo-llc.png" alt="Sentien Labs" className="h-5 w-5 rounded" />
            <span>© 2026 Sentien Labs LLC. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="https://vswarm.io" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">VerdictSwarm</a>
            <a href="https://x.com/SentienLabs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Twitter / X</a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 pb-6 text-xs text-white/15 leading-relaxed">
          <strong>Disclaimer:</strong> This toolkit is for educational purposes only. Nothing here
          constitutes financial, investment, or legal advice. Crypto investments carry significant
          risk. Always do your own research before making financial decisions. Affiliate links may
          result in commission payments to Sentien Labs at no cost to you.
        </div>
      </footer>
    </main>
  );
}
