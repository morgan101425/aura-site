import { ArrowRight } from 'lucide-react';

const ROADMAP = [
  {
    version: 'V1.1',
    status: 'En cours',
    horizon: 'Prochaine release',
    items: [
      {
        title: 'Nomenclature pièces par machine',
        detail: 'Import Excel/CSV, demandes de commande depuis le terrain',
      },
      {
        title: 'Assistant IA conversationnel',
        detail: 'Langage naturel, toutes les données chantier en temps réel',
      },
      {
        title: 'Coactivité sur plan',
        detail: 'Import DWG→PDF, zones, sociétés + dates, alertes conflits',
      },
    ],
  },
  {
    version: 'V1.5',
    status: 'Planifié',
    horizon: 'Q3 2026',
    items: [
      {
        title: 'Analyse photo par IA',
        detail: 'Détection automatique de l’avancement à partir des photos',
      },
      {
        title: 'Voice-to-Report',
        detail: 'Rapport journalier dicté, mis en forme automatiquement',
      },
      {
        title: 'Prédiction de dérive',
        detail: 'Anticipation des retards via les signaux historiques',
      },
      {
        title: 'Simulation what-if',
        detail: 'Ajout de ressources → nouvelle date de fin calculée',
      },
      {
        title: 'Mode offline terrain',
        detail: 'Saisie hors-ligne, synchronisation automatique',
      },
      {
        title: 'Viewer DXF avec prise de cotes',
        detail: 'Lecture des plans techniques directement dans AURA',
      },
    ],
  },
  {
    version: 'V2',
    status: 'Vision',
    horizon: '2027',
    items: [
      {
        title: 'Module ERP hybride',
        detail: 'Procurement pièces validé par les achats',
      },
      {
        title: 'Modèles STEP liés à la nomenclature',
        detail: 'Chaque pièce 3D rattachée à sa BOM',
      },
      {
        title: 'AR sur machine',
        detail: 'Réalité augmentée pour l’installation terrain',
      },
      {
        title: 'Jumeau numérique 3D',
        detail: 'Représentation temps réel du chantier',
      },
    ],
  },
];

export function Roadmap() {
  return (
    <section className="border-t border-ink-line bg-bg-raised">
      <div className="container-x py-24 md:py-32">
        {/* Header */}
        <div className="mb-16 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="blueprint-tag">§ 05 · Feuille de route</span>
            <h2 className="mt-6 font-display text-display-2 font-medium tracking-tight text-ink">
              Ce qui arrive.<br />
              <em className="font-display-wonk not-italic">
                Sans fioritures.
              </em>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-6">
            <p className="font-sans text-lg leading-relaxed text-ink-soft">
              AURA est un produit vivant. Voici ce qui arrive, dans l’ordre, et ce
              que nous préparons à plus long terme. Chaque version est pensée avec
              les chefs de chantier — pas contre eux.
            </p>
          </div>
        </div>

        {/* Timeline colonnes */}
        <div className="grid gap-px bg-ink-line lg:grid-cols-3">
          {ROADMAP.map((release) => (
            <div key={release.version} className="bg-bg-raised p-8">
              <div className="flex items-baseline justify-between border-b border-ink-line pb-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                    {release.horizon}
                  </div>
                  <div className="mt-2 font-display text-4xl font-medium tracking-tight text-ink">
                    {release.version}
                  </div>
                </div>
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.15em] ${
                    release.status === 'En cours'
                      ? 'text-accent'
                      : release.status === 'Planifié'
                      ? 'text-ink'
                      : 'text-ink-muted'
                  }`}
                >
                  {release.status}
                </span>
              </div>

              <ul className="mt-6 space-y-5">
                {release.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-px w-4 flex-shrink-0 bg-ink-line" />
                    <div>
                      <div className="font-sans text-sm font-medium text-ink">
                        {item.title}
                      </div>
                      <div className="mt-1 font-sans text-[13px] leading-relaxed text-ink-muted">
                        {item.detail}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 flex items-center gap-2 font-mono text-xs text-ink-muted">
          <ArrowRight size={14} strokeWidth={1.5} />
          Vous avez un besoin spécifique ? La roadmap se construit aussi avec nos clients.
        </p>
      </div>
    </section>
  );
}
