import Link from "next/link";
import { caseStudies } from "@/content/caseStudies";

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-3xl px-12 py-16">
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted">Work</p>
      <h1 className="font-display text-3xl">Four case studies. Depth over volume.</h1>

      <div className="mt-10 flex flex-col gap-5">
        {caseStudies
          .slice()
          .sort((a, b) => a.priority - b.priority)
          .map((s) => {
            const written = s.status === "written";
            const row = (
              <div className="flex items-center gap-6 rounded border border-hairline p-5">
                <div className="flex h-24 w-40 shrink-0 items-center justify-center rounded border border-dashed border-muted/50 text-xs text-muted">
                  [ screen ]
                </div>
                <div>
                  <h3 className="font-display text-lg">{s.title}</h3>
                  <p className="text-sm text-muted">
                    {written ? s.dek : `Not yet written — ${s.dek}`}
                  </p>
                </div>
              </div>
            );
            return written ? (
              <Link key={s.slug} href={`/work/${s.slug}`} className="hover:border-ink">
                {row}
              </Link>
            ) : (
              <div key={s.slug} className="opacity-50">
                {row}
              </div>
            );
          })}
      </div>
    </div>
  );
}
