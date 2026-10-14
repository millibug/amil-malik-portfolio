import Link from "next/link";
import type { CaseStudy } from "@/content/caseStudies";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const written = study.status === "written";
  const body = (
    <div className="flex h-full flex-col gap-3 rounded border border-hairline p-5">
      <div className="flex h-36 items-center justify-center rounded border border-dashed border-muted/50 bg-black/[.02] text-xs text-muted">
        [ real interface crop ]
      </div>
      <h3 className="font-display text-lg leading-snug">{study.title}</h3>
      <p className="text-sm text-muted">{study.dek}</p>
      <span className="text-xs font-semibold text-accent">
        {written ? "Read case study →" : "Not yet written"}
      </span>
    </div>
  );

  if (!written) {
    return <div className="opacity-50">{body}</div>;
  }
  return (
    <Link href={`/work/${study.slug}`} className="block hover:border-ink">
      {body}
    </Link>
  );
}
