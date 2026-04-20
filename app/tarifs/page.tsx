import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowUpRight } from 'lucide-react';
import { PageHeader } from '@/components/page-header';

export const metadata: Metadata = {
  title: 'Tarifs',
  description:
    'Des prix transparents, pensés pour les PME et les grands groupes industriels. Essai gratuit, pas de carte bancaire.',
};

const PLANS = [
  {
    name: 'Chantier',
    tagline: 'Un chantier, une équipe',
    price: '290',
    unit: '€ / mois',
    blurb:
      'Idéal pour piloter un chantier industriel de bout en bout, sans les outils qui ne servent qu’aux grands groupes.',
    features: [
      'Jusqu’à 10 utilisateurs (chefs, techniciens, ISM)',
      'Kanban + Gantt + heatmap ressources',
      'Rapports auto : Daily Report, Weekly Plan, Punch List',
      'Portail client lecture seule (1 lien)',
      'Journal photo & timeline',
      'Assistance par email',
    ],
    cta: 'Démarrer',
    featured: false,
  },
  {
    name: 'Entreprise',
    tagline: 'Plusieurs chantiers, plusieurs équipes',
    price: '890',
    unit: '€ / mois',
    blurb:
      'Pour les entreprises industrielles qui opèrent en parallèle sur plusieurs sites, avec consolidation et supervision transverse.',
    features: [
      'Utilisateurs illimités',
      'Chantiers illimités, vue consolidée multi-projets',
      'AURA AI — analyse de risques sur tout le portefeuille',
      'Portails clients illimités (1 par projet)',
      'Export SSO, permissions granulaires',
      'Support prioritaire, onboarding dédié',
    ],
    cta: 'Demander une démo',
    featured: true,
  },
  {
    name: 'Grand groupe',
    tagline: 'Intégration SI & contrats cadres',
    price: 'Sur mesure',
    unit: '',
    blurb:
      'Pour les grands groupes industriels avec exigences SI, sécurité et conformité spécifiques.',
    features: [
      'Déploiement on-premise ou cloud dédié',
      'Intégrations ERP, MES, GMAO',
      'SLA contractuels, DPA, audits sécurité',
      'Développement de modules spécifiques',
      'Account manager dédié',
      'Formations sur site',
    ],
    cta: 'Nous contacter',
    featured: false,
  },
];

const FAQ = [
  {
    q: 'Y a-t-il un essai gratuit ?',
    a: 'Oui, 30 jours sur un chantier pilote, avec vos données. Pas de carte bancaire, pas d’engagement. Si AURA ne tient pas ses promesses, vous repartez — pas de discussion.',
  },
  {
    q: 'Comment se passe l’onboarding ?',
    a: 'Une session de 90 minutes avec l’équipe produit pour paramétrer votre premier chantier. On importe vos tâches depuis vos fichiers existants (Excel, MS Project, P6). Vos équipes sont opérationnelles en une demi-journée.',
  },
  {
    q: 'AURA fonctionne-t-il hors-ligne ?',
    a: 'Le mode offline terrain est prévu pour la version 1.5 (Q3 2026). Actuellement, AURA nécessite une connexion, mais fonctionne en 4G sur site sans problème.',
  },
  {
    q: 'Mes données sont-elles en sécurité ?',
    a: 'Hébergement EU (Vercel + Supabase), chiffrement au repos et en transit, sauvegardes quotidiennes. Pour les grands groupes : DPA, audit de sécurité, déploiement dédié possible.',
  },
  {
    q: 'Peut-on personnaliser les templates de rapport ?',
    a: 'Oui. Les templates DPF1 sont fournis par défaut. Pour les clients Entreprise et Grand groupe, nous adaptons les formats à vos propres standards internes.',
  },
];

export default function TarifsPage() {
  return (
    <>
      <PageHeader
        eyebrow="§ Tarifs · Transparence"
        title="Un prix par"
        titleAccent="périmètre."
        lede="Pas de licences à l’utilisateur qui explosent à chaque nouveau technicien. Un prix clair par chantier ou par entreprise. Essai de 30 jours sans carte bancaire."
      />

      {/* Plans */}
      <section className="bg-bg">
        <div className="container-x py-20 md:py-28">
          <div className="grid gap-px bg-ink-line md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col p-8 md:p-10 ${
                  plan.featured ? 'bg-ink text-bg' : 'bg-bg-raised text-ink'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-8 bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-bg">
                    Le plus choisi
                  </span>
                )}

                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-3xl font-medium tracking-tight">
                    {plan.name}
                  </h3>
                </div>

                <p
                  className={`mt-2 font-mono text-[10px] uppercase tracking-[0.2em] ${
                    plan.featured ? 'text-bg/60' : 'text-ink-muted'
                  }`}
                >
                  {plan.tagline}
                </p>

                <div className="mt-8 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-medium tracking-tight">
                    {plan.price}
                  </span>
                  {plan.unit && (
                    <span
                      className={`font-sans text-sm ${
                        plan.featured ? 'text-bg/60' : 'text-ink-muted'
                      }`}
                    >
                      {plan.unit}
                    </span>
                  )}
                </div>

                <p
                  className={`mt-4 font-sans text-[15px] leading-relaxed ${
                    plan.featured ? 'text-bg/75' : 'text-ink-soft'
                  }`}
                >
                  {plan.blurb}
                </p>

                <ul className="mt-8 space-y-3 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check
                        size={14}
                        strokeWidth={2}
                        className={`mt-1 flex-shrink-0 ${
                          plan.featured ? 'text-accent' : 'text-accent'
                        }`}
                      />
                      <span className="font-sans text-sm leading-relaxed">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={
                    plan.name === 'Grand groupe'
                      ? '/contact'
                      : '/demander-demo'
                  }
                  className={`mt-10 inline-flex items-center justify-center gap-2 px-5 py-3 font-sans text-sm font-medium tracking-tight transition-colors ${
                    plan.featured
                      ? 'bg-accent text-bg hover:bg-bg hover:text-ink'
                      : 'bg-ink text-bg hover:bg-accent'
                  }`}
                >
                  {plan.cta}
                  <ArrowUpRight size={16} strokeWidth={1.75} />
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 font-mono text-xs text-ink-muted">
            ↳ Tous les plans incluent les mises à jour gratuites, les sauvegardes quotidiennes et l’hébergement EU.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-ink-line bg-bg-raised">
        <div className="container-x py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="blueprint-tag">§ FAQ · Questions courantes</span>
              <h2 className="mt-6 font-display text-display-2 font-medium tracking-tight">
                Les questions<br />qui reviennent.
              </h2>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <dl className="divide-y divide-ink-line border-y border-ink-line">
                {FAQ.map((item, i) => (
                  <div key={i} className="py-6">
                    <dt className="font-display text-xl font-medium text-ink">
                      {item.q}
                    </dt>
                    <dd className="mt-3 font-sans text-[15px] leading-relaxed text-ink-soft">
                      {item.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
