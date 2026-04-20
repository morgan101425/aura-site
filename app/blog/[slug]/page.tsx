import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { POSTS } from '@/lib/posts';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Article introuvable' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Header article */}
      <header className="border-b border-ink-line bg-bg">
        <div className="container-x pt-16 pb-12 md:pt-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={12} strokeWidth={1.5} />
            Retour au journal
          </Link>

          <div className="mt-12 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                {post.category}
              </div>
              <div className="mt-3 font-mono text-xs text-ink-muted">
                {formatDate(post.date)}
              </div>
              <div className="mt-1 font-mono text-xs text-ink-muted">
                {post.readingMinutes} min de lecture
              </div>
            </div>

            <h1 className="md:col-span-9 font-display text-display-2 font-medium leading-[1.08] tracking-tight text-ink">
              {post.title}
            </h1>
          </div>
        </div>
      </header>

      {/* Corps de l'article */}
      <article className="bg-bg">
        <div className="container-x py-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8 md:col-start-3">
              <p className="font-display text-2xl italic font-medium leading-snug text-ink-soft">
                {post.excerpt}
              </p>

              <div className="mt-12 space-y-10 border-t border-ink-line pt-12">
                {post.body.map((block, i) => (
                  <section key={i}>
                    {block.heading && (
                      <h2 className="mb-4 font-display text-3xl font-medium tracking-tight text-ink">
                        {block.heading}
                      </h2>
                    )}
                    {block.paragraphs.map((p, j) => (
                      <p
                        key={j}
                        className="mb-4 font-sans text-[17px] leading-[1.7] text-ink"
                      >
                        {p}
                      </p>
                    ))}
                  </section>
                ))}
              </div>

              {/* Footer article */}
              <footer className="mt-16 flex items-center justify-between border-t border-ink-line pt-8">
                <span className="font-mono text-xs text-ink-muted">
                  — Équipe AURA · Lyon
                </span>
                <Link
                  href="/demander-demo"
                  className="link-editorial inline-flex items-center gap-1.5 font-sans text-sm"
                >
                  Demander une démo
                  <ArrowUpRight size={14} strokeWidth={1.75} />
                </Link>
              </footer>
            </div>
          </div>
        </div>
      </article>

      {/* Articles liés */}
      {others.length > 0 && (
        <section className="border-t border-ink-line bg-bg-raised">
          <div className="container-x py-20">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
              À lire ensuite
            </h2>
            <div className="mt-8 grid gap-px bg-ink-line md:grid-cols-2">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-bg-raised p-8 transition-colors hover:bg-bg"
                >
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                    <span className="text-accent">{p.category}</span>
                    <span className="h-px w-6 bg-ink-line" />
                    <span>{formatDate(p.date)}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-medium text-ink transition-colors group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-3 font-sans text-[15px] leading-relaxed text-ink-soft">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
