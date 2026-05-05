type Step = {
  k: '01' | '02' | '03'
  title: string
  body: string
}

const STEPS: readonly Step[] = [
  {
    k: '01',
    title: 'Wybierz typ prac i zakres',
    body: 'Malowanie, tynki, płytki, instalacje. Baza polskich cen gotowa.',
  },
  {
    k: '02',
    title: 'Kosztorys w 2 minuty',
    body: 'Ceny materiałów i robocizny. Marża widoczna od razu.',
  },
  {
    k: '03',
    title: 'Oferta PDF do klienta',
    body: 'Profesjonalny dokument jednym kliknięciem. Klient dostaje PDF.',
  },
] as const

export function Product() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-12 md:px-6 md:pb-16">
      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {STEPS.map((s) => (
          <article
            key={s.k}
            className="rounded-2xl bg-builder-elevated/25 p-6 ring-1 ring-white/10"
          >
            <div className="text-sm font-semibold tracking-widest text-builder-text/70">
              {s.k}
            </div>
            <h2 className="mt-2 text-lg font-semibold tracking-tight">
              {s.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-builder-text/80">
              {s.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

