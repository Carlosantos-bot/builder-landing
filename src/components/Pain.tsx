type PainCard = {
  k: '01' | '02' | '03'
  title: string
  body: string
}

function PainVisual({ id }: { id: PainCard['k'] }) {
  if (id === '01') {
    return (
      <img
        src="/screenshots/excel-chaos.png"
        alt=""
        className="mt-4 block w-full max-w-full rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
        loading="lazy"
      />
    )
  }

  if (id === '02') {
    return (
      <img
        src="/screenshots/zegar.png"
        alt=""
        className="mt-4 block max-h-[160px] w-full rounded-lg object-cover object-top shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
        loading="lazy"
      />
    )
  }

  return (
    <>
      <img
        src="/screenshots/word-chaos.png"
        alt=""
        className="mt-4 block w-full rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
        loading="lazy"
      />
      <p className="mt-2 text-[13px] italic text-[#C0392B]">
        Twoja oferta wygląda jak coś zrobionego w 5 minut. Klient wybiera kogoś innego.
      </p>
    </>
  )
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
            <div className="font-mono text-sm font-bold tracking-[0.22em] text-[#C0392B]">
              {p.k}
            </div>
            <h2 className="mt-3 font-display text-xl font-extrabold tracking-[-0.035em] text-ink">
              {p.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              {p.body}
            </p>
            <PainVisual id={p.k} />
          </article>
        ))}
      </div>
    </section>
  )
}
