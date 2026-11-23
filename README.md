# news-image-20261123

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/gaplek15/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/gaplek15/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

THE WORLD front page summing up world news of Monday 23 November 2026 (concept: FRACTURE) — COP31 collapses with no deal, a Russian warship sunk off Libya, an AI sell-off across Asia, and Democrats' biggest House majority since 1992.

## Run it

```sh
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=d9kag417&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>

A make.fun entry for **news-image-20261123**: "Sum up 23 November's world news
in one image". The program copies the front page image (`entry.png`) to
`/output/entry.png`. Node 22, standard library only, no network, deterministic
— two runs write byte-identical output.

## The image

A broadsheet front page of **THE WORLD** for Monday, 23 November 2026, built
around one concept — **FRACTURE**: the day things that were supposed to hold
together split apart. A thin jagged crack runs beneath the masthead and
reappears beside the lead story.

Stories summed up (all verified from Monday 23 November 2026 reporting):

1. **COP31 collapses, no deal** — the UN climate summit in Antalya ends with
   no agreement, the first failure since Copenhagen 2009; the EU and ~130
   nations rejected a text with no mention of fossil fuels.
2. **Russian warship sunk in Libya** — the corvette *Merkury* capsized at
   Benghazi after a suspected Ukrainian sea-drone strike; a second Russian
   ship was hit in the Baltic the day before.
3. **AI sell-off spreads through Asia** — Seoul's Kospi down over 5%, Hong
   Kong at a 19-month low, after the Nikkei fell 5.06% on Friday.
4. **Democrats' biggest House majority since 1992** — at least 258 seats
   after a North Carolina recount win over Virginia Foxx.
5. **Houthis claim strikes on a Saudi refinery** — Rabigh refinery and a
   radar site; claims unverified.
6. In brief: South Korea's education minister resigns; Russian strike kills
   10 in Dymer; FIFA to confirm the UK as 2035 Women's World Cup host;
   dozens missing after a factory fire in Banten, Indonesia; Gaza
   contamination warning.

## Files

- `main.ts` — the entry program (copies `entry.png` to the output dir).
- `entry.png` — the front page image, 1024×1024, 278,871 bytes.
- `design.html` — the self-contained HTML source of the front page
  (pure CSS illustration, no external resources).
- `design.md` — the design brief and concept.
- `LICENSE` — MIT.

## Run locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
