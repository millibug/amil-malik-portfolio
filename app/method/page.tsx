"use client";

import { useState } from "react";

export default function MethodPage() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="mx-auto max-w-3xl px-12 py-16">
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted">Method</p>
      <h1 className="font-display text-3xl">
        Cognitive Task Analysis, demonstrated, not defined.
      </h1>
      <p className="mt-2 max-w-xl text-muted">
        One worked example above the fold, then the drill below. The
        walkthrough is still a placeholder; the drill mechanic is real and
        works end to end.
      </p>

      <div className="mt-8 flex h-56 items-center justify-center rounded border border-dashed border-muted/50 text-sm text-muted">
        [ worked example: one real decision point, cue → judgement →
        decision → interface ]
      </div>

      <div className="mt-14 rounded-lg border border-hairline p-8">
        <p className="mb-5 text-xs font-bold uppercase tracking-widest text-muted">
          Try it — &ldquo;why that, not this&rdquo;
        </p>

        {revealed ? (
          <div className="flex flex-col gap-3 text-sm">
            <h2 className="font-display text-xl">
              What I actually said, and what held up
            </h2>
            <p>
              <b>What I said in the interview:</b> [ pulled from the real
              transcript, once the transcript-CTA pass is done ]
            </p>
            <p>
              <b>What the transcript shows they were really weighing:</b> [
              the cue, named plainly ]
            </p>
            <p>
              <b>What I&rsquo;d say now:</b> [ honest, including &ldquo;that&rsquo;s
              an aim, not a measured result&rdquo; where true ]
            </p>
            <button
              onClick={() => setRevealed(false)}
              className="mt-2 w-fit rounded border border-ink px-4 py-2 text-sm"
            >
              ↺ Try again
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4 text-sm">
            <p className="text-muted">
              [ the real context a panel or a user was in, and the one cue
              available at that moment ]
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setRevealed(true)}
                className="rounded bg-ink px-4 py-2 text-sm text-paper"
              >
                Option A — [ commit to this ]
              </button>
              <button
                onClick={() => setRevealed(true)}
                className="rounded border border-ink px-4 py-2 text-sm"
              >
                Option B — [ or this ]
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
