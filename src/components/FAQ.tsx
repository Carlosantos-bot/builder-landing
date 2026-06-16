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
    a: 'Tak. Builder działa na każdym urządzeniu — telefon, tablet, komputer.',
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
    <section className="mx-auto w-full max-w-3xl px-4 pb-14 md:px-6 md:pb-20">
      <h2 className="font-display text-3xl font-extrabold tracking-[-0.045em] text-ink md:text-4xl">FAQ</h2>

      <div className="mt-6 space-y-3">
        {ITEMS.map((item) => (
          <details
            key={item.q}
            className="group rounded-3xl border border-ink/10 bg-white/35 p-5 shadow-[0_14px_40px_rgba(20,18,13,0.06)] transition open:border-accent/35 open:bg-white/55"
          >
            <summary className="cursor-pointer list-none select-none font-display text-base font-bold tracking-[-0.02em] text-ink">
              <div className="flex items-center justify-between gap-4">
                <span>{item.q}</span>
                <span
                  className="font-mono text-lg text-accent transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </div>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}
