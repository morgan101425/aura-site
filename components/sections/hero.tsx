import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Grille blueprint décorative */}
      <div
        aria-hidden
        className="absolute inset-0 bg-blueprint-grid bg-grid-md opacity-60"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/60 to-bg"
      />

      <div className="container-x relative pt-20 pb-28 md:pt-28 md:pb-36">
        {/* Header meta — style blueprint */}
        <div className="flex items-center justify-between border-b border-ink-line pb-4 animate-fade-in">
          <span className="blueprint-tag">AURA · Édition 2026</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
            § 01 / Accueil
          </span>
        </div>

        {/* Headline */}
        <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <h1 className="font-display text-display-1 font-medium text-ink animate-fade-up">
              La supervision<br />
              de chantier industriel,<br />
              <span className="italic font-display-wonk text-accent">
                enfin au niveau.
              </span>
            </h1>
          </div>

          <div className="md:col-span-4 md:pt-4 animate-fade-up [animation-delay:200ms]">
            <p className="font-sans text-lg leading-relaxed text-ink-soft">
              AURA remplace vos tableurs éparpillés, vos WhatsApp
              interminables et vos rapports du dimanche soir.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-ink-muted">
              Un seul outil pour piloter l’installation de machines industrielles,
              coordonner les équipes et produire les livrables attendus par
              vos clients — en temps réel.
            </p>
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-14 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:400ms]">
          <Link href="/demander-demo" className="btn-primary">
            Demander une démo
            <ArrowUpRight size={16} strokeWidth={1.75} />
          </Link>
          <Link href="/fonctionnalites" className="btn-secondary">
            Explorer les fonctionnalités
          </Link>
          <span className="ml-2 font-mono text-xs text-ink-muted">
            · Démo prête en 24&nbsp;h
          </span>
        </div>

        {/* Mockup ligne — écran principal simulé */}
        <div className="mt-24 animate-fade-up [animation-delay:600ms]">
          <ProductMockup />
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------
   Mockup produit — SVG inline, zéro dépendance, aesthetic dashboard
   -------------------------------------------------------------------------- */

function ProductMockup() {
  return (
    <div className="relative">
      {/* Annotation blueprint dessus */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
            Interface AURA — Chantier DPF1 / Projet 26004
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
          Vue · Dashboard
        </span>
      </div>

      <div className="relative rounded-sm border border-ink bg-bg-raised shadow-[0_30px_60px_-30px_rgba(26,24,21,0.25)]">
        {/* Fake browser chrome */}
        <div className="flex items-center justify-between border-b border-ink-line px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
          </div>
          <span className="font-mono text-[11px] text-ink-muted">
            aura.app · Chantier DPF1
          </span>
          <span className="w-12" />
        </div>

        {/* Dashboard preview */}
        <div className="grid grid-cols-12 gap-4 p-5">
          {/* KPIs */}
          <div className="col-span-12 grid grid-cols-4 gap-3">
            {KPIS.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-sm border border-ink-line bg-bg p-4"
              >
                <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink-muted">
                  {kpi.label}
                </div>
                <div className="mt-2 font-display text-2xl font-medium text-ink">
                  {kpi.value}
                </div>
                <div className="mt-1 font-sans text-[11px] text-ink-soft">
                  {kpi.delta}
                </div>
              </div>
            ))}
          </div>

          {/* Gantt + Kanban mini */}
          <div className="col-span-12 md:col-span-8 rounded-sm border border-ink-line bg-bg p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-muted">
                Planning · Gantt
              </span>
              <span className="font-mono text-[10px] text-ink-muted">S14 — S18</span>
            </div>
            <div className="mt-4 space-y-2">
              {GANTT_ROWS.map((row, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-28 truncate font-sans text-[11px] text-ink-soft">
                    {row.task}
                  </span>
                  <div className="relative flex-1 h-5 bg-bg-raised rounded-[2px]">
                    <div
                      className="absolute h-full rounded-[2px]"
                      style={{
                        left: `${row.start}%`,
                        width: `${row.width}%`,
                        backgroundColor: row.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 rounded-sm border border-ink-line bg-bg p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-muted">
                Daily Briefing
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            </div>
            <div className="mt-4 space-y-3">
              {BRIEFING.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span
                    className={`mt-1.5 h-1.5 w-1.5 rounded-full ${item.dot}`}
                  />
                  <div>
                    <div className="font-sans text-[11px] text-ink">
                      {item.title}
                    </div>
                    <div className="font-mono text-[9px] text-ink-muted">
                      {item.meta}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dimension annotation sous le mockup */}
      <div className="mt-3 flex items-center justify-between">
        <span className="font-mono text-[10px] text-ink-muted">
          ↳ Vue principale · 1440 × 900
        </span>
        <span className="font-mono text-[10px] text-ink-muted">
          Screen 01 / 12
        </span>
      </div>
    </div>
  );
}

const KPIS = [
  { label: 'Avancement', value: '68 %', delta: '+4 % vs S-1' },
  { label: 'Heures / jour ouvré', value: '42 h', delta: '3 équipes' },
  { label: 'Tâches critiques', value: '7', delta: '2 en alerte' },
  { label: 'Risque planning', value: 'Maîtrisé', delta: 'AURA AI' },
];

const GANTT_ROWS = [
  { task: 'Raccord. élec.', start: 0, width: 35, color: '#1A1815' },
  { task: 'Mont. mécanique', start: 12, width: 48, color: '#E55A1F' },
  { task: 'Mise en service', start: 55, width: 28, color: '#1A1815' },
  { task: 'Contrôles ISM', start: 70, width: 22, color: '#3D3A34' },
  { task: 'Réception', start: 85, width: 12, color: '#E55A1F' },
];

const BRIEFING = [
  {
    title: 'Coactivité élec./méca. — zone B',
    meta: '09:30 · 2 équipes',
    dot: 'bg-accent',
  },
  {
    title: 'Livraison M-204 confirmée',
    meta: '11:00 · logistique',
    dot: 'bg-ink',
  },
  {
    title: 'Contrôle ISM à planifier',
    meta: 'Cette semaine',
    dot: 'bg-ink-soft',
  },
];
