export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-builder-text/80">© 2026 Builder AI</div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-builder-text/80">
            <a className="hover:text-builder-text" href="/regulamin.html">
              Regulamin
            </a>
            <span aria-hidden="true" className="text-builder-text/30">
              |
            </span>
            <a
              className="hover:text-builder-text"
              href="/polityka-prywatnosci.html"
            >
              Polityka prywatności
            </a>
            <span aria-hidden="true" className="text-builder-text/30">
              |
            </span>
            <a
              className="hover:text-builder-text"
              href="mailto:kontakt@builderai.pl"
            >
              kontakt@builderai.pl
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-builder-text/60">
          Administratorem danych osobowych jest Robert Jaroszek. Dane przetwarzane
          zgodnie z RODO (UE) 2016/679.
        </p>
      </div>
    </footer>
  )
}

