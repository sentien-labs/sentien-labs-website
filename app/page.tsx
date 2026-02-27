const supportPackages = [
  {
    name: "Starter Support",
    price: "$299/mo",
    description: "Light-touch optimization and monthly performance review.",
  },
  {
    name: "Growth Support",
    price: "$799/mo",
    description: "Hands-on iteration, process updates, and team enablement.",
    featured: true,
  },
  {
    name: "Enterprise Support",
    price: "$1,999/mo",
    description: "Priority support, strategic advisory, and continuous AI operations.",
  },
];

export default function Home() {
  return (
    <main className="min-h-dvh bg-[#0A1628] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
        <header className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/pfp-logo-llc.png"
              alt="Sentien Labs"
              className="h-10 w-10 rounded-lg border border-[#00E5FF]/35"
            />
            <div>
              <p className="text-sm font-semibold tracking-wide">Sentien Labs</p>
              <p className="text-xs text-white/55">B2B AI Consulting</p>
            </div>
          </div>
          <a
            href="mailto:hello@sentienlabs.io"
            className="rounded-lg border border-[#00E5FF]/45 px-4 py-2 text-sm font-medium text-[#00E5FF] transition hover:bg-[#00E5FF]/10"
          >
            Book a Call
          </a>
        </header>

        <section className="mt-12 grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 md:grid-cols-[1.35fr_1fr] md:p-12">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-[#00E5FF]/40 bg-[#00E5FF]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[#00E5FF]">
              AI-as-a-Service for teams that need outcomes
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              We make your business smarter with AI.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/75">
              Sentien Labs helps operators remove costly inefficiencies with practical,
              production-ready AI workflows. We focus on measurable business results,
              reliable implementation, and long-term support.
            </p>
            <div className="rounded-2xl border border-[#00E5FF]/30 bg-[#00E5FF]/8 p-5 text-base leading-relaxed text-white/90">
              <span className="font-semibold text-[#00E5FF]">Our model:</span> We find your
              biggest inefficiency, fix it for free, and you only pay if it works.
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#081427] p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/70">
              What clients get
            </h2>
            <ul className="mt-4 space-y-4 text-sm text-white/80">
              <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="font-medium text-white">Free pain point analysis</p>
                <p className="mt-1 text-white/65">Identify the highest-impact process to optimize first.</p>
              </li>
              <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="font-medium text-white">Custom workflow implementation</p>
                <p className="mt-1 text-white/65">Deploy tailored AI systems into your existing operations.</p>
              </li>
              <li className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="font-medium text-white">Managed monthly support</p>
                <p className="mt-1 text-white/65">Keep improving outcomes with ongoing optimization.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#00E5FF]">Services</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">AI consulting built for ROI</h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
              Transparent delivery from assessment to implementation. Start with a no-cost
              diagnostic and move to paid support only after proven value.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {supportPackages.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-2xl border p-6 ${
                  plan.featured
                    ? "border-[#00E5FF]/55 bg-[#00E5FF]/10"
                    : "border-white/10 bg-[#081427]"
                }`}
              >
                <p className="text-sm text-white/70">{plan.name}</p>
                <p className="mt-2 text-3xl font-semibold text-white">{plan.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{plan.description}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center">
          <p>© 2026 Sentien Labs LLC. Professional AI consulting for modern businesses.</p>
          <div className="flex gap-5">
            <a href="https://x.com/SentienLabs" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              X
            </a>
            <a href="https://github.com/sentien-labs" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
