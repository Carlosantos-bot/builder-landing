import { useEffect, useState } from 'react'
import { BrandLockup } from './BrandLockup'
import { supabaseClient } from '../supabaseClient'

const CTA_URL = 'https://app.builderai.pl' as const
const FALLBACK_PLACES_LEFT = 97 as const

export function Hero() {
  const [placesLeft, setPlacesLeft] = useState<number | null>(null)

  useEffect(() => {
    let cancelled = false
    void (async () => {
      try {
        const { data, error } = await supabaseClient.rpc('get_founders_count')
        if (cancelled) return
        if (error) {
          setPlacesLeft(FALLBACK_PLACES_LEFT)
          return
        }
        const count = typeof data === 'number' ? data : 0
        setPlacesLeft(100 - count)
      } catch {
        if (!cancelled) setPlacesLeft(FALLBACK_PLACES_LEFT)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <header className="border-b border-ink/10 bg-paper">
      <div className="mx-auto w-full max-w-6xl px-4 py-5 md:px-6">
        <nav className="flex items-center justify-between gap-4">
          <BrandLockup />

          <a
            href={CTA_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-ink/15 bg-paper px-4 py-2 font-display text-sm font-bold text-ink shadow-[0_1px_0_rgba(20,18,13,0.12)] transition hover:border-accent hover:text-accent"
          >
            Zaloguj się
          </a>
        </nav>

        <div className="py-14 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-balance font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.055em] text-ink md:text-7xl">
              Wyceny i oferty które wygrywają zlecenia
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink/70 md:text-xl">
              W 5 minut, z marżą, bez Excela. Dla ekip remontowych 1–5 osób.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href={CTA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-accent px-6 py-3.5 font-display text-base font-extrabold text-paper shadow-[0_16px_36px_rgba(199,84,31,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(199,84,31,0.3)] sm:w-auto"
              >
                Zacznij za darmo →
              </a>

              {placesLeft !== null ? (
                <div className="font-mono text-xs font-semibold tracking-[0.08em] text-ink/60">
                  Pozostało{' '}
                  <span className="text-accent">
                    {placesLeft}
                  </span>{' '}
                  miejsc po 79 zł/mies
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
