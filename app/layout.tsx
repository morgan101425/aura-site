import type { Metadata } from 'next';
import { Fraunces, Geist, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';

/* --------------------------------------------------------------------------
   Polices — toutes via next/font/google (self-hosted, zero layout shift)
   -------------------------------------------------------------------------- */

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  style: ['normal', 'italic'],
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
  display: 'swap',
});

/* --------------------------------------------------------------------------
   Metadata SEO
   -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  metadataBase: new URL('https://aura-site-git-main-morgan101425s-projects.vercel.app'),
  title: {
    default: 'AURA — La supervision de chantier industriel, enfin au niveau',
    template: '%s · AURA',
  },
  description:
    "AURA remplace les tableurs éparpillés et les rapports du dimanche soir. Kanban, Gantt, rapports automatisés, portail client, IA d'analyse — l'outil pensé pour les chefs de chantier industriel.",
  keywords: [
    'supervision chantier',
    'logiciel BTP industriel',
    'gestion de chantier',
    'suivi installation machine',
    'rapport journalier chantier',
    'alternative Excel chantier',
    'portail client BTP',
    'Gantt chantier',
    'site manager industriel',
  ],
  authors: [{ name: 'AURA' }],
  creator: 'AURA',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'AURA',
    title: 'AURA — Supervision de chantier industriel',
    description:
      "L'outil de pilotage des chantiers industriels qui remplace vos tableurs, WhatsApp et rapports manuels.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AURA — Supervision de chantier industriel',
    description:
      "L'outil de pilotage des chantiers industriels qui remplace vos tableurs, WhatsApp et rapports manuels.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* --------------------------------------------------------------------------
   Root Layout
   -------------------------------------------------------------------------- */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${geist.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
