'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';

const NAV_LINKS = [
  { href: '/fonctionnalites', label: 'Fonctionnalités' },
  { href: '/cas-usage', label: 'Cas d’usage' },
  { href: '/tarifs', label: 'Tarifs' },
  { href: '/blog', label: 'Journal' },
] as const;

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Sur la home, le Hero fournit sa propre navigation (TopRail + Masthead)
  // On masque donc la Nav globale pour éviter la duplication.
  if (pathname === '/') return null;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-ink-line/70'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight text-ink">
            AURA
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted transition-colors group-hover:text-accent">
            /btp
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-ink-soft transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/demander-demo"
            className="btn-primary hidden md:inline-flex"
          >
            Demander une démo
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-ink"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-ink-line bg-bg">
          <div className="container-x flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 font-sans text-base text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/demander-demo"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              Demander une démo
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
