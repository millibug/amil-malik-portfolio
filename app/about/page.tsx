export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-12 py-16">
      <div className="flex gap-10">
        <div className="flex h-44 w-44 shrink-0 items-center justify-center rounded-full border border-dashed border-muted/50 text-xs text-muted">
          [ photo ]
        </div>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted">About</p>
          <h1 className="font-display text-3xl">Amil Malik</h1>
          <div className="mt-4 flex max-w-xl flex-col gap-4 text-sm text-muted">
            <p>[ para 1 — Convex founding-employee arc, seven years, three in product ]</p>
            <p>
              [ para 2 — the move from industrial to digital design, and why
              that still shapes how you design ]
            </p>
            <p>
              [ para 3 — where you&rsquo;re headed: Head of Design / UX,
              Operating Partner named briefly as the longer horizon — confirm
              how forward to put this ]
            </p>
          </div>
          <div className="mt-6 flex gap-3">
            <a href="#" className="rounded bg-ink px-4 py-2 text-sm text-paper">
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/amiljmalik/"
              className="rounded border border-ink px-4 py-2 text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
