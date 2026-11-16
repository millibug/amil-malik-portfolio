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
    slug: "insight-analysis-app",
    title: "Insight Analysis App",
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
        body: "The service watches a shared inbox for incoming surveyor reports, extracts and summarises each one, routes the summary to the unicorn reviewer for sign-off, pushes the cleared version into Launchpad, and notifies the underwriter by Slack the moment it's ready. Every extraction kept its source — underwriters could drill from the summary back into the original document rather than take it on faith. That mattered more than expected: once underwriters trusted the standalone service enough, we folded it directly into Launchpad, and usage of the standalone tool dropped off on its own as people simply stopped needing to leave the workbench. A later iteration layered in online news sources for a fuller risk picture, and pulled structured third-party data — S&P filings, for instance — to flag where a client's own submission didn't match. [ screens: pending a confidentiality check against Convex's IP before publishing ]",
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
    dek: "One workbench replacing five separate tools. ~100 underwriters a day.",
    status: "written",
    priority: 2,
    stats: [
      { value: "5 → 1", label: "tools replaced by one workbench" },
      { value: "~100", label: "underwriters using it daily" },
    ],
    sections: [
      {
        heading: "Context",
        body: "Underwriters at Convex worked across five separate applications just to do their daily job — switching between them to piece together a submission's full picture before they could make a call. That fragmentation didn't only cost the underwriter time: it was the broker on the other end who felt it, waiting longer for a quote while the underwriter assembled the picture app by app.",
      },
      {
        heading: "Where the judgement actually lived",
        body: "A service blueprint of the underwriting journey, mapped with the Head of Product, showed the friction wasn't any one tool being bad — it was the switching between them breaking the one judgement call that mattered most: deciding fast whether a submission was worth deeper investment before reading it in full. Experienced underwriters made that call by checking how a submission benchmarked against comparable risks first; a less experienced underwriter worked the submission top to bottom and reached the same answer much later. That's the decision point the workbench needed to support directly, not bury behind a fifth login.",
      },
      {
        heading: "The decision I made",
        body: "The easier path was to integrate the five existing tools better — quicker to ship, and the path of least resistance for underwriters who already knew those interfaces. Instead, with the Head of Product, I set the UX vision around one new workbench built for the broker's turnaround time, not underwriter familiarity. That traded a harder migration — underwriters relearning a workflow mid-project — for a single information hierarchy built around the sequence that actually mattered: benchmark position first, full submission detail second, rather than five screens each optimised for its own job and none optimised for the decision underwriters were actually making.",
      },
      {
        heading: "What shipped",
        body: "Launchpad shipped as three core views: Benchmarking, so an underwriter can triage a submission against comparable risks at a glance before going deeper; Sub-Detail, the full submission view for risks worth the time; and Summary, which strips the workflow down to a clear information hierarchy instead of a dump of every field. [ screens: pending a confidentiality check against Convex's IP before publishing ]",
      },
      {
        heading: "Outcome",
        body: "Launchpad replaced five separate tools with one, and is used by around 100 underwriters a day. Co-creation sessions and design thinking workshops with underwriters drove adoption and shaped specific feature and interface changes that created real workflow efficiencies. Bringing the engineering lead into those same workshops, with weekly catchups to review the design process, kept engineering effort pointed at what underwriters actually needed rather than rebuilt after the fact.",
      },
      {
        heading: "What I'd do differently",
        body: "Benchmarking made the \"is this worth deeper investment\" call fast. The harder goal behind the project — getting underwriters thinking at a portfolio level, not just submission by submission — landed less completely; an interface can make one decision easy without changing the frame someone brings to the next one. I'd push further on that second goal specifically if I did this again.",
      },
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
