import { Check, X } from 'lucide-react';

const ROWS = [
  {
    topic: 'Suivi des tâches',
    before: 'Excel partagé cassé par le dernier qui a enregistré',
    after: 'Kanban et Gantt temps réel, source unique de vérité',
  },
  {
    topic: 'Rapport journalier',
    before: 'Ressaisie Word le dimanche, 2 heures par semaine',
    after: 'Généré automatiquement au format DPF1, export Word 1 clic',
  },
  {
    topic: 'Communication client',
    before: 'Emails de 15 pages, relances, captures d’écran floues',
    after: 'Portail client lecture seule, lien sécurisé, vue filtrée',
  },
  {
    topic: 'Détection des risques',
    before: 'Réunion du lundi, découverte du retard en retard',
    after: 'AURA AI scanne 11 signaux faibles, alerte avant dérive',
  },
  {
    topic: 'Plan d’installation',
    before: 'Planning hebdo retapé à la main chaque vendredi',
    after: 'Weekly Plan généré depuis les tâches, A4 paysage prêt à imprimer',
  },
  {
    topic: 'Photos & punch list',
    before: 'Photos éparpillées sur 3 téléphones et 4 emails',
    after: 'Journal photo géolocalisé, punch list imprimable par zone',
  },
];

export function ProblemSolution() {
  return (
    <section className="border-t border-ink-line bg-bg texture-paper">
      <div className="container-x py-24 md:py-32">
        {/* Section header */}
        <div className="mb-16 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="blueprint-tag">§ 02 · Avant / Après</span>
            <h2 className="mt-6 font-display text-display-2 font-medium tracking-tight text-ink">
              Ce qu’AURA<br />
              <em className="font-display-wonk not-italic text-accent">
                change vraiment.
              </em>
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 md:pt-6">
            <p className="font-sans text-lg leading-relaxed text-ink-soft">
              Un chef de chantier industriel passe en moyenne <strong>8 à 12 heures par semaine</strong> à
              produire des documents que personne ne lit en entier. AURA s’attaque
              d’abord à ce gâchis — puis au reste.
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <div className="overflow-hidden border border-ink-line bg-bg-raised">
          {/* Header row */}
          <div className="grid grid-cols-12 border-b border-ink-line bg-bg">
            <div className="col-span-3 p-5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
              Sujet
            </div>
            <div className="col-span-4 border-l border-ink-line p-5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
              Avant AURA
            </div>
            <div className="col-span-5 border-l border-ink-line bg-accent/5 p-5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Avec AURA
            </div>
          </div>

          {/* Body rows */}
          {ROWS.map((row, i) => (
            <div
              key={row.topic}
              className={`grid grid-cols-12 ${
                i !== ROWS.length - 1 ? 'border-b border-ink-line' : ''
              }`}
            >
              <div className="col-span-3 p-5 font-display text-lg text-ink">
                {row.topic}
              </div>
              <div className="col-span-4 border-l border-ink-line p-5">
                <div className="flex items-start gap-2">
                  <X
                    size={14}
                    className="mt-1 flex-shrink-0 text-ink-muted"
                    strokeWidth={1.75}
                  />
                  <p className="font-sans text-sm leading-relaxed text-ink-soft">
                    {row.before}
                  </p>
                </div>
              </div>
              <div className="col-span-5 border-l border-ink-line bg-accent/5 p-5">
                <div className="flex items-start gap-2">
                  <Check
                    size={14}
                    className="mt-1 flex-shrink-0 text-accent"
                    strokeWidth={2}
                  />
                  <p className="font-sans text-sm leading-relaxed text-ink">
                    {row.after}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
