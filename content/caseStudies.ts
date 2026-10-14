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
    dek: "3 hrs → 15 min per document, measured in Datadog. ~80 of 87 hours a year saved per energy underwriter.",
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
        body: "At Convex, energy underwriters were reading around 1,300 engineering reports a year between a team of 15 — about 87 hours each, every year, or 3.6 working days, just reading the documents that told them what they were actually insuring. You can't price a risk without that reading — it's like buying a car without checking it over first — but the bottleneck wasn't the underwriters' judgement. It was getting a judgement-ready signal in front of them at all, inside a dense PDF, one email attachment at a time. And the real customer of that delay wasn't the underwriter — it was the broker on the other end, waiting on a quote that couldn't move until someone had read the report.",
      },
      {
        heading: "Where the judgement actually lived",
        body: "Most AI projects in underwriting start by asking \"where can we apply AI?\" to the data and the model. We inverted that and asked \"where are the hardest decisions?\" instead — through Cognitive Task Analysis interviews with underwriters, run properly with a specialist brought in from the University of Bath rather than attempting the method casually. What came back wasn't one field worth extracting: underwriting judgement draws on the engineering report alongside broker conversations, loss history and market context together, and turns that mix into a decision through reasoning that's mostly tacit — hard to see, let alone automate. The part actually worth building wasn't \"summarise the document\"; it was surfacing the handful of signals inside it that a real judgement turns on, which is a narrower and harder target. Having learned to find that distinction properly, I taught the method on to my own team and the business analysts afterwards, so it outlived this one project.",
      },
      {
        heading: "The decision I made",
        body: "Risk summarisation doesn't have an easy ground truth the way news summarisation does — what counts as a \"correct\" extraction is itself a judgement call, and getting that wrong anywhere in the pipeline would have cost trust fast. So rather than route the model's output straight to the underwriter, I designed a second user into the workflow: a \"unicorn\" — a subject-matter expert for each line of business — who reviews and corrects the extraction before an underwriter ever sees it, with every correction logged and fed back in. The underwriter is only pinged in Slack once a report has cleared that review.\n\nThe alternative was cheaper to build and worse to run: send the AI's output straight to underwriters and ask them to self-check it. That \"saves\" the same reading hours on paper, while quietly reintroducing the original risk under a different name — underwriters trusting an extraction because checking it properly takes the same discipline reading it did, with nothing in the workflow to catch the moment they don't. Adding a reviewer cost one extra role and one extra step per line of business, to buy a system where the AI surfaces the insight and a person still makes the call, rather than the reverse.",
      },
      {
        heading: "What shipped",
        body: "The service watches a shared inbox for incoming surveyor reports, extracts and summarises each one, routes the summary to the unicorn reviewer for sign-off, pushes the cleared version into Launchpad, and notifies the underwriter by Slack the moment it's ready. A later iteration layered in online news sources for a fuller risk picture, and pulled structured third-party data — S&P filings, for instance — to flag where a client's own submission didn't match. [ screens: pending a confidentiality check against Convex's IP before publishing ]",
      },
      {
        heading: "Outcome",
        body: "Before the service, energy underwriters were each spending around 87 hours a year — 3.6 working days — reading engineering reports. Automating the extraction cut per-document review time from about 3 hours to 15 minutes — measured against real session timings in Datadog, not estimated — which works out to roughly 80 of those 87 hours saved annually, per underwriter; the rest sits with the unicorn review, by design, not as a gap the system failed to close. Reviewed-insight coverage rose 90%. The work was a 2026 National AI Awards finalist.",
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
