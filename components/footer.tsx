import Link from 'next/link';

const COL_PRODUIT = [
  { href: '/fonctionnalites', label: 'Fonctionnalités' },
  { href: '/cas-usage', label: 'Cas d’usage' },
  { href: '/tarifs', label: 'Tarifs' },
  { href: '/demander-demo', label: 'Demander une démo' },
];

const COL_RESSOURCES = [
  { href: '/blog', label: 'Journal' },
  { href: '/blog/methodologie-aura', label: 'Méthodologie AURA' },
  { href: '/contact', label: 'Contact' },
];

const COL_LEGAL = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/confidentialite', label: 'Confidentialité' },
  { href: '/cgv', label: 'CGV' },
];

export function Footer() {
  return (
    <footer className="mt-32 bg-bg-deep text-bg">
      <div className="container-x py-20">
        {/* Top rule + label */}
        <div className="mb-12 flex items-center justify-between border-b border-bg/10 pb-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bg/50">
            § Index — pied de page
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bg/50">
            Édition {new Date().getFullYear()}
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand bloc */}
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl font-semibold tracking-tight">
                AURA
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                /btp
              </span>
            </div>
            <p className="mt-6 max-w-sm font-sans text-[15px] leading-relaxed text-bg/70">
              La supervision de chantier industriel, enfin au niveau.
              Pensé sur le terrain, pour le terrain.
            </p>
            <p className="mt-8 font-mono text-xs text-bg/40">
              Un produit conçu par des chefs de chantier, pour des chefs de chantier.
            </p>
          </div>

          {/* Columns */}
          <div className="md:col-span-7 grid grid-cols-2 gap-8 md:grid-cols-3">
            <FooterColumn title="Produit" links={COL_PRODUIT} />
            <FooterColumn title="Ressources" links={COL_RESSOURCES} />
            <FooterColumn title="Juridique" links={COL_LEGAL} />
          </div>
        </div>

        {/* Bottom rule */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-bg/10 pt-8 md:flex-row md:items-center">
          <p className="font-mono text-[11px] text-bg/40">
            © {new Date().getFullYear()} AURA — Tous droits réservés.
          </p>
          <p className="font-mono text-[11px] text-bg/40">
            Fait avec rigueur à Lyon.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-bg/50">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-sans text-sm text-bg/85 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
