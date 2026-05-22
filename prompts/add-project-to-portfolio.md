# Add a finished project to the portfolio

Paste the prompt below into Claude Code **inside the finished project's repo**.
It inspects that repo, drafts a `Project` object for this portfolio, and asks
you only what it can't infer. Bring the final object back here and say
"add this project".

---

I want to add this project to my personal portfolio site. My portfolio renders
each project from a `Project` object with this exact TypeScript shape:

    interface Project {
      title: string;            // project name
      description: string;      // one-line summary shown on the card
      imageUrl: string;         // icon/cover image — a URL, or leave '' if none
      demoUrl?: string;         // live demo / App Store / deployed link — omit if none
      repoUrl?: string;         // public repo URL — omit entirely if private or none
      technologies: string[];   // stack/tools, e.g. ['React', 'TypeScript', 'Firebase']
      fullDescription: string;  // 2-3 sentence paragraph for the detail modal
      problem?: string;         // what real problem this solves / who it's for
      role?: string;            // my role, e.g. 'Solo developer — design, build, release.'
      built?: string;           // what was actually built, technically
      learned?: string;         // what I learned / hard-won lessons
      challenges: string;       // the hardest technical problem(s)
      solutions: string;        // how I solved them
      screenshots?: string[];   // omit — I'll add these manually later
    }

Your job:

1. Inspect THIS repo — README, package.json / pubspec.yaml / equivalent, source
   structure, git history, config — and infer every field you reasonably can.
2. Be honest: only fill a field from real evidence in the code. Don't invent
   features, metrics, or a polished marketing tone.
3. For anything you genuinely cannot determine from the repo (live demo URL,
   whether the repo is public, my role if ambiguous, design intent, lessons
   learned), ASK ME a short numbered list of questions instead of guessing.
4. After I answer, output ONE final `Project` object literal, fully populated,
   that I can paste straight into the `projects` array in my portfolio's
   Projects.tsx. Omit optional fields I have no value for (don't use '#' or ''
   placeholders for URLs — just leave the field out).

Start by giving me the draft + your questions.
