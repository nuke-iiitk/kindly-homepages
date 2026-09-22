import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Halcyon — Clarity for teams that move fast" },
      {
        name: "description",
        content:
          "Halcyon brings your projects, docs, and decisions into one calm surface — so the work stays focused and the noise stays out.",
      },
      { property: "og:title", content: "Halcyon — Clarity for teams that move fast" },
      {
        property: "og:description",
        content:
          "A calm home for focused teams. Bring your projects, docs, and decisions into one surface.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-display text-foreground antialiased">
      {/* ambient gradient light */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-32 -top-40 size-[520px] rounded-full bg-primary/20 blur-[120px] animate-[float-slow_14s_var(--ease)_infinite]"></div>
        <div className="absolute -right-40 top-1/3 size-[560px] rounded-full bg-glow-sky/25 blur-[130px] animate-[float-slower_18s_var(--ease)_infinite]"></div>
        <div className="absolute bottom-0 left-1/3 size-[480px] rounded-full bg-glow-indigo/20 blur-[120px]"></div>
      </div>

      {/* nav */}
      <header className="sticky top-0 z-20 px-4 pt-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-glass-strong/60 bg-surface px-5 py-3 backdrop-blur-xl ring-1 ring-black/5">
          <a href="#" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
              H
            </span>
            <span className="text-[15px] font-bold tracking-tight">Halcyon</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5"
          >
            Get started
          </a>
        </nav>
      </header>

      {/* hero */}
      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-20 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-glass-strong/60 bg-surface px-3.5 py-1.5 text-xs font-medium text-muted ring-1 ring-black/5 backdrop-blur-xl animate-[fade-up_0.6s_var(--ease)_both]">
              <span className="size-1.5 rounded-full bg-primary"></span>
              Now in public beta
            </span>
            <h1 className="mt-6 text-balance text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl animate-[fade-up_0.7s_var(--ease)_0.1s_both]">
              Clarity for teams that move fast
            </h1>
            <p className="mx-auto mt-6 max-w-[46ch] text-pretty text-lg text-muted animate-[fade-up_0.7s_var(--ease)_0.2s_both]">
              Halcyon brings your projects, docs, and decisions into one calm surface — so the work
              stays focused and the noise stays out.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row animate-[fade-up_0.7s_var(--ease)_0.3s_both]">
              <a
                href="#contact"
                className="w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
              >
                Start for free
              </a>
              <a
                href="#features"
                className="w-full rounded-xl border border-glass-strong/60 bg-surface px-6 py-3 text-sm font-semibold text-foreground ring-1 ring-black/5 backdrop-blur-xl transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* hero glass panel */}
          <div className="mx-auto mt-16 max-w-4xl animate-[fade-up_0.8s_var(--ease)_0.4s_both]">
            <div className="rounded-3xl border border-glass-strong/60 bg-surface p-3 backdrop-blur-2xl ring-1 ring-black/5">
              <div className="rounded-2xl border border-glass/60 bg-glass/40 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-1.5 pb-4">
                  <span className="size-2.5 rounded-full bg-rose-300/70"></span>
                  <span className="size-2.5 rounded-full bg-amber-300/70"></span>
                  <span className="size-2.5 rounded-full bg-emerald-300/70"></span>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-glass/60 bg-glass/50 p-4 backdrop-blur-md">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                      Active
                    </p>
                    <p className="mt-2 text-2xl font-bold tracking-tight">128</p>
                    <p className="mt-1 text-xs text-muted">tasks in flight</p>
                  </div>
                  <div className="rounded-xl border border-glass/60 bg-glass/50 p-4 backdrop-blur-md">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                      Cycle
                    </p>
                    <p className="mt-2 text-2xl font-bold tracking-tight">4.2d</p>
                    <p className="mt-1 text-xs text-muted">avg. turnaround</p>
                  </div>
                  <div className="rounded-xl border border-glass/60 bg-glass/50 p-4 backdrop-blur-md">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                      Focus
                    </p>
                    <p className="mt-2 text-2xl font-bold tracking-tight">96%</p>
                    <p className="mt-1 text-xs text-muted">on-priority work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* features */}
        <section id="features" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              (a) Capabilities
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Everything in one calm surface
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-glass-strong/60 bg-surface p-6 ring-1 ring-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:ring-primary/30 animate-[fade-up_0.7s_var(--ease)_both]"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                  {f.index}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* about */}
        <section id="about" className="mx-auto max-w-6xl px-4 pb-20">
          <div className="grid items-center gap-8 rounded-3xl border border-glass-strong/60 bg-surface p-8 backdrop-blur-2xl ring-1 ring-black/5 md:grid-cols-2 md:p-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                (b) About
              </p>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight">
                Built for the way you actually work
              </h2>
              <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted">
                Halcyon started as a small team's attempt to stop juggling five tabs. Today it's a
                calm home for hundreds of teams who value focus over features.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-glass/60 bg-glass/50 p-4 backdrop-blur-md"
                >
                  <p className="text-2xl font-bold tracking-tight">{s.value}</p>
                  <p className="mt-1 text-xs text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer
        id="contact"
        className="relative z-10 border-t border-glass/50 bg-surface/70 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-sm">
              <div className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                  H
                </span>
                <span className="text-[15px] font-bold tracking-tight">Halcyon</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                A calm home for focused teams. Say hello and we'll get you set up.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                hello@halcyon.app
              </a>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Status
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-glass/50 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© 2024 Halcyon Labs. All rights reserved.</p>
            <p className="font-mono">Designed with restraint.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    index: "01",
    title: "Unified workspace",
    body: "Projects, notes, and decisions live side by side, so context never gets lost between tools.",
  },
  {
    index: "02",
    title: "Real-time sync",
    body: "Changes propagate instantly across every device, with a full history you can always rewind.",
  },
  {
    index: "03",
    title: "Quiet by design",
    body: "Notifications batch and surface only what matters, keeping your attention where it belongs.",
  },
];

const stats = [
  { value: "40k+", label: "teams onboard" },
  { value: "99.9%", label: "uptime last year" },
  { value: "120ms", label: "median response" },
  { value: "4.9", label: "average rating" },
];
