type PainCard = {
  icon: string
  title: string
  body: string
}

const PAINS: readonly PainCard[] = [
  {
    icon: '📊',
    title: 'Excel się rozjeżdża',
    body: 'Liczyłeś w Excelu, wysłałeś, okazało się że zapomniałeś o materiale. Dopłaciłeś z własnej kieszeni.',
  },
  {
    icon: '⏰',
    title: 'Wycena zajmuje 2 godziny',
    body: 'Zamiast być na budowie, siedzisz wieczorem i liczysz. Każde zlecenie od zera.',
  },
  {
    icon: '❓',
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
            className="rounded-2xl bg-builder-elevated/35 p-6 ring-1 ring-white/10"
          >
            <div className="text-2xl" aria-hidden="true">
              {p.icon}
            </div>
            <h2 className="mt-3 text-lg font-semibold tracking-tight">
              {p.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-builder-text/80">
              {p.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

