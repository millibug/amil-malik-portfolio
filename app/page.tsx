import { caseStudies } from "@/content/caseStudies";
import CaseStudyCard from "@/components/CaseStudyCard";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-12 py-16">
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted">
        Placeholder copy — not final
      </p>
      <h1 className="max-w-2xl font-display text-4xl leading-tight">
        Cognitive Task Analysis and AI-informed design, for decisions that
        carry real risk.
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        One line of positioning, tightened against the About page copy. No
        hero illustration, no scroll animation — straight into the work
        below.
      </p>

      <p className="mb-5 mt-14 text-xs font-bold uppercase tracking-widest text-muted">
        Work — four case studies
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {caseStudies
          .slice()
          .sort((a, b) => a.priority - b.priority)
          .map((s) => (
            <CaseStudyCard key={s.slug} study={s} />
          ))}
      </div>
    </div>
  );
}
