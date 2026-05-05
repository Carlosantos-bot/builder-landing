type FaqItem = {
  q: string
  a: string
}

const ITEMS: readonly FaqItem[] = [
  {
    q: 'Czy mogę anulować w dowolnym momencie?',
    a: 'Tak, bez długich umów. Anulujesz kiedy chcesz.',
  },
  {
    q: 'Czy moje dane są bezpieczne?',
    a: 'Tak. Szyfrowanie SSL, serwery w UE, zgodność z RODO.',
  },
  {
    q: 'Czy działa na telefonie?',
    a: 'Tak. Builder AI działa na każdym urządzeniu — telefon, tablet, komputer.',
  },
  {
    q: 'Czym różni się od Excela?',
    a: 'Masz gotową bazę polskich cen, automatyczną marżę i profesjonalny PDF. Excel tego nie robi.',
  },
  {
    q: 'Co jeśli skończy się 100 miejsc?',
    a: 'Cena wzrośnie do 149 zł dla nowych. Twoja cena 79 zł jest zablokowana na zawsze.',
  },
] as const

export function FAQ() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 pb-12 md:px-6 md:pb-16">
      <h2 className="text-xl font-semibold tracking-tight md:text-2xl">FAQ</h2>

      <div className="mt-4 space-y-3">
        {ITEMS.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl bg-builder-elevated/20 p-5 ring-1 ring-white/10"
          >
            <summary className="cursor-pointer list-none select-none text-base font-semibold tracking-tight">
              <div className="flex items-center justify-between gap-4">
                <span>{item.q}</span>
                <span
                  className="text-builder-text/70 transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </div>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-builder-text/80">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}

