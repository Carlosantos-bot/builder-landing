import { BrandLockup } from './BrandLockup'

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <BrandLockup />
            <div className="font-mono text-xs font-semibold tracking-[0.08em] text-ink/55">
              © 2026 Builder
            </div>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs font-semibold tracking-[0.08em] text-ink/60">
            <a className="transition hover:text-accent" href="/regulamin.html">
              Regulamin
            </a>
            <span aria-hidden="true" className="text-ink/25">
              |
            </span>
            <a
              className="transition hover:text-accent"
              href="/polityka-prywatnosci.html"
            >
              Polityka prywatności
            </a>
            <span aria-hidden="true" className="text-ink/25">
              |
            </span>
            <a
              className="transition hover:text-accent"
              href="mailto:kontakt@builderai.pl"
            >
              kontakt@builderai.pl
            </a>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink/55">
          Administratorem danych osobowych jest Robert Jaroszek. Dane przetwarzane
          zgodnie z RODO (UE) 2016/679.
        </p>
      </div>
    </footer>
  )
}
