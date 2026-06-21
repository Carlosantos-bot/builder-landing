type PainCard = {
  k: '01' | '02' | '03'
  title: string
  body: string
}

function ProfitUnknownChart() {
  return (
    <svg
      viewBox="0 0 680 300"
      className="mt-4 block min-h-[220px] w-full"
      role="img"
      aria-label="Podział przychodu: materiały 38%, robocizna 29%, inne koszty 21%, zysk nieznany"
    >
      <rect width="680" height="300" rx="8" fill="#F2EDE3" />
      <g fill="none" strokeWidth="46" transform="rotate(-90 150 150)">
        <path d="M 150 72 A 78 78 0 0 1 203.4 206.9" stroke="#C7541F" />
        <path d="M 203.4 206.9 A 78 78 0 0 1 81.6 187.6" stroke="#2C3A2E" />
        <path d="M 81.6 187.6 A 78 78 0 0 1 96.6 93.1" stroke="#2C3A2E" opacity="0.56" />
        <path
          d="M 96.6 93.1 A 78 78 0 0 1 150 72"
          stroke="#2C3A2E"
          strokeDasharray="5 7"
          opacity="0.12"
        />
      </g>
      <circle cx="150" cy="150" r="54" fill="#F2EDE3" />
      <text x="150" y="169" textAnchor="middle" fill="#14120D" fontSize="68" fontWeight="800">
        ?
      </text>
      <g fontFamily="Inter, system-ui, sans-serif" fill="#14120D">
        <text x="304" y="58" fontSize="30" fontWeight="800">
          Podział przychodu
        </text>
        <g fontSize="30">
          <circle cx="314" cy="96" r="9" fill="#C7541F" />
          <text x="340" y="104">Materiały 38%</text>
          <circle cx="314" cy="133" r="9" fill="#2C3A2E" />
          <text x="340" y="141">Robocizna 29%</text>
          <circle cx="314" cy="170" r="9" fill="#2C3A2E" opacity="0.56" />
          <text x="340" y="178">Inne koszty 21%</text>
          <circle cx="314" cy="207" r="9" fill="#2C3A2E" opacity="0.12" />
          <text x="340" y="215">Zysk — ???</text>
        </g>
        <text x="304" y="256" fontSize="23" fontWeight="700">
          <tspan x="304" dy="0">Klient zapłacił 18 500 zł.</tspan>
          <tspan x="304" dy="28">Ile zostało? Nie wiesz.</tspan>
        </text>
      </g>
    </svg>
  )
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
        className="mx-auto mt-4 block w-full max-w-[260px] rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
        loading="lazy"
      />
    )
  }

  return <ProfitUnknownChart />
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
            <PainVisual id={p.k} />
          </article>
        ))}
      </div>
    </section>
  )
}
