/* ================================================================
   components/sections/hero.tsx
   ----------------------------------------------------------------
   AURA — Hero « radical » : SpaceX / Arc / Perplexity meets
   éditorial-industriel. Fond noir dominant, Fraunces wonk italique
   omniprésent, mockup décomposé en strates cinématographiques,
   révélations scroll-driven, accent orange BTP chirurgical.
   ================================================================ */

'use client';

import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

/* ----------------------------------------------------------------
   Tokens locaux — scopés au wrapper, zéro impact sur le reste
   ---------------------------------------------------------------- */
const TOKENS = {
  '--void':          '#070706',
  '--void-raised':   '#111110',
  '--void-hair':     'rgba(255,255,255,0.06)',
  '--void-hair-2':   'rgba(255,255,255,0.12)',
  '--ink':           '#F5F1EA',
  '--ink-soft':      'rgba(245,241,234,0.62)',
  '--ink-mute':      'rgba(245,241,234,0.34)',
  '--signal':        '#E55A1F',
  '--signal-glow':   'rgba(229,90,31,0.35)',
  '--phos':          '#D4F542',
} as React.CSSProperties;

function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShown(true),
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, shown };
}

function useParallax() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);
  return y;
}

export function Hero() {
  return (
    <div
      style={TOKENS}
      className="relative bg-[var(--void)] text-[var(--ink)] font-sans overflow-hidden [font-feature-settings:'ss01','tnum']"
    >
      <BackdropLayers />
      <TopRail />
      <Masthead />
      <HeadlineBlock />
      <CinematicMockup />
      <MetricsRail />
      <GlobalKeyframes />
    </div>
  );
}

function GlobalKeyframes() {
  return (
    <style>{`
      @keyframes aura-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.82)} }
      @keyframes aura-marquee { to { transform: translateX(-50%); } }
      @keyframes aura-rule { to { transform: scaleX(1); } }
      @keyframes aura-sweep { 0%{transform:translateX(-30%)} 100%{transform:translateX(230%)} }
      @keyframes aura-drift { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-8px,0)} }
      @keyframes aura-flicker { 0%,19%,21%,23%,25%,54%,56%,100%{opacity:1} 20%,22%,24%,55%{opacity:.4} }
      @keyframes aura-scan { 0%{transform:translateY(-100%)} 100%{transform:translateY(100%)} }
    `}</style>
  );
}

function BackdropLayers() {
  const y = useParallax();
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          transform: `translate3d(0, ${y * 0.15}px, 0)`,
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 60% 30%, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 60% 30%, black 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="absolute -top-[30%] -right-[10%] w-[80%] aspect-square pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(229,90,31,0.18), transparent 55%)',
          transform: `translate3d(0, ${y * -0.08}px, 0)`,
        }}
      />
      <div
        aria-hidden
        className="absolute top-[40%] -left-[20%] w-[60%] aspect-square pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,245,66,0.06), transparent 60%)',
          transform: `translate3d(0, ${y * 0.06}px, 0)`,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[40%] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--void))' }}
      />
    </>
  );
}

