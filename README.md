# Amil Malik — portfolio rebuild

Next.js + TypeScript + Tailwind, per the rebuild plan. Built in Claude Code.

## Status

Scaffold only. All copy is placeholder (see `content/caseStudies.ts`) —
real content gets written per the plan's phasing, then swapped in without
touching any page component.

- Design tokens: `tailwind.config.ts`
- Wordmark / brand: `components/Wordmark.tsx`
- Pages: Home, Work, one dynamic case-study route (`/work/[slug]`), Method
  (with a working "why that, not this" drill), About
- `docintel` is the only case study marked `status: "written"` (page live,
  copy still placeholder) — the other three stay unlinked until built

## Run locally

```
npm install
npm run dev
```
