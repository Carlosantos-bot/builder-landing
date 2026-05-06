const CTA_URL = 'https://app.builderai.pl/pricing' as const

const FEATURES: readonly string[] = [
  'Nielimitowane oferty',
  'PDF z logo firmy',
  'Baza polskich cen',
  'Cena zablokowana na zawsze',
] as const

function FeatureList() {
  return (
    <ul className="mt-4 space-y-2 text-sm text-builder-text/85">
      {FEATURES.map((f) => (
        <li key={f} className="flex gap-2">
          <span className="mt-0.5 text-builder-coral" aria-hidden="true">
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
        <article className="rounded-2xl bg-builder-coral p-6 text-builder-dark shadow-sm shadow-black/30">
          <div className="text-sm font-semibold">Cena założycielska 🔒</div>
          <div className="mt-3 text-4xl font-semibold tracking-tight">
            79 zł/mies
          </div>
          <p className="mt-2 text-sm/relaxed text-builder-dark/80">
            Pierwsze 100 firm — price lock na zawsze
          </p>

          <FeatureList />

          <a
            href={CTA_URL}
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-builder-dark px-5 py-3 text-base font-semibold text-builder-text hover:brightness-110"
          >
            Zacznij teraz →
          </a>
        </article>

        <article className="rounded-2xl bg-builder-elevated/30 p-6 ring-1 ring-white/10">
          <div className="text-sm font-semibold">Cena normalna</div>
          <div className="mt-3 text-4xl font-semibold tracking-tight">
            149 zł/mies
          </div>
          <p className="mt-2 text-sm/relaxed text-builder-text/80">
            Dla nowych użytkowników po zamknięciu 100 miejsc
          </p>

          <FeatureList />

          <a
            href={CTA_URL}
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white/5 px-5 py-3 text-base font-semibold text-builder-text ring-1 ring-white/15 hover:bg-white/10 hover:ring-white/25"
          >
            Zacznij teraz →
          </a>
        </article>
      </div>
    </section>
  )
}

