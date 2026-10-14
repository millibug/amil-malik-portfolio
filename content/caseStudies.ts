// Content lives separately from layout, on purpose (see the plan doc's
// token-efficiency note) — write and edit the words here without touching
// any page component.

export type Stat = { value: string; label: string };

export type CaseStudySection = {
  heading: string;
  body: string; // placeholder copy until each case study is actually written
};

export type CaseStudy = {
  slug: string;
  title: string;
  dek: string; // one-line card summary
  status: "placeholder" | "written";
  priority: number; // write order, per the content plan
  stats: Stat[];
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "docintel",
    title: "Docintel / Risk Summariser",
    dek: "3 hrs → 15 min per document. 80 hrs saved per underwriter / year. Built with a CTA expert from Bath.",
    status: "written", // page is live; the copy inside it is still placeholder (see sections below)
    priority: 1,
    stats: [
      { value: "3 hrs → 15 min", label: "per document reviewed" },
      { value: "80 hrs", label: "saved per underwriter / year" },
      { value: "90%", label: "utilisation uplift" },
    ],
    sections: [
      { heading: "Context", body: "[ the business problem, and who the real customer was ]" },
      {
        heading: "Where the judgement actually lived",
        body: "[ the CTA artifact: the cue an expert relied on, the decision point a novice would have missed — the Bath CTA expert, the “unicorn” reviewer design ]",
      },
      {
        heading: "The decision I made",
        body: "[ one committed choice, stated plainly — framed against what else the hours could have bought, not a menu of options ]",
      },
      { heading: "What shipped", body: "[ real screens, annotated with the reasoning behind specific choices ]" },
      { heading: "Outcome", body: "[ the stats above, in prose, stated once ]" },
      { heading: "What I'd do differently", body: "[ one honest line ]" },
    ],
  },
  {
    slug: "launchpad",
    title: "Launchpad underwriting workbench",
    dek: "Broker-as-customer reframe, co-creation and adoption story.",
    status: "placeholder",
    priority: 2,
    stats: [],
    sections: [
      { heading: "Context", body: "[ not yet written ]" },
      { heading: "Where the judgement actually lived", body: "[ not yet written ]" },
      { heading: "The decision I made", body: "[ not yet written ]" },
      { heading: "What shipped", body: "[ not yet written ]" },
      { heading: "Outcome", body: "[ not yet written ]" },
      { heading: "What I'd do differently", body: "[ not yet written ]" },
    ],
  },
  {
    slug: "harness",
    title: "Design-ops harness",
    dek: "Shipped, running code — the answer to “not hands-on enough.”",
    status: "placeholder",
    priority: 3,
    stats: [],
    sections: [
      { heading: "Context", body: "[ not yet written — keep the self-test / validation layer central ]" },
      { heading: "Where the judgement actually lived", body: "[ not yet written ]" },
      { heading: "The decision I made", body: "[ not yet written ]" },
      { heading: "What shipped", body: "[ not yet written ]" },
      { heading: "Outcome", body: "[ not yet written — state build-time facts as measured, “weeks to hours” as an aim, not a result ]" },
      { heading: "What I'd do differently", body: "[ not yet written ]" },
    ],
  },
  {
    slug: "wordings-analyser",
    title: "Wordings Analyser (Contract Analysis)",
    dek: "Confidence-scored contract terms, negotiation levers — a distinct AI product, not another underwriting-CTA story.",
    status: "placeholder",
    priority: 4,
    stats: [],
    sections: [
      { heading: "Context", body: "[ not yet written — raw material already captured from the live site ]" },
      { heading: "Where the judgement actually lived", body: "[ not yet written ]" },
      { heading: "The decision I made", body: "[ not yet written ]" },
      { heading: "What shipped", body: "[ not yet written ]" },
      { heading: "Outcome", body: "[ not yet written ]" },
      { heading: "What I'd do differently", body: "[ not yet written ]" },
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
