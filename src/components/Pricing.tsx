const CTA_URL = 'https://app.builderai.pl/pricing' as const

const FEATURES: readonly string[] = [
  'Nielimitowane oferty',
  'PDF z logo firmy',
  'Baza polskich cen',
  'Cena zablokowana na zawsze',
] as const

type FeatureListProps = {
  tone?: 'accent' | 'paper'
}

function FeatureList({ tone = 'paper' }: FeatureListProps) {
  return (
    <ul className={tone === 'accent' ? 'mt-5 space-y-2 text-sm text-paper/90' : 'mt-5 space-y-2 text-sm text-ink/75'}>
      {FEATURES.map((f) => (
        <li key={f} className="flex gap-2">
          <span
            className={tone === 'accent' ? 'mt-0.5 text-paper' : 'mt-0.5 text-accent'}
            aria-hidden="true"
          >
            ✓
          </span>
          <span>{f}</span>
        </li>
      ))}
    </ul>
  )
}

export function Pricing() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        <article className="rounded-[2rem] bg-accent p-6 text-paper shadow-[0_24px_70px_rgba(199,84,31,0.28)] md:p-8">
          <div className="font-mono text-xs font-bold tracking-[0.12em] text-paper/80">Cena założycielska</div>
          <div className="mt-4 font-display text-5xl font-extrabold tracking-[-0.06em] md:text-6xl">
            79 zł/mies
          </div>
          <p className="mt-3 text-sm leading-relaxed text-paper/85">
            Pierwsze 100 firm — price lock na zawsze
          </p>

          <FeatureList tone="accent" />

          <a
            href={CTA_URL}
            rel="noreferrer"
            className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-ink px-5 py-3 font-display text-base font-extrabold text-paper transition hover:-translate-y-0.5 hover:bg-forest"
          >
            Zacznij teraz →
          </a>
        </article>

        <article className="rounded-[2rem] border border-ink/10 bg-white/45 p-6 text-ink shadow-[0_14px_40px_rgba(20,18,13,0.06)] md:p-8">
          <div className="font-mono text-xs font-bold tracking-[0.12em] text-ink/55">Cena normalna</div>
          <div className="mt-4 font-display text-5xl font-extrabold tracking-[-0.06em] md:text-6xl">
            149 zł/mies
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            Dla nowych użytkowników po zamknięciu 100 miejsc
          </p>

          <FeatureList />

          <a
            href={CTA_URL}
            rel="noreferrer"
            className="mt-7 inline-flex w-full items-center justify-center rounded-2xl border border-ink/15 bg-paper px-5 py-3 font-display text-base font-extrabold text-ink transition hover:border-accent hover:text-accent"
          >
            Zacznij teraz →
          </a>
        </article>
      </div>
    </section>
  )
}