function TopRail() {
  const [clock, setClock] = useState('—·—');
  useEffect(() => {
    const pad = (n: number) => String(n).padStart(2, '0');
    const t = () => {
      const d = new Date();
      const o = d.getTimezoneOffset();
      setClock(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())} · UTC${o <= 0 ? '+' : '-'}${pad(Math.abs(o / 60))}`);
    };
    t();
    const id = setInterval(t, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative z-20 border-b border-[var(--void-hair)] font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
      <Container>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-10 gap-6">
          <div className="flex items-center gap-5 whitespace-nowrap overflow-hidden">
            <span className="flex items-center gap-1.5 text-[var(--phos)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--phos)] shadow-[0_0_12px_var(--phos)] animate-[aura-pulse_1.8s_ease-in-out_infinite]" />
              AURA/OS · v1.1
            </span>
            <span className="hidden md:inline">{clock}</span>
            <span className="hidden lg:inline">45.7640°N · 04.8357°E · LYON</span>
          </div>
          <div className="hidden md:block text-center text-[var(--ink-soft)]">
            Chantier DPF1 — 26 machines · 14 sem. · 3 corps
          </div>
          <div className="flex items-center justify-end gap-3 whitespace-nowrap">
            <span className="hidden sm:inline">Démo 20 min</span>
            <span className="inline-flex gap-1">
              <Kbd>⌘</Kbd><Kbd>K</Kbd>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}
const Kbd = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-[var(--void-raised)] border border-[var(--void-hair-2)] rounded-[2px] px-1.5 py-[1px] text-[10px] text-[var(--ink-soft)]">
    {children}
  </span>
);

function Masthead() {
  return (
    <Container className="relative z-20">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-12 py-7 border-b border-[var(--void-hair)]">
        <Link href="/" className="inline-flex items-baseline gap-1.5">
          <span className="font-display font-medium text-[24px] -tracking-[0.04em] [font-variation-settings:'SOFT'_30,'WONK'_0,'opsz'_144]">
            AURA
          </span>
          <span className="font-display italic text-[18px] text-[var(--signal)] [font-variation-settings:'SOFT'_60,'WONK'_1,'opsz'_144]">
            /btp
          </span>
        </Link>

        <nav className="hidden md:flex justify-center gap-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink-soft)] [counter-reset:navIdx]">
          {[
            { label: 'Produit', href: '/fonctionnalites' },
            { label: 'Méthode', href: '/cas-usage' },
            { label: 'Tarifs', href: '/tarifs' },
            { label: 'Journal', href: '/blog' },
            { label: 'Contact', href: '/contact' },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="group relative py-1 cursor-pointer transition-colors hover:text-[var(--ink)] before:[content:counter(navIdx,decimal-leading-zero)] before:[counter-increment:navIdx] before:text-[var(--ink-mute)] before:text-[9px] before:mr-2 before:align-[3px] hover:before:text-[var(--signal)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <PrimaryCta>Demander une démo</PrimaryCta>
      </div>
    </Container>
  );
}

function HeadlineBlock() {
  const { ref, shown } = useReveal<HTMLDivElement>(0.1);

  return (
    <div ref={ref} className="relative z-10">
      <Container>
        <div className="grid grid-cols-[1fr_auto_auto] items-end gap-6 pt-14 pb-6 border-b border-[var(--void-hair)] font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--ink-mute)]">
          <span className="inline-flex items-center gap-3 text-[var(--signal)]">
            <span className="inline-block w-8 h-px bg-[var(--signal)]" />
            § 01 / MANIFESTE
          </span>
          <span className="hidden sm:inline">
            ÉD. 2026 · Q2 <span className="text-[var(--signal)]">//</span> 003/120
          </span>
          <span className="hidden lg:inline">
            SUPERVISION INDUSTRIELLE <span className="text-[var(--signal)]">—</span> TERRAIN
          </span>
        </div>

        <div className="pt-16 pb-8 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-16 items-end">
          <h1
            aria-label="La supervision de chantier industriel, enfin au niveau."
            className="font-display font-normal m-0 text-[clamp(3.75rem,9vw,9rem)] leading-[0.88] -tracking-[0.045em] [font-optical-sizing:auto]"
            style={{ fontVariationSettings: "'SOFT' 40, 'WONK' 0, 'opsz' 144" }}
          >
            <RevealWord shown={shown} delay={0}>La</RevealWord>{' '}
            <RevealWord shown={shown} delay={80} italic>
              supervision
            </RevealWord>
            <br />
            <RevealWord shown={shown} delay={180}>de</RevealWord>{' '}
            <RevealWord shown={shown} delay={240}>chantier</RevealWord>{' '}
            <RevealWord shown={shown} delay={320}>industriel,</RevealWord>
            <br />
            <span className="relative inline-block">
              <RevealWord shown={shown} delay={480} italic signal>
                enfin au niveau.
              </RevealWord>
              <span
                aria-hidden
                className="absolute left-0 right-0 bottom-[0.06em] h-[3px] bg-[var(--signal)] origin-left"
                style={{
                  transform: shown ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 1s cubic-bezier(0.22,1,0.36,1) 1000ms',
                  boxShadow: '0 0 12px var(--signal-glow)',
                }}
              />
            </span>
          </h1>

          <aside
            className="flex flex-col gap-6 self-end pb-4"
            style={{
              opacity: shown ? 1 : 0,
              transform: shown ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 700ms ease 500ms, transform 700ms cubic-bezier(0.22,1,0.36,1) 500ms',
            }}
          >
            <p className="font-sans text-[17px] leading-[1.55] text-[var(--ink-soft)] max-w-[44ch]">
              <strong className="text-[var(--ink)] font-medium">
                AURA remplace Excel, WhatsApp et les rapports du dimanche soir.
              </strong>{' '}
              Un{' '}
              <em className="font-display italic text-[var(--ink)] [font-variation-settings:'SOFT'_60,'WONK'_1,'opsz'_144]">
                seul outil
              </em>{' '}
              pour piloter l&apos;installation de machines industrielles — Kanban,
              Gantt, DWR auto, moteur de risque 11 règles, portail client.
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <PrimaryCta>Demander une démo</PrimaryCta>
              <SecondaryCta>Voir le produit</SecondaryCta>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-mute)]">
              ↳ 20 min · équipe produit · pas de SDR
            </span>
          </aside>
        </div>
      </Container>
    </div>
  );
}

function RevealWord({
  children,
  shown,
  delay,
  italic,
  signal,
}: {
  children: React.ReactNode;
  shown: boolean;
  delay: number;
  italic?: boolean;
  signal?: boolean;
}) {
  return (
    <span
      className="inline-block"
      style={{
        fontStyle: italic ? 'italic' : 'normal',
        fontVariationSettings: italic ? "'SOFT' 80, 'WONK' 1, 'opsz' 144" : "'SOFT' 40, 'WONK' 0, 'opsz' 144",
        color: signal ? 'var(--signal)' : 'var(--ink)',
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 650ms ease ${delay}ms, transform 900ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </span>
  );
}

function PrimaryCta({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="/demander-demo"
      className="group relative inline-flex items-center gap-2.5 bg-[var(--signal)] text-[var(--void)] px-5 py-3 rounded-[2px] font-sans font-medium text-[13px] transition-all duration-300 hover:bg-[var(--ink)] hover:-translate-y-[1px]"
      style={{ boxShadow: '0 8px 32px -8px var(--signal-glow), inset 0 1px 0 rgba(255,255,255,0.2)' }}
    >
      {children}
      <ArrowUpRight size={14} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
function SecondaryCta({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="/fonctionnalites"
      className="inline-flex items-center gap-2.5 bg-transparent text-[var(--ink)] border border-[var(--void-hair-2)] rounded-[2px] px-[18px] py-3 font-sans font-medium text-[13px] transition-all duration-300 hover:border-[var(--ink)] hover:bg-[rgba(255,255,255,0.04)]"
    >
      {children}
      <ArrowRight size={14} strokeWidth={1.75} />
    </Link>
  );
}

function CinematicMockup() {
  const { ref, shown } = useReveal<HTMLDivElement>(0.15);
  const y = useParallax();

  return (
    <div ref={ref} className="relative z-10">
      <Container>
        <div
          className="flex items-end justify-between pb-6 pt-8"
          style={{
            opacity: shown ? 1 : 0,
            transform: shown ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 600ms ease 200ms, transform 600ms cubic-bezier(0.22,1,0.36,1) 200ms',
          }}
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
              PLANCHE 01 <span className="text-[var(--signal)]">/</span> DÉCOMPOSITION
            </span>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
            RENDU TEMPS RÉEL <span className="text-[var(--phos)]">● LIVE</span>
          </div>
        </div>

        <div className="relative aspect-[16/10] border border-[var(--void-hair-2)] rounded-[3px] overflow-hidden bg-[radial-gradient(ellipse_at_50%_20%,#14110e_0%,#070706_70%)]">

          <div
            aria-hidden
            className="absolute inset-x-0 h-[120%] pointer-events-none z-[1]"
            style={{
              background:
                'linear-gradient(180deg, transparent 40%, rgba(229,90,31,0.08) 48%, rgba(229,90,31,0.25) 50%, rgba(229,90,31,0.08) 52%, transparent 60%)',
              animation: 'aura-scan 9s linear infinite',
            }}
          />

          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none z-[2] opacity-40"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              transform: `translate3d(0, ${y * 0.03}px, 0)`,
            }}
          />

          <div
            className="absolute inset-0 z-[3]"
            style={{
              opacity: shown ? 0.7 : 0,
              transform: `translate3d(0, ${shown ? 0 : 30}px, 0) scale(${shown ? 1 : 0.98})`,
              transition: 'opacity 1.2s ease 400ms, transform 1.2s cubic-bezier(0.22,1,0.36,1) 400ms',
            }}
          >
            <SitePlanSVG />
          </div>

          <FloatingStrata
            shown={shown}
            delay={700}
            className="absolute left-[5%] top-[12%] w-[38%]"
            parallax={y * -0.04}
          >
            <GanttCard />
          </FloatingStrata>

          <FloatingStrata
            shown={shown}
            delay={900}
            className="absolute right-[5%] top-[8%] w-[30%]"
            parallax={y * -0.06}
          >
            <AuraAICard />
          </FloatingStrata>

          <FloatingStrata
            shown={shown}
            delay={1100}
            className="absolute left-[8%] bottom-[14%] w-[28%]"
            parallax={y * -0.08}
          >
            <HeatmapCard />
          </FloatingStrata>

          <FloatingStrata
            shown={shown}
            delay={1300}
            className="absolute right-[8%] bottom-[10%] w-[32%]"
            parallax={y * -0.1}
          >
            <FieldPhotoCard />
          </FloatingStrata>

          <Callout shown={shown} delay={1500} top="38%" left="44%" variant="phos">
            <span className="inline-block w-6 h-px bg-current align-middle mr-2" />
            ZONE B — CONVOYEURS · 147% CHARGE
          </Callout>
          <Callout shown={shown} delay={1700} top="58%" left="48%" variant="signal">
            <span className="inline-block w-2 h-2 border border-current rotate-45 align-middle mr-2" />
            RÉSERVE #14 · NON-CONFORME ISM
          </Callout>

          <Ticker />
        </div>

        <div className="flex items-center justify-between pt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
          <span>↳ Interface AURA — projet DPF1 — S43/120</span>
          <span>Rendu 1920×1200 · 60Hz</span>
        </div>
      </Container>
    </div>
  );
}

function FloatingStrata({
  children, className, shown, delay, parallax,
}: {
  children: React.ReactNode;
  className: string;
  shown: boolean;
  delay: number;
  parallax: number;
}) {
  return (
    <div
      className={`${className} z-[5]`}
      style={{
        opacity: shown ? 1 : 0,
        transform: `translate3d(0, ${shown ? parallax : 40}px, 0) scale(${shown ? 1 : 0.96})`,
        transition: `opacity 900ms ease ${delay}ms, transform 900ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.5))',
      }}
    >
      {children}
    </div>
  );
}

