interface PageHeaderProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  lede: string;
}

export function PageHeader({
  eyebrow,
  title,
  titleAccent,
  lede,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink-line">
      <div
        aria-hidden
        className="absolute inset-0 bg-blueprint-grid bg-grid-md opacity-50"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/60 to-bg"
      />

      <div className="container-x relative pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="flex items-center justify-between border-b border-ink-line pb-4">
          <span className="blueprint-tag">{eyebrow}</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
            AURA
          </span>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <h1 className="md:col-span-8 font-display text-display-1 font-medium tracking-tight text-ink">
            {title}
            {titleAccent && (
              <>
                <br />
                <em className="font-display-wonk not-italic text-accent">
                  {titleAccent}
                </em>
              </>
            )}
          </h1>
          <p className="md:col-span-4 md:pt-4 font-sans text-lg leading-relaxed text-ink-soft">
            {lede}
          </p>
        </div>
      </div>
    </section>
  );
}
