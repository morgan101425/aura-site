import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette AURA — editorial-industriel
        bg: {
          DEFAULT: '#F5F1EA',   // fond crème chaud (papier)
          raised: '#EFEAE0',    // cartes légèrement élevées
          deep: '#0E0E0C',      // sections sombres / footer
        },
        ink: {
          DEFAULT: '#1A1815',   // anthracite profond (texte)
          soft: '#3D3A34',      // texte secondaire
          muted: '#6B6760',     // meta, légendes
          line: '#D4CFC4',      // traits, divisions
        },
        accent: {
          DEFAULT: '#E55A1F',   // orange sécurité BTP
          hover: '#D24E18',
          soft: '#F9E4D6',      // fonds d'accent très clairs
        },
        safety: {
          yellow: '#F5C518',    // jaune chantier (réserve)
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Échelle éditoriale
        'display-1': ['clamp(3.5rem, 8vw, 6.5rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'display-2': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-3': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        'content': '1280px',
        'prose-wide': '72ch',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fadeIn 0.8s ease-out both',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'blueprint-grid':
          'linear-gradient(to right, rgba(26,24,21,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,24,21,0.04) 1px, transparent 1px)',
        'noise':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        'grid-sm': '24px 24px',
        'grid-md': '48px 48px',
      },
    },
  },
  plugins: [],
};

export default config;
