const CTA_URL = 'https://app.builderai.pl' as const

const PLACES_LEFT = 97 as const

export function Hero() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto w-full max-w-6xl px-4 py-5 md:px-6">
        <nav className="flex items-center justify-between">
          <div className="text-base font-semibold tracking-tight md:text-lg">
            <span aria-hidden="true">🏗️</span> Builder AI
          </div>

          <a
            href={CTA_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-builder-text ring-1 ring-white/10 hover:bg-white/15"
          >
            Zaloguj się
          </a>
        </nav>

        <div className="py-12 md:py-18">
          <div className="max-w-2xl">
            <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Wyceny i oferty które wygrywają zlecenia
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-builder-text/80 md:text-lg">
              W 5 minut, z marżą, bez Excela. Dla ekip remontowych 1–5 osób.
            </p>

            <div className="mt-7 flex flex-col items-start gap-3">
              <a
                href={CTA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-builder-coral px-5 py-3 text-base font-semibold text-builder-dark shadow-sm shadow-black/30 hover:brightness-110 sm:w-auto"
              >
                Zacznij za darmo →
              </a>

              <div className="text-sm font-medium text-builder-text/80">
                🔥 Pozostało{' '}
                <span className="font-semibold text-builder-text">
                  {PLACES_LEFT}
                </span>{' '}
                miejsc po 79 zł/mies
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

