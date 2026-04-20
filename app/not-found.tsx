import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative overflow-hidden border-b border-ink-line bg-bg">
      <div
        aria-hidden
        className="absolute inset-0 bg-blueprint-grid bg-grid-md opacity-50"
      />
      <div className="container-x relative py-32 md:py-40">
        <div className="flex items-center justify-between border-b border-ink-line pb-4">
          <span className="blueprint-tag">§ Erreur · 404</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
            Page introuvable
          </span>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <h1 className="md:col-span-8 font-display text-display-1 font-medium tracking-tight text-ink">
            Cette page<br />
            <em className="font-display-wonk not-italic text-accent">
              n’existe pas.
            </em>
          </h1>
          <div className="md:col-span-4 md:pt-6">
            <p className="font-sans text-lg leading-relaxed text-ink-soft">
              Vous êtes arrivé sur une page qui n’a jamais été construite, ou qui
              a été déplacée. Retour au point de départ ?
            </p>
            <Link href="/" className="btn-primary mt-8 inline-flex">
              Retour à l’accueil
              <ArrowUpRight size={16} strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
