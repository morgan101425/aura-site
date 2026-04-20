import type { Metadata } from 'next';
import { Check, Clock, Users2, FileText } from 'lucide-react';
import { PageHeader } from '@/components/page-header';

export const metadata: Metadata = {
  title: 'Demander une démo',
  description:
    'Une démo de 20 minutes menée par l’équipe produit, sur un cas proche du vôtre. Prête sous 24 h.',
};

export default function DemanderDemoPage() {
  return (
    <>
      <PageHeader
        eyebrow="§ Démo · 20 minutes"
        title="Voyez AURA tourner,"
        titleAccent="sur votre contexte."
        lede="Pas de présentation générique. On configure en amont un chantier proche du vôtre, et on vous le montre en conditions réelles."
      />

      <section className="bg-bg">
        <div className="container-x py-20 md:py-24">
          <div className="grid gap-16 md:grid-cols-12">
            {/* Ce que vous obtenez */}
            <div className="md:col-span-5">
              <span className="blueprint-tag">Ce que vous obtenez</span>
              <ul className="mt-8 space-y-6 border-l border-ink-line pl-6">
                <PromiseItem
                  icon={Clock}
                  title="Démo en moins de 24 h"
                  description="On vous propose 3 créneaux dans la journée qui suit votre demande."
                />
                <PromiseItem
                  icon={Users2}
                  title="Menée par l’équipe produit"
                  description="Pas un commercial : les personnes qui conçoivent AURA, qui connaissent le terrain."
                />
                <PromiseItem
                  icon={FileText}
                  title="Configurée sur votre contexte"
                  description="Vous nous envoyez un Excel de tâches, on le charge. Vous voyez AURA sur vos vraies données."
                />
                <PromiseItem
                  icon={Check}
                  title="Accès d’essai à la sortie"
                  description="30 jours sur un chantier pilote, sans carte bancaire, sans engagement."
                />
              </ul>

              <div className="mt-12 border-t border-ink-line pt-6">
                <p className="font-mono text-[11px] leading-relaxed text-ink-muted">
                  ↳ Si à l’issue de la démo AURA ne vous convient pas, on vous le dit nous-mêmes.
                  On préfère un « non » franc à un mauvais client.
                </p>
              </div>
            </div>

            {/* Formulaire */}
            <div className="md:col-span-6 md:col-start-7">
              <form className="space-y-6 border border-ink-line bg-bg-raised p-8 md:p-10">
                <h2 className="font-display text-2xl font-medium text-ink">
                  Votre contexte en 1 minute
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Nom complet" name="name" required />
                  <Field label="Fonction" name="role" placeholder="Chef de chantier, DT, etc." />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Email professionnel" name="email" type="email" required />
                  <Field label="Entreprise" name="company" required />
                </div>

                <FieldSelect
                  label="Taille de votre équipe chantier"
                  name="team_size"
                  options={[
                    '1 — 5 personnes',
                    '6 — 15 personnes',
                    '16 — 40 personnes',
                    '40+ personnes',
                  ]}
                />

                <FieldSelect
                  label="Type de chantier principal"
                  name="project_type"
                  options={[
                    'Installation de machines industrielles',
                    'Déploiement logistique / automatisation',
                    'BTP industriel multi-sociétés',
                    'Autre',
                  ]}
                />

                <FieldTextarea
                  label="Dites-nous en un peu plus (facultatif)"
                  name="message"
                  placeholder="Quels outils utilisez-vous aujourd'hui ? Quel est le point qui vous bloque le plus ?"
                />

                <div className="border-t border-ink-line pt-6">
                  <button type="submit" className="btn-primary w-full md:w-auto">
                    Demander ma démo
                  </button>
                  <p className="mt-4 font-mono text-[11px] text-ink-muted">
                    Réponse sous 24 h ouvrées · Aucun démarchage commercial automatisé
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PromiseItem({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Clock;
  title: string;
  description: string;
}) {
  return (
    <li className="relative">
      <span className="absolute -left-[28px] top-1 flex h-4 w-4 items-center justify-center bg-bg">
        <Icon size={14} strokeWidth={1.5} className="text-accent" />
      </span>
      <div className="font-display text-xl font-medium text-ink">{title}</div>
      <div className="mt-2 font-sans text-[15px] leading-relaxed text-ink-soft">
        {description}
      </div>
    </li>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="mt-2 block w-full border-0 border-b border-ink bg-transparent px-0 py-2 font-sans text-base text-ink placeholder-ink-muted focus:border-accent focus:outline-none focus:ring-0"
      />
    </label>
  );
}

function FieldSelect({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
        {label}
      </span>
      <select
        name={name}
        className="mt-2 block w-full border-0 border-b border-ink bg-transparent px-0 py-2 font-sans text-base text-ink focus:border-accent focus:outline-none focus:ring-0"
      >
        <option value="">— Sélectionner —</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

function FieldTextarea({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
        {label}
      </span>
      <textarea
        name={name}
        rows={4}
        placeholder={placeholder}
        className="mt-2 block w-full border-0 border-b border-ink bg-transparent px-0 py-2 font-sans text-base text-ink placeholder-ink-muted focus:border-accent focus:outline-none focus:ring-0 resize-none"
      />
    </label>
  );
}
