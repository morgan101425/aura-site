import type { Metadata } from 'next';
import Link from 'next/link';
import {
  LayoutGrid,
  GanttChart,
  FileText,
  Brain,
  Users,
  Camera,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import { PageHeader } from '@/components/page-header';

export const metadata: Metadata = {
  title: 'Fonctionnalités',
  description:
    'Kanban, Gantt, rapports automatisés, IA d’analyse, portail client — découvrez chaque module d’AURA en détail.',
};

interface FeatureDetail {
  num: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  bullets: string[];
  hint: string;
}

const FEATURES: FeatureDetail[] = [
  {
    num: '01',
    icon: LayoutGrid,
    title: 'Kanban opérationnel',
    summary:
      'Votre tableau de bord terrain, organisé comme vous pensez le chantier.',
    bullets: [
      'Organisation par phase, équipe, zone ou type d’intervention',
      'Drag-and-drop avec commit explicite pour éviter les pertes',
      'Filtres croisés : technicien × statut × priorité × échéance',
      'Statuts verrouillés — plus d’Excel écrasé par erreur',
    ],
    hint: 'Fonctionne avec les rôles métier : Électricien, Mécanicien, ISM.',
  },
  {
    num: '02',
    icon: GanttChart,
    title: 'Gantt & heatmap ressources',
    summary:
      'Voir le chantier dans la durée, et savoir où ça va coincer avant que ça coince.',
    bullets: [
      'Planning visuel complet, zoom semaine/mois',
      'Dépendances et chemin critique mis en évidence',
      'Heatmap de charge par technicien et jour ouvré',
      'Détection automatique des surcharges et conflits',
    ],
    hint: 'La vue équipe est dérivée des vraies tâches, pas d’une liste statique.',
  },
  {
    num: '03',
    icon: FileText,
    title: 'Rapports automatisés',
    summary:
      'Vos livrables, au format attendu par vos clients, générés sans saisie redondante.',
    bullets: [
      'Daily Work Report — formatage conforme au template DPF1',
      'Weekly Installation Plan — Word paysage A4, prêt à imprimer',
      'Punch List imprimable par zone, par bâtiment',
      'Export Excel / TSV pour les reporting internes',
    ],
    hint: 'Génération en moins de 5 secondes, depuis les vraies données du chantier.',
  },
  {
    num: '04',
    icon: Brain,
    title: 'AURA AI — Analyse de risques',
    summary:
      'Un moteur d’analyse qui lit votre chantier comme un chef de chantier senior.',
    bullets: [
      '11 règles de détection appliquées en continu',
      'Échelle de sévérité CRITIQUE → ALERTE → AVERTISSEMENT → BON',
      'Signaux faibles : déséquilibres d’équipe, tâches dormantes, risques planning',
      'Insights contextualisés, pas des scores opaques',
    ],
    hint: 'Aucune boîte noire : chaque alerte est explicable et actionnable.',
  },
  {
    num: '05',
    icon: Users,
    title: 'Portail client en lecture seule',
    summary:
      'Vos clients suivent le chantier sans vous interrompre, sans compte à créer.',
    bullets: [
      'Un lien URL sécurisé par client',
      'Vue filtrée : seules les données autorisées',
      'Aucune donnée sensible exposée (coûts internes, notes)',
      'Fonctionne sans authentification — UX pensée pour les décideurs',
    ],
    hint: 'Amazon, Zancaner et d’autres l’utilisent déjà au quotidien.',
  },
  {
    num: '06',
    icon: Camera,
    title: 'Journal photo & punch list',
    summary:
      'Les photos et réserves, enfin au bon endroit.',
    bullets: [
      'Photos horodatées, rattachées à une zone et une tâche',
      'Punch list imprimable au format A4, par bâtiment',
      'Daily Briefing généré d’un clic, prêt à diffuser le matin',
      'Timeline visuelle de l’avancement du chantier',
    ],
    hint: 'Fini les photos éparpillées sur trois téléphones et quatre emails.',
  },
];

export default function FonctionnalitesPage() {
  return (
    <>
      <PageHeader
        eyebrow="§ Fonctionnalités · Détail par module"
        title="Tout ce qu’AURA fait,"
        titleAccent="en détail."
        lede="Chaque module est pensé pour un usage précis du chef de chantier industriel. Rien de superflu, rien d’approximatif."
      />

      {/* Liste des modules alternés */}
      <section className="bg-bg">
        <div className="container-x py-20 md:py-28">
          <div className="space-y-24 md:space-y-32">
            {FEATURES.map((f, i) => (
              <FeatureBlock key={f.num} feature={f} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-ink-line bg-bg-raised">
        <div className="container-x py-20 text-center">
          <span className="blueprint-tag justify-center">Prêt à voir AURA tourner ?</span>
          <h2 className="mt-6 font-display text-display-2 font-medium tracking-tight">
            Demandez une démo sur <em className="font-display-wonk not-italic text-accent">vos données</em>.
          </h2>
          <Link
            href="/demander-demo"
            className="btn-primary mt-10 inline-flex"
          >
            Demander une démo
            <ArrowUpRight size={16} strokeWidth={1.75} />
          </Link>
        </div>
      </section>
    </>
  );
}

function FeatureBlock({
  feature,
  reverse,
}: {
  feature: FeatureDetail;
  reverse: boolean;
}) {
  const { icon: Icon, num, title, summary, bullets, hint } = feature;
  return (
    <article className="grid gap-10 md:grid-cols-12 md:gap-12">
      {/* Label côté */}
      <div
        className={`md:col-span-4 ${
          reverse ? 'md:order-2 md:col-start-9' : ''
        }`}
      >
        <div className="sticky top-28">
          <div className="flex items-start justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
              Module / {num}
            </span>
            <Icon size={28} strokeWidth={1.25} className="text-accent" />
          </div>
          <h2 className="mt-8 font-display text-display-3 font-medium tracking-tight text-ink">
            {title}
          </h2>
          <p className="mt-4 font-sans text-[15px] leading-relaxed text-ink-soft">
            {summary}
          </p>
        </div>
      </div>

      {/* Contenu */}
      <div
        className={`md:col-span-7 ${
          reverse ? 'md:order-1 md:col-start-1' : 'md:col-start-6'
        }`}
      >
        <ul className="space-y-4 border-l border-ink-line pl-6">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2.5 h-px w-4 flex-shrink-0 bg-accent" />
              <span className="font-sans text-[17px] leading-relaxed text-ink">
                {b}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-8 border-t border-ink-line pt-4 font-mono text-xs text-ink-muted">
          ↳ {hint}
        </p>
      </div>
    </article>
  );
}
