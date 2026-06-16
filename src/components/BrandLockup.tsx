type BrandLockupProps = {
  tone?: 'light' | 'dark'
}

export function BrandLockup({ tone = 'light' }: BrandLockupProps) {
  return (
    <span className="flex items-center gap-2 font-display" aria-label="Builder">
      <span className="flex h-7 w-7 items-center justify-center rounded-[7px] bg-accent text-base font-extrabold leading-none text-paper">
        B
      </span>
      <span
        className={
          tone === 'dark'
            ? 'text-lg font-bold tracking-[-0.035em] text-paper'
            : 'text-lg font-bold tracking-[-0.035em] text-ink'
        }
      >
        Builder
      </span>
    </span>
  )
}
