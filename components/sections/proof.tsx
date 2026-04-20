import { Quote } from 'lucide-react';

/* Les logos sont des placeholders textuels ; à remplacer par SVG/PNG client */
const CLIENT_LOGOS = [
  'Amazon',
  'Zancaner',
  'SOCAPS',
  'Client A',
  'Client B',
  'Client C',
  'Client D',
];

const METRICS = [
  {
    value: '8 h',
    label: 'Temps économisé par semaine',
    detail: 'Par chef de chantier, sur la production des rapports',
  },
  {
    value: '100 %',
    label: 'Des livrables automatisés',
    detail: 'Daily Report · Weekly Plan · Punch List — format client',
  },
  {
    value: '11',
    label: 'Signaux de risque détectés',
    detail: 'Par AURA AI, de CRITIQUE à BON',
  },
  {
    value: '< 24 h',
    label: 'Temps de mise en route',
    detail: 'Seed data fournie, prise en main immédiate',
  },
];

export function Proof() {
  return (
    <section className="border-t border-ink-line bg-bg">
      <div className="container-x py-24 md:py-32">
        {/* Logos marquee */}
        <div className="mb-24">
          <div className="mb-8 flex items-center justify-between border-b border-ink-line pb-4">
            <span className="blueprint-tag">§ 04 · Ils nous font confiance</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
              PME &amp; groupes industriels
            </span>
          </div>

          <div className="relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-bg to-transparent z-10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bg to-transparent z-10"
            />
            <div className="flex gap-16 animate-marquee whitespace-nowrap py-4">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
                <span
                  key={i}
                  className="font-display text-3xl font-medium tracking-tight text-ink-muted/60 hover:text-ink transition-colors"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics grid */}
        <div className="grid gap-px bg-ink-line md:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-bg p-8">
              <div className="font-display text-5xl font-medium tracking-tight text-ink">
                {m.value}
              </div>
              <div className="mt-3 font-sans text-sm font-medium text-ink">
                {m.label}
              </div>
              <div className="mt-2 font-sans text-xs leading-relaxed text-ink-muted">
                {m.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial éditorial */}
        <div className="mt-24 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-2">
            <Quote size={40} strokeWidth={1.25} className="text-accent" />
          </div>
          <blockquote className="md:col-span-8">
            <p className="font-display text-3xl leading-tight text-ink md:text-4xl">
              <em className="font-display-wonk not-italic">
                « Le dimanche soir, c’était sacré : deux heures à taper le rapport
                hebdo. Avec AURA, c’est trente secondes, et c’est mieux présenté
                que ce que je faisais à la main. »
              </em>
            </p>
            <footer className="mt-6 flex items-center gap-4">
              <div className="h-px w-12 bg-ink" />
              <div>
                <div className="font-sans text-sm font-medium text-ink">
                  Chef de chantier — Site industriel Rhône-Alpes
                </div>
                <div className="font-mono text-xs text-ink-muted">
                  Témoignage recueilli en mars 2026
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
