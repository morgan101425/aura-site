import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import { POSTS } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Retours de terrain, réflexions produit et méthodologie — le journal de l’équipe AURA.',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <PageHeader
        eyebrow="§ Journal · Édition 2026"
        title="Le journal"
        titleAccent="d’AURA."
        lede="Réflexions produit, retours de terrain, choix de méthodologie. Un article publié environ tous les quinze jours — parce qu’on écrit quand on a vraiment quelque chose à dire."
      />

      {/* Featured article */}
      <section className="bg-bg">
        <div className="container-x py-16">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid gap-10 border-b border-ink-line pb-16 md:grid-cols-12"
          >
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                <span className="text-accent">À la une</span>
                <span className="h-px w-6 bg-ink-line" />
                <span>{featured.category}</span>
              </div>
              <div className="mt-6 font-mono text-xs text-ink-muted">
                {formatDate(featured.date)} · {featured.readingMinutes} min de lecture
              </div>
            </div>

            <div className="md:col-span-8">
              <h2 className="font-display text-display-2 font-medium leading-tight tracking-tight text-ink transition-colors group-hover:text-accent">
                {featured.title}
              </h2>
              <p className="mt-6 font-sans text-lg leading-relaxed text-ink-soft">
                {featured.excerpt}
              </p>
              <div className="mt-8 inline-flex items-center gap-1.5 font-sans text-sm text-ink">
                Lire l’article
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.75}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </Link>

          {/* Autres articles */}
          <div className="mt-16">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
              Autres articles
            </h3>
            <ul className="mt-8 divide-y divide-ink-line border-y border-ink-line">
              {rest.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid gap-4 py-8 md:grid-cols-12 md:gap-8"
                  >
                    <div className="md:col-span-3">
                      <div className="font-mono text-xs text-ink-muted">
                        {formatDate(post.date)}
                      </div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                        {post.category}
                      </div>
                    </div>

                    <div className="md:col-span-8">
                      <h4 className="font-display text-2xl font-medium text-ink transition-colors group-hover:text-accent">
                        {post.title}
                      </h4>
                      <p className="mt-2 font-sans text-[15px] leading-relaxed text-ink-soft">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="hidden md:col-span-1 md:flex md:items-start md:justify-end md:pt-1">
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="text-ink-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