function Callout({
  children, top, left, variant, shown, delay,
}: {
  children: React.ReactNode;
  top: string; left: string;
  variant: 'signal' | 'phos';
  shown: boolean; delay: number;
}) {
  return (
    <div
      className={`absolute z-[6] pointer-events-none whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.18em] ${
        variant === 'signal' ? 'text-[var(--signal)]' : 'text-[var(--phos)]'
      }`}
      style={{
        top, left,
        opacity: shown ? 1 : 0,
        transition: `opacity 700ms ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function GlassCard({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <div
      className="relative backdrop-blur-[14px] border rounded-[3px] p-4"
      style={{
        background: accent
          ? 'linear-gradient(135deg, rgba(229,90,31,0.12), rgba(7,7,6,0.85))'
          : 'rgba(17,17,16,0.75)',
        borderColor: accent ? 'rgba(229,90,31,0.35)' : 'var(--void-hair-2)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
    >
      {children}
    </div>
  );
}

function GanttCard() {
  const rows = [
    { task: 'Terrassement', start: 0, w: 100, color: 'var(--ink)' },
    { task: 'Gros œuvre', start: 0, w: 82, color: 'var(--signal)' },
    { task: 'Charpente', start: 18, w: 42, color: 'var(--phos)' },
    { task: 'MEP / Fluides', start: 30, w: 28, color: 'var(--ink-soft)' },
    { task: 'Finitions', start: 58, w: 18, color: 'var(--ink-soft)' },
  ];
  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-[var(--ink-mute)]">§ GANTT · S14—S18</span>
        <span className="font-mono text-[9px] text-[var(--phos)]">68%</span>
      </div>
      <div className="font-display font-medium text-[40px] leading-none -tracking-[0.04em] mb-3" style={{ fontVariationSettings: "'SOFT' 40, 'WONK' 0, 'opsz' 144" }}>
        68<span className="text-[18px] text-[var(--ink-mute)] ml-0.5">%</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {rows.map((r) => (
          <div key={r.task} className="grid grid-cols-[72px_1fr] gap-2 items-center text-[10px] text-[var(--ink-soft)]">
            <span>{r.task}</span>
            <div className="relative h-[5px] bg-[var(--void-hair)] rounded-[1px]">
              <span className="absolute inset-y-0 rounded-[1px]" style={{ left: `${r.start}%`, width: `${r.w}%`, background: r.color }} />
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

function AuraAICard() {
  return (
    <GlassCard accent>
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-[var(--ink-mute)]">§ AURA AI</span>
        <span className="font-mono text-[9px] text-[var(--signal)] animate-[aura-flicker_4s_infinite]">11/11 RÈGLES</span>
      </div>
      <div className="font-display text-[44px] leading-none -tracking-[0.045em] mb-1 flex items-baseline gap-2">
        <em className="italic text-[var(--signal)]" style={{ fontVariationSettings: "'SOFT' 80, 'WONK' 1, 'opsz' 144" }}>3</em>
        <span className="text-[14px] text-[var(--ink-mute)] font-normal">alertes actives</span>
      </div>
      <ul className="flex flex-col gap-1.5 mt-3">
        {([
          ['§01', 'Acier Arcelor', '+48h'],
          ['§02', 'Réserve #14 non-conforme', null],
          ['§03', 'DWR S44 prêt 16:00', null],
        ] as const).map(([i, t, em], k) => (
          <li key={k} className="grid grid-cols-[18px_1fr] gap-2 text-[11px] leading-[1.4] text-[var(--ink-soft)]">
            <span className="font-mono text-[9px] tracking-[0.16em] text-[var(--ink-mute)] mt-0.5">{i}</span>
            <span>{t}{em && <em className="not-italic font-medium text-[var(--signal)]"> {em}</em>}</span>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}

function HeatmapCard() {
  const rows: { l: string; cells: string[] }[] = [
    { l: 'GO', cells: ['s', 's', 'o', 'p', 'ps', 'h', 'h'] },
    { l: 'CH', cells: ['p', 'p', 'p', 'ps', 'h', 'h', 'h'] },
    { l: 'ME', cells: ['h', 'ps', 'p', 'p', 'p', 'ps', 'h'] },
  ];
  const color = (k: string) => ({
    s: 'var(--signal)', o: 'rgba(229,90,31,0.55)',
    p: 'var(--phos)', ps: 'rgba(212,245,66,0.5)',
    h: 'var(--void-hair)',
  }[k]!);

  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-[var(--ink-mute)]">§ COACTIVITÉ</span>
        <span className="font-mono text-[9px] text-[var(--signal)]">PIC L+M</span>
      </div>
      <div className="grid gap-0.5 font-mono text-[9px] grid-cols-[22px_repeat(7,1fr)] text-[var(--ink-mute)]">
        <span />
        {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => <span key={i} className="text-center">{d}</span>)}
        {rows.flatMap((r) => [
          <span key={`${r.l}-lbl`}>{r.l}</span>,
          ...r.cells.map((c, i) => <span key={`${r.l}-${i}`} className="h-3" style={{ background: color(c) }} />),
        ])}
      </div>
      <div className="mt-3 text-[11px] text-[var(--ink-soft)]">147% nominal · équipes L+M</div>
    </GlassCard>
  );
}

function FieldPhotoCard() {
  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-[var(--ink-mute)]">§ RÉSERVE #14 · TERRAIN</span>
        <span className="font-mono text-[9px] text-[var(--signal)]">ISM</span>
      </div>
      <div className="relative aspect-[16/9] overflow-hidden border border-[var(--void-hair)] bg-[linear-gradient(135deg,#2a2520,#0f0d0b)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:14px_14px]" />
        <div className="absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 border border-[var(--signal)]" />
        <div className="absolute top-1/2 left-1/2 w-20 h-px bg-[var(--signal)] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-px h-20 bg-[var(--signal)] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, transparent 30%, rgba(0,0,0,0.6) 80%)' }} />
        <div className="absolute top-2 left-2.5 font-mono text-[9px] tracking-[0.16em] text-[var(--phos)] animate-[aura-pulse_2s_infinite]">● REC 14:23</div>
        <div className="absolute bottom-2 right-2.5 font-mono text-[9px] tracking-[0.16em] text-[var(--ink-soft)]">45.7640N · 04.8357E</div>
      </div>
      <div className="mt-2.5 text-[11px] text-[var(--ink-soft)]">
        Géoloc · DWG joint · <em className="not-italic italic font-display text-[var(--ink)]" style={{ fontVariationSettings: "'SOFT' 60, 'WONK' 1, 'opsz' 144" }}>Karim D.</em>
      </div>
    </GlassCard>
  );
}

function SitePlanSVG() {
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="w-full h-full" aria-hidden>
      <defs>
        <filter id="aura-glow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="sweepGrad" x1="0" x2="1">
          <stop offset="0" stopColor="rgba(229,90,31,0)" />
          <stop offset="0.5" stopColor="rgba(229,90,31,0.25)" />
          <stop offset="1" stopColor="rgba(229,90,31,0)" />
        </linearGradient>
      </defs>

      <g stroke="rgba(229,90,31,0.35)" fill="none" strokeWidth="1">
        <rect x="160" y="110" width="1280" height="680" strokeDasharray="6 6" />
      </g>

      <g stroke="rgba(245,241,234,0.55)" fill="none" strokeWidth="1.4">
        <path d="M280 220 L1320 220 L1320 700 L280 700 Z" />
        <path d="M640 220 L640 700" />
        <path d="M960 220 L960 700" />
        <path d="M280 470 L640 470" />
        <path d="M960 500 L1320 500" />
      </g>

      <g fill="none" stroke="rgba(245,241,234,0.7)" strokeWidth="1">
        {[0, 1, 2, 3].map((c) =>
          [0, 1, 2].map((r) => (
            <rect key={`a-${c}-${r}`} x={320 + c * 72} y={260 + r * 62} width={54} height={42} />
          )),
        )}
      </g>

      <g fill="none" strokeWidth="1">
        {[260, 310, 360].map((y) => (
          <rect key={y} x="690" y={y} width="260" height="32" stroke="rgba(212,245,66,0.8)" fill="rgba(212,245,66,0.05)" />
        ))}
        {[410, 460].map((y) => (
          <rect key={y} x="690" y={y} width="260" height="32" stroke="rgba(245,241,234,0.35)" strokeDasharray="3 3" />
        ))}
      </g>

      <g fill="none" strokeWidth="1">
        <rect x="1000" y="260" width="260" height="170" stroke="rgba(229,90,31,0.75)" strokeDasharray="5 3" fill="rgba(229,90,31,0.05)" />
        {[1040, 1090, 1140, 1190, 1240].map((cx) => (
          <circle key={`p-${cx}`} cx={cx} cy="295" r="11" stroke="rgba(245,241,234,0.7)" />
        ))}
      </g>

      <g stroke="rgba(229,90,31,0.6)" strokeWidth="0.8" fill="rgba(229,90,31,0.95)" fontFamily="var(--font-jetbrains), monospace" fontSize="11" letterSpacing="0.14em">
        <line x1="280" y1="170" x2="1320" y2="170" />
        <line x1="280" y1="160" x2="280" y2="180" />
        <line x1="1320" y1="160" x2="1320" y2="180" />
        <text x="800" y="160" textAnchor="middle">96 000 MM</text>
      </g>

      <g stroke="rgba(229,90,31,0.9)" fill="none" strokeWidth="1">
        <path d="M1130 240 L1130 430" />
        <path d="M1000 345 L1260 345" />
        <circle cx="1130" cy="345" r="28" strokeDasharray="3 3" fill="rgba(229,90,31,0.08)" />
        <circle cx="1130" cy="345" r="2.5" fill="rgba(229,90,31,1)" stroke="none" />
      </g>

      <g style={{ mixBlendMode: 'screen' }}>
        <rect x="-200" y="110" width="160" height="680" fill="url(#sweepGrad)" style={{ animation: 'aura-sweep 7s linear infinite' }} />
      </g>

      <g filter="url(#aura-glow)">
        <circle cx="520" cy="280" r="3" fill="#D4F542">
          <animate attributeName="r" values="3;12;3" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0;1" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="820" cy="330" r="3" fill="#D4F542">
          <animate attributeName="r" values="3;12;3" dur="2.8s" begin="0.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0;1" dur="2.8s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="1130" cy="345" r="4" fill="#E55A1F">
          <animate attributeName="r" values="4;16;4" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0;1" dur="1.8s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

function Ticker() {
  const items = [
    '● AURA AI · 11 règles',
    'ACIER ARCELOR +48H',
    'DWR S43 · 16:00',
    'RÉSERVE #14 · ISM',
    'CHARGE L+M · 147%',
    'PORTAIL CLIENT · 3 VUES',
  ];
  const doubled = [...items, ...items];
  return (
    <div className="absolute inset-x-0 bottom-0 h-[36px] z-[7] flex items-center overflow-hidden border-t border-[var(--void-hair)] bg-[rgba(7,7,6,0.92)] font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-soft)]">
      <span className="flex-shrink-0 px-4 h-full flex items-center bg-[var(--signal)] text-[var(--void)] font-semibold tracking-[0.22em]">
        LIVE /
      </span>
      <div className="flex gap-12 pl-6 whitespace-nowrap" style={{ animation: 'aura-marquee 42s linear infinite' }}>
        {doubled.map((t, i) => (
          <span key={i}>{t}<span className="text-[var(--signal)] mx-2">·</span></span>
        ))}
      </div>
    </div>
  );
}

function MetricsRail() {
  const { ref, shown } = useReveal<HTMLDivElement>(0.2);
  const cells = [
    { label: '§ TEMPS RÉCUPÉRÉ', num: '68', unit: '%', em: 'rendue', tail: 'au chef de chantier.' },
    { label: '§ DWR CONFORME', num: '<24', unit: 'h', em: 'auto-généré', tail: ', signé, envoyé.' },
    { label: '§ RÈGLES IA', num: '11', unit: '', em: 'en continu', tail: ' — moteur AURA.' },
    { label: '§ TABLEURS', num: '00', unit: '', em: 'définitivement', tail: ' — Excel partagé.' },
  ];

  return (
    <div ref={ref} className="relative z-10">
      <Container>
        <div className="mt-16 mb-20 grid gap-px grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[var(--void-hair)] border-y border-[var(--void-hair)]">
          {cells.map((c, i) => (
            <div
              key={c.label}
              className="bg-[var(--void)] px-6 py-8 flex flex-col gap-3"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 700ms ease ${i * 120}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${i * 120}ms`,
              }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--ink-mute)]">
                {c.label}
              </span>
              <span
                className="font-display font-normal text-[56px] leading-none -tracking-[0.045em]"
                style={{ fontVariationSettings: "'SOFT' 40, 'WONK' 0, 'opsz' 144" }}
              >
                {c.num}
                {c.unit && <span className="text-[22px] text-[var(--ink-mute)] ml-1">{c.unit}</span>}
              </span>
              <span className="text-[13px] text-[var(--ink-soft)] leading-[1.5] max-w-[28ch]">
                <em
                  className="italic text-[var(--signal)] font-display"
                  style={{ fontVariationSettings: "'SOFT' 80, 'WONK' 1, 'opsz' 144" }}
                >
                  {c.em}
                </em>
                {c.tail}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-full max-w-[1440px] mx-auto px-6 md:px-10 xl:px-14 ${className}`}>
      {children}
    </div>
  );
}
