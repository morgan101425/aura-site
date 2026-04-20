import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="border-t border-ink-line bg-bg-deep text-bg">
      <div className="container-x py-24 md:py-32">
        {/* Header ruled */}
        <div className="mb-16 flex items-center justify-between border-b border-bg/10 pb-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            § 06 · Passer à l’action
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bg/40">
            Décision en 15 min
          </span>
        </div>

        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="font-display text-display-1 font-medium tracking-tight text-bg">
              Arrêtez de<br />
              produire des rapports.<br />
              <em className="font-display-wonk not-italic text-accent">
                Dirigez vos chantiers.
              </em>
            </h2>
          </div>

          <div className="md:col-span-4 md:pt-6">
            <p className="font-sans text-lg leading-relaxed text-bg/75">
              Une démo de 20 minutes, menée par l’équipe produit — pas un SDR.
              On vous montre AURA sur un cas proche du vôtre, vous repartez avec
              un accès d’essai et vos données seed.
            </p>

            <div className="mt-8 space-y-3">
              <Link
                href="/demander-demo"
                className="inline-flex w-full items-center justify-between gap-2 bg-accent px-5 py-3 font-sans text-sm font-medium tracking-tight text-bg-deep transition-colors hover:bg-bg hover:text-bg-deep"
              >
                Demander une démo
                <ArrowUpRight size={16} strokeWidth={1.75} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-between gap-2 border border-bg/30 bg-transparent px-5 py-3 font-sans text-sm font-medium tracking-tight text-bg transition-colors hover:bg-bg/5"
              >
                Parler à l’équipe produit
                <ArrowUpRight size={16} strokeWidth={1.75} />
              </Link>
            </div>

            <p className="mt-6 font-mono text-[11px] text-bg/40">
              Pas de carte bancaire. Pas de SDR. Pas de « 14 jours d’essai »
              qui se transforment en 14 jours de formation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
