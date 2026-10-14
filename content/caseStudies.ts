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
      {
        heading: "Context",
        body: "Underwriters at Convex spent an average of 87 hours a year each reading engineering surveyor reports — the documents that actually describe the risk they were pricing — one email attachment at a time, with no triage and no record of what had been read before a quote went out. The bottleneck wasn't underwriting judgement; it was getting a dense technical document in front of the right judgement at all. And the real customer of that delay wasn't the underwriter — it was the broker on the other end, waiting on a quote that couldn't move until someone had read the report.",
      },
      {
        heading: "Where the judgement actually lived",
        body: "Cognitive Decision Making interviews with underwriters — run with a Cognitive Task Analysis specialist brought in from the University of Bath, rather than attempting the method casually — surfaced which parts of a report actually drove an accept, decline or price decision, as distinct from the parts that simply took longest to read. That gap, between what's actually read and what's actually decisive, is what the automated extraction had to reproduce, not just a faster version of reading everything. Having learned the method properly, I taught it on to my own team and the business analysts afterwards, so the practice outlived this one project.",
      },
      {
        heading: "The decision I made",
        body: "Rather than route the AI's extraction straight to the underwriter, I designed a second user into the workflow: a \"unicorn\" — a subject-matter expert for each line of business — who reviews and corrects the model's output before an underwriter ever sees it, with every correction logged and fed back in. The underwriter is only pinged in Slack once a report has cleared that review.\n\nThe alternative was cheaper to build and worse to run: sending AI output straight to underwriters and asking them to self-check it would have \"saved\" the same reading hours on paper, while quietly reintroducing the original risk — underwriters trusting an extraction because checking it properly takes the same discipline reading it did, with nothing to catch the moment they don't. Adding a reviewer cost one extra role and one extra step, per line of business, to buy a system where the AI's accuracy was actually being verified, not just assumed.",
      },
      {
        heading: "What shipped",
        body: "The service watches a shared inbox for incoming surveyor reports, extracts and summarises each one, routes the summary to the unicorn reviewer for sign-off, pushes the cleared version into Launchpad, and notifies the underwriter by Slack the moment it's ready. A later iteration layered in online news sources for a fuller risk picture, and pulled structured third-party data — S&P filings, for instance — to flag where a client's own submission didn't match. [ screens: pending a confidentiality check against Convex's IP before publishing ]",
      },
      {
        heading: "Outcome",
        body: "Before the service, underwriters spent an average of 87 hours a year each just reading these reports. The service now saves 80 of those hours a year, per underwriter — the remaining time sits with the unicorn review, by design, not as a gap the system failed to close. Per-document review time dropped from roughly 3 hours to 15 minutes, and the proportion of report insight actually reviewed, rather than skimmed or skipped under time pressure, rose 90%. The work was a 2026 National AI Awards finalist.",
      },
      {
        heading: "What I'd do differently",
        body: "I'd started scoping risk and compliance analytics on top of the unicorn's review data — a second layer that would have used the correction log itself as a signal, not just a quality check — when I left Convex. It's the one part of the system I designed the entry point for but didn't get to build.",
      },
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
