type PainCard = {
  k: '01' | '02' | '03'
  title: string
  body: string
}

const PAINS: readonly PainCard[] = [
  {
    k: '01',
    title: 'Excel się rozjeżdża',
    body: 'Liczyłeś w Excelu, wysłałeś, okazało się że zapomniałeś o materiale. Dopłaciłeś z własnej kieszeni.',
  },
  {
    k: '02',
    title: 'Wycena zajmuje 2 godziny',
    body: 'Zamiast być na budowie, siedzisz wieczorem i liczysz. Każde zlecenie od zera.',
  },
  {
    k: '03',
    title: 'Nie wiesz czy zarabiasz',
    body: 'Klient zapłacił, ale czy zostało coś po materiałach i robociźnie? Nie wiesz.',
  },
] as const

export function Pain() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {PAINS.map((p) => (
          <article
            key={p.title}
            className="rounded-3xl border border-ink/10 bg-white/35 p-6 shadow-[0_14px_40px_rgba(20,18,13,0.06)]"
          >
            <div className="font-mono text-sm font-bold tracking-[0.22em] text-accent">
              {p.k}
            </div>
            <h2 className="mt-3 font-display text-xl font-extrabold tracking-[-0.035em] text-ink">
              {p.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              {p.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
