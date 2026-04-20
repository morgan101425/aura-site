import {
  LayoutGrid,
  GanttChart,
  FileText,
  Brain,
  Users,
  Camera,
  BarChart3,
  ClipboardCheck,
  ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';

const FEATURES = [
  {
    num: '01',
    icon: LayoutGrid,
    title: 'Kanban opérationnel',
    description:
      'Organisez les tâches par phase, équipe ou zone. Drag-and-drop, filtres par technicien, statuts verrouillés pour éviter les écrasements.',
  },
  {
    num: '02',
    icon: GanttChart,
    title: 'Gantt & heatmap ressources',
    description:
      'Planning visuel sur toute la durée du chantier. Détection automatique des surcharges par technicien et par jour ouvré.',
  },
  {
    num: '03',
    icon: FileText,
    title: 'Rapports automatisés',
    description:
      'Daily Work Report, Weekly Installation Plan, Punch List — générés depuis vos données, au format Word/Excel attendu par vos clients.',
  },
  {
    num: '04',
    icon: Brain,
    title: 'AURA AI — Analyse de risques',
    description:
      '11 règles de détection (de CRITIQUE à BON) appliquées en continu. Alertes sur les dérives de planning, les déséquilibres d’équipe, les tâches en souffrance.',
  },
  {
    num: '05',
    icon: Users,
    title: 'Portail client en lecture seule',
    description:
      'Un lien sécurisé par client. Vue filtrée, aucune donnée sensible, pas de compte à créer. Vos clients suivent sans vous interrompre.',
  },
  {
    num: '06',
    icon: Camera,
    title: 'Journal photo & punch list',
    description:
      'Photos horodatées par zone, punch list imprimable A4 par bâtiment, briefing quotidien rédigé en un clic.',
  },
];

export function Features() {
  return (
    <section
      id="fonctionnalites"
      className="border-t border-ink-line bg-bg-raised"
    >
      <div className="container-x py-24 md:py-32">
        {/* Section header */}
        <div className="mb-16 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="blueprint-tag">§ 03 · Capacités</span>
            <h2 className="mt-6 font-display text-display-2 font-medium tracking-tight text-ink">
              Six modules.<br />
              <em className="font-display-wonk not-italic">
                Une seule vérité.
              </em>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-6">
            <p className="font-sans text-lg leading-relaxed text-ink-soft">
              AURA est pensé comme un seul outil cohérent, pas comme une suite
              de modules qui se parlent à moitié. Toutes les vues travaillent
              sur la même donnée — celle que le chef de chantier saisit une
              fois, et une seule.
            </p>
            <Link
              href="/fonctionnalites"
              className="mt-6 link-editorial inline-flex items-center gap-1 font-sans text-sm"
            >
              Voir le détail de chaque module
              <ArrowUpRight size={14} strokeWidth={1.75} />
            </Link>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid gap-px bg-ink-line md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard key={f.num} feature={f} />
          ))}
        </div>

        {/* Below — other capabilities */}
        <div className="mt-16 border-t border-ink-line pt-12">
          <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
            + Également inclus
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { icon: ClipboardCheck, label: 'Daily Briefing' },
              { icon: BarChart3, label: 'KPIs temps réel' },
              { icon: Camera, label: 'Timeline du chantier' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 border-b border-ink-line/50 pb-3"
              >
                <Icon size={18} strokeWidth={1.5} className="text-accent" />
                <span className="font-display text-lg text-ink">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
}: {
  feature: (typeof FEATURES)[number];
}) {
  const { icon: Icon, num, title, description } = feature;
  return (
    <article className="group relative flex flex-col bg-bg-raised p-8 transition-colors duration-300 hover:bg-bg">
      <div className="flex items-start justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
          / {num}
        </span>
        <Icon
          size={22}
          strokeWidth={1.5}
          className="text-ink-soft transition-colors duration-300 group-hover:text-accent"
        />
      </div>

      <h3 className="mt-8 font-display text-display-3 font-medium text-ink">
        {title}
      </h3>

      <p className="mt-4 font-sans text-[15px] leading-relaxed text-ink-soft">
        {description}
      </p>

      {/* Petit trait d'accent en bas au hover */}
      <div className="mt-8 h-px w-8 bg-ink transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
    </article>
  );
}
