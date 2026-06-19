type Step = {
  k: '01' | '02' | '03'
  title: string
  body: string
  image?: {
    src: string
    alt: string
  }
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
    image: {
      src: '/screenshots/01-kosztorys-wewnetrzny-marza.png',
      alt: 'Widok kosztorysu wewnętrznego z marżą',
    },
    body: 'Ceny materiałów i robocizny. Marża widoczna od razu.',
  },
  {
    k: '03',
    title: 'Oferta PDF do klienta',
    image: {
      src: '/screenshots/02-oferta-klienta-bez-marzy.png',
      alt: 'Widok oferty klienta bez marży',
    },
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
            className="rounded-3xl border border-ink/10 bg-white/45 p-6 shadow-[0_14px_40px_rgba(20,18,13,0.06)]"
          >
            <div className="font-mono text-sm font-bold tracking-[0.22em] text-accent">
              {s.k}
            </div>
            <h2 className="mt-3 font-display text-xl font-extrabold tracking-[-0.035em] text-ink">
              {s.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              {s.body}
            </p>
            {s.image ? (
              <img
                src={s.image.src}
                alt={s.image.alt}
                className="mt-5 block max-w-full rounded-2xl border border-ink/10 shadow-[0_12px_32px_rgba(20,18,13,0.08)]"
                loading="lazy"
              />
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
