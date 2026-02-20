export default function Home() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-6">
      {/* Logo / Brand */}
      <div className="text-center space-y-6 max-w-2xl">
        <div className="inline-flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#0099AA] flex items-center justify-center text-2xl font-bold text-black">
            S
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Sentien <span className="text-[#00E5FF]">Labs</span>
          </h1>
        </div>

        <p className="text-lg text-white/60 leading-relaxed">
          AI-native company building intelligent products at the intersection of
          <strong className="text-[#00E5FF]"> artificial intelligence</strong>,
          <strong className="text-[#00E5FF]"> finance</strong>, and the
          <strong className="text-[#00E5FF]"> future</strong>.
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-white/40">
          <span className="inline-block h-2 w-2 rounded-full bg-[#00E5FF] animate-pulse" />
          Building in public
        </div>
      </div>

      {/* Products */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 max-w-2xl w-full">
        <a
          href="https://vswarm.io"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-[#00E5FF]/20 bg-[#1A2332] p-6 transition hover:border-[#00E5FF]/50 hover:bg-[#00E5FF]/5"
        >
          <div className="text-2xl mb-3">⚖️</div>
          <h2 className="text-lg font-bold group-hover:text-[#00E5FF] transition">VerdictSwarm</h2>
          <p className="text-sm text-white/50 mt-2">
            Multi-AI consensus token scanner. 6 agents debate to protect your trades.
          </p>
          <span className="inline-flex items-center gap-1 mt-3 text-xs text-[#00E5FF]">
            Visit vswarm.io →
          </span>
        </a>

        <div className="rounded-2xl border border-white/10 bg-[#1A2332]/50 p-6">
          <div className="text-2xl mb-3">🧠</div>
          <h2 className="text-lg font-bold text-white/60">More Coming</h2>
          <p className="text-sm text-white/30 mt-2">
            AI-powered products in development. Follow us for updates.
          </p>
          <span className="inline-flex items-center gap-1 mt-3 text-xs text-white/30">
            Stay tuned
          </span>
        </div>
      </div>

      {/* Links */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
        <a href="https://x.com/VswarmAi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          𝕏 Twitter
        </a>
        <a href="https://github.com/vswarm-ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          GitHub
        </a>
        <a href="https://t.me/VerdictSwarmBot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          Telegram
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-16 mb-8 text-center text-xs text-white/20">
        © 2026 Sentien Labs LLC. All rights reserved.
      </footer>
    </main>
  );
}
