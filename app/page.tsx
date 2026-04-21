import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowUpRight } from 'lucide-react';
import { PageHeader } from '@/components/page-header';

export const metadata: Metadata = {
  title: 'Tarifs',
  description:
    'Un prix simple et aligné avec votre activité : 299 € par chantier actif, utilisateurs illimités. Essai 30 jours sans carte bancaire.',
};

const PLANS = [
  {
    name: 'Chantier',
    tagline: 'Par chantier actif · utilisateurs illimités',
    price: '299',
    unit: '€ / mois / chantier',
    blurb:
      'Un prix par chantier en cours, pas par utilisateur. Tous vos intervenants — chefs, techniciens, ISM, sous-traitants, clients — accèdent librement.',
    features: [
      'Utilisateurs illimités sur le chantier',
      'Portail client en lecture seule inclus (1 par chantier)',
      'Kanban opérationnel, Gantt et heatmap ressources',
      'Rapports auto : Daily Report, Weekly Plan, Punch List',
      'AURA AI — analyse de risques en continu (11 règles)',
      'Journal photo, timeline et Daily Briefing',
      'Hébergement EU, sauvegardes quotidiennes',
      'Support par email sous 24 h ouvrées',
    ],
    cta: 'Demander une démo',
    featured: true,
  },
  {
    name: 'Grand groupe',
    tagline: 'Intégration SI · conditions cadres · multi-chantiers négociés',
    price: 'Sur mesure',
    unit: '',
    blurb:
      'Pour les grands groupes industriels avec exigences SI, sécurité, conformité ou volumes élevés.',
    features: [
      'Remise volume sur 10+ chantiers simultanés',
      'Déploiement on-premise ou cloud dédié',
      'Intégrations ERP, MES, GMAO',
      'SLA contractuels, DPA, audits sécurité',
      'Templates de rapport personnalisés à vos standards',
      'Account manager dédié et formations sur site',
    ],
    cta: 'Nous contacter',
    featured: false,
  },
];

const FAQ = [
  {
    q: 'Pourquoi un prix par chantier et pas par utilisateur ?',
    a: 'Parce qu’un chantier industriel est multi-acteurs : chefs de chantier, techniciens, ISM, sous-traitants, client final. Facturer au siège, c’est freiner l’adoption par vos équipes et compliquer l’accès au donneur d’ordre. À 299 € par chantier actif, tout le monde accède — c’est aligné avec la valeur réelle que vous tirez du produit.',
  },
  {
    q: 'Qu’est-ce qu’un « chantier actif » ?',
    a: 'Un chantier est considéré actif dès qu’au moins une tâche y est en cours ou en planification. Dès qu’un chantier est clôturé (réception prononcée), il sort du compteur — mais reste consultable en lecture seule, sans frais.',
  },
  {
    q: 'Y a-t-il un essai gratuit ?',
    a: '30 jours sur un chantier pilote, avec vos données. Pas de carte bancaire, pas d’engagement. Si AURA ne tient pas ses promesses, vous repartez sans discussion.',
  },
  {
    q: 'Comment se passe l’onboarding ?',
    a: 'Une session de 90 minutes avec l’équipe produit pour paramétrer votre premier chantier. On importe vos tâches depuis vos fichiers existants (Excel, MS Project, P6). Vos équipes sont opérationnelles en une demi-journée.',
  },
  {
    q: 'Mes données sont-elles en sécurité ?',
    a: 'Hébergement EU, chiffrement au repos et en transit, sauvegardes quotidiennes. Pour les grands groupes : DPA, audit de sécurité, déploiement dédié possible.',
  },
  {
    q: 'Peut-on personnaliser les templates de rapport ?',
    a: 'Oui. Les templates DPF1 sont fournis par défaut (Daily Work Report, Weekly Installation Plan, Punch List). Pour les clients Grand groupe, nous adaptons les formats à vos propres standards internes.',
  },
];

export default function TarifsPage() {
  return (
    <>
      <PageHeader
        eyebrow="§ Tarifs · Transparence"
        title="299 €"
        titleAccent="par chantier actif."
        lede="Utilisateurs illimités. Tous les intervenants du chantier accèdent librement — chefs, techniciens, ISM, sous-traitants, client final. Essai 30 jours sans carte bancaire."
      />

      {/* Plans */}
      <section className="bg-bg">
        <div className="container-x py-20 md:py-28">
          <div className="grid gap-px bg-ink-line md:grid-cols-2 max-w-5xl mx-auto">
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
                        className="mt-1 flex-shrink-0 text-accent"
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

          <p className="mt-8 font-mono text-xs text-ink-muted text-center">
            ↳ Facturation mensuelle sans engagement · hébergement EU · sauvegardes quotidiennes incluses
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
