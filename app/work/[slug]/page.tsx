import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  return (
    <div className="mx-auto max-w-3xl px-12 py-16">
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted">
        Case study {study.priority} of {caseStudies.length}
      </p>
      <h1 className="font-display text-3xl">{study.title}</h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        {study.status === "written"
          ? "Screens still to come — flagged where they're missing below."
          : "Placeholder copy below — not yet written."}
      </p>

      <div className="mt-12 flex flex-col gap-10">
        {study.sections.map((section, i) => (
          <div key={section.heading}>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted">
              {i + 1} — {section.heading}
            </p>
            {study.status === "written" ? (
              <div className="whitespace-pre-line text-sm leading-relaxed text-ink">
                {section.body}
              </div>
            ) : (
              <div className="rounded border border-dashed border-muted/50 p-4 text-sm text-muted">
                {section.body}
              </div>
            )}
            {i === 3 && (
              <div className="mt-4 grid grid-cols-3 gap-4">
                {[0, 1, 2].map((n) => (
                  <div
                    key={n}
                    className="flex h-32 items-center justify-center rounded border border-dashed border-muted/50 text-xs text-muted"
                  >
                    [ real screen crop ]
                  </div>
                ))}
              </div>
            )}
            {i === 4 && study.stats.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-4">
                {study.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded border border-hairline p-4 text-center"
                  >
                    <div className="font-display text-xl">{stat.value}</div>
                    <div className="text-xs text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-14 flex gap-4">
        <Link href="/work" className="rounded border border-ink px-4 py-2 text-sm">
          ← Back to Work
        </Link>
        <Link href="/method" className="rounded bg-ink px-4 py-2 text-sm text-paper">
          See the method behind this →
        </Link>
      </div>
    </div>
  );
}
