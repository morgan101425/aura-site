import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Factory, Zap, HardHat } from 'lucide-react';
import { PageHeader } from '@/components/page-header';

export const metadata: Metadata = {
  title: 'Cas d’usage',
  description:
    'Installation de machines industrielles, chantiers logistiques, coactivité multi-corps d’état — découvrez comment AURA s’adapte à chaque configuration.',
};

const USE_CASES = [
  {
    num: '01',
    icon: Factory,
    sector: 'Industrie manufacturière',
    title: 'Installation de lignes de production',
    scope: [
      '26 machines',
      '3 corps d’état en coactivité',
      '14 semaines de montage',
    ],
    problems: [
      'Coordonner électriciens, mécaniciens et ISM sur un même plateau',
      'Produire des rapports quotidiens attendus par le client industriel',
      'Anticiper les retards de livraison de pièces critiques',
    ],
    aura: [
      'Kanban découpé par type d’intervention et par machine',
      'Daily Report généré depuis les tâches closes de la journée',
      'Portail client pour le chef de projet industriel du donneur d’ordre',
      'AURA AI détecte les déséquilibres de charge et les jalons glissants',
    ],
  },
  {
    num: '02',
    icon: Zap,
    sector: 'Logistique & entrepôts automatisés',
    title: 'Déploiement de systèmes de tri',
    scope: [
      'Site de 40 000 m²',
      '12 techniciens en rotation',
      'Fenêtre de livraison courte',
    ],
    problems: [
      'Rythme très soutenu, pas de marge pour les rapports hebdos manuels',
      'Client final qui veut tout voir en temps réel',
      'Besoin de prouver l’avancement zone par zone pour les acomptes',
    ],
    aura: [
      'Weekly Installation Plan auto-formaté, envoyé au client chaque lundi',
      'Journal photo géolocalisé par zone, preuve d’avancement claire',
      'Punch list par bâtiment, imprimable et remise en main propre',
      'Heatmap ressources pour éviter les pics de surcharge',
    ],
  },
  {
    num: '03',
    icon: HardHat,
    sector: 'BTP industriel — sites complexes',
    title: 'Chantiers multi-sociétés & coactivité',
    scope: [
      '6 sociétés intervenantes',
      'Zones interdépendantes',
      'Exigences HSE élevées',
    ],
    problems: [
      'Qui fait quoi, quand, où — et qui bloque qui',
      'Punch lists qui traînent des mois après la réception',
      'Besoin d’une source unique de vérité pour les comités chantier',
    ],
    aura: [
      'Planning Gantt avec détection des conflits de zone',
      'Roadmap V1.1 : import DWG→PDF, annotation des zones et conflits',
      'Punch list structurée par bâtiment et par corps d’état',
      'Portail client unique pour tous les donneurs d’ordre',
    ],
  },
];

export default function CasUsagePage() {
  return (
    <>
      <PageHeader
        eyebrow="§ Cas d’usage · Terrain"
        title="AURA, sur"
        titleAccent="vos chantiers."
        lede="Trois configurations qu’on rencontre tous les jours. AURA s’adapte à chacune — pas l’inverse."
      />

      <section className="bg-bg">
        <div className="container-x py-20 md:py-28">
          <div className="space-y-20">
            {USE_CASES.map((uc) => (
              <UseCaseCard key={uc.num} useCase={uc} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink-line bg-bg-raised">
        <div className="container-x py-20">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="font-display text-display-2 font-medium tracking-tight">
                Votre chantier ne rentre dans aucune de ces cases ?{' '}
                <em className="font-display-wonk not-italic text-accent">
                  Parlons-en.
                </em>
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:pt-6">
              <Link href="/contact" className="btn-primary">
                Nous contacter
                <ArrowUpRight size={16} strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function UseCaseCard({ useCase }: { useCase: (typeof USE_CASES)[number] }) {
  const { icon: Icon, num, sector, title, scope, problems, aura } = useCase;
  return (
    <article className="border border-ink-line bg-bg-raised">
      {/* Header bar */}
      <header className="grid grid-cols-12 border-b border-ink-line">
        <div className="col-span-12 md:col-span-8 border-b border-ink-line p-6 md:border-b-0 md:border-r">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
              Cas / {num}
            </span>
            <span className="h-px w-8 bg-ink-line" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              {sector}
            </span>
          </div>
          <h3 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
            {title}
          </h3>
        </div>
        <div className="col-span-12 md:col-span-4 p-6 md:flex md:items-center md:justify-center">
          <Icon size={48} strokeWidth={1} className="text-accent" />
        </div>
      </header>

      {/* Body */}
      <div className="grid grid-cols-12">
        {/* Scope */}
        <div className="col-span-12 border-b border-ink-line p-6 md:col-span-3 md:border-b-0 md:border-r">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
            Périmètre
          </div>
          <ul className="mt-4 space-y-2">
            {scope.map((s, i) => (
              <li
                key={i}
                className="font-sans text-sm text-ink border-b border-ink-line/50 pb-2 last:border-b-0 last:pb-0"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Problèmes */}
        <div className="col-span-12 border-b border-ink-line p-6 md:col-span-4 md:border-b-0 md:border-r">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
            Problèmes rencontrés
          </div>
          <ul className="mt-4 space-y-3">
            {problems.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-2 h-px w-3 flex-shrink-0 bg-ink-muted" />
                <span className="font-sans text-sm leading-relaxed text-ink-soft">
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* AURA apporte */}
        <div className="col-span-12 p-6 md:col-span-5 bg-accent/[0.04]">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            Ce qu’AURA apporte
          </div>
          <ul className="mt-4 space-y-3">
            {aura.map((a, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-2 h-px w-3 flex-shrink-0 bg-accent" />
                <span className="font-sans text-sm leading-relaxed text-ink">
                  {a}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
