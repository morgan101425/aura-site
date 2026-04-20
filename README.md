# AURA — Site de présentation

Site marketing d'AURA, la supervision de chantier industriel. Next.js 15 + React 19 + Tailwind + TypeScript.

**Direction design** : editorial-industriel. Fraunces (serif expressif) + Geist (sans-serif précis) + JetBrains Mono. Palette crème chaud / anthracite / orange sécurité BTP. Grille blueprint discrète, annotations typographiques type plan technique.

---

## 🚀 Démarrage

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le serveur de dev

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

### 3. Build de production

```bash
npm run build
npm start
```

### Prérequis

- **Node.js ≥ 20**
- npm (ou pnpm / yarn, au choix)

---

## 📦 Déploiement Vercel

Même workflow qu'AURA :

1. Créer un nouveau repo GitHub `aura-landing`
2. `git init && git add . && git commit -m "feat: initial landing"`
3. `git remote add origin git@github.com:<ton-compte>/aura-landing.git`
4. `git push -u origin main`
5. Sur [vercel.com](https://vercel.com) → Import Project → sélectionner le repo
6. Vercel détecte automatiquement Next.js. Aucune variable d'environnement requise pour l'instant.
7. Déployé.

**Domaine** : une fois déployé, tu peux brancher `aura-btp.com` (ou autre) dans Settings → Domains.

---

## 🗂 Structure

```
aura-landing/
├── app/
│   ├── layout.tsx              # Layout racine + polices + SEO global
│   ├── page.tsx                # Landing (assemblage des sections)
│   ├── globals.css             # Design tokens + utilitaires Tailwind
│   ├── not-found.tsx           # Page 404 éditoriale
│   ├── fonctionnalites/        # Détail par module
│   ├── cas-usage/              # 3 scénarios terrain
│   ├── tarifs/                 # 3 plans + FAQ
│   ├── contact/                # Formulaire de contact
│   ├── demander-demo/          # Formulaire qualifié de démo
│   └── blog/
│       ├── page.tsx            # Index journal
│       └── [slug]/page.tsx     # Template article
├── components/
│   ├── nav.tsx                 # Navigation sticky + mobile
│   ├── footer.tsx              # Footer sombre
│   ├── page-header.tsx         # En-tête de page réutilisable
│   └── sections/
│       ├── hero.tsx            # Hero + mockup dashboard SVG
│       ├── problem-solution.tsx # Tableau Avant / Après AURA
│       ├── features.tsx        # 6 modules en grille
│       ├── proof.tsx           # Logos + métriques + témoignage
│       ├── roadmap.tsx         # Timeline V1.1 / V1.5 / V2
│       └── cta.tsx             # CTA final sombre
├── lib/
│   ├── cn.ts                   # Utilitaire merge de classes
│   └── posts.ts                # Données des articles de blog
├── public/                     # Assets statiques (images, favicon, etc.)
├── tailwind.config.ts          # Design tokens AURA
├── postcss.config.mjs
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🎨 Design tokens

Tout est dans `tailwind.config.ts` et `app/globals.css` — utiliser les classes Tailwind qui exposent les tokens :

### Couleurs

- `bg` (crème chaud #F5F1EA) / `bg-raised` / `bg-deep` (anthracite pour sections sombres)
- `ink` (anthracite #1A1815) / `ink-soft` / `ink-muted` / `ink-line`
- `accent` (orange sécurité #E55A1F) / `accent-hover` / `accent-soft`

### Typographie

- `font-display` → Fraunces (titres, italics expressives via `.font-display-wonk`)
- `font-sans` → Geist (corps de texte)
- `font-mono` → JetBrains Mono (annotations techniques, éyelids)

### Classes utilitaires custom

- `.container-x` — container standard (max-w-content + padding responsive)
- `.blueprint-tag` — petit tag technique avec liseré
- `.section-label` — label éditorial uppercase mono
- `.btn-primary` / `.btn-secondary` / `.btn-ghost`
- `.link-editorial` — lien avec underline animé
- `.texture-paper` — léger gradient radial type papier
- `.bg-blueprint-grid` — grille technique discrète
- `.animate-fade-up` / `.stagger-children` — révélations au scroll

---

## ✏️ Personnalisation rapide

### Modifier le contenu

- **Hero** → `components/sections/hero.tsx`
- **Tableau Avant/Après** → `components/sections/problem-solution.tsx` (constante `ROWS`)
- **Fonctionnalités** → `components/sections/features.tsx` (constante `FEATURES`)
- **Logos clients** → `components/sections/proof.tsx` (constante `CLIENT_LOGOS` — remplacer par SVG/PNG dans `/public` puis utiliser `<Image>`)
- **Métriques** → `components/sections/proof.tsx` (constante `METRICS`)
- **Roadmap** → `components/sections/roadmap.tsx` (constante `ROADMAP`)
- **Plans tarifaires** → `app/tarifs/page.tsx` (constante `PLANS`)
- **Articles de blog** → `lib/posts.ts` (ajouter une entrée dans `POSTS`)

### Ajouter un article de blog

Ouvrir `lib/posts.ts` et ajouter une entrée :

```ts
{
  slug: 'mon-nouvel-article',
  title: 'Titre de l\'article',
  excerpt: 'Accroche en une phrase.',
  category: 'Produit', // 'Produit' | 'Terrain' | 'Méthodologie' | 'Vision'
  date: '2026-05-01',
  readingMinutes: 5,
  body: [
    {
      paragraphs: ['Premier paragraphe...', 'Deuxième paragraphe...'],
    },
    {
      heading: 'Section avec titre',
      paragraphs: ['...'],
    },
  ],
}
```

La page `/blog/mon-nouvel-article` est automatiquement générée (SSG via `generateStaticParams`).

---

## 🔧 Étapes suivantes suggérées

- [ ] Remplacer les logos clients textuels par de vrais SVG/PNG dans `/public/logos/`
- [ ] Ajouter un favicon dans `/public/favicon.ico` + `/public/apple-touch-icon.png`
- [ ] Brancher les formulaires (contact, demander-demo) sur Resend / Formspree / une route API Next.js
- [ ] Créer `/app/mentions-legales/page.tsx`, `/app/confidentialite/page.tsx`, `/app/cgv/page.tsx`
- [ ] Ajouter un Open Graph image (`/public/og.png`, 1200×630)
- [ ] Configurer Plausible ou Vercel Analytics
- [ ] Créer une `sitemap.ts` et `robots.ts` dans `/app/` pour le SEO

---

## 📐 Philosophie

Même principe qu'AURA : **propre, pas de hack, prend le temps qu'il faut**.

- Chaque section est un composant isolé et remplaçable
- Le contenu est dans les constantes, séparé de la structure
- Aucune dépendance externe au-delà du strict nécessaire
- Les animations sont CSS-only (pas de framer-motion)
- Les images seront toutes via `next/image` pour l'optimisation

---

## 🛠 Stack

- [Next.js 15](https://nextjs.org) — App Router, SSG/ISR
- [React 19](https://react.dev)
- [TypeScript 5](https://www.typescriptlang.org)
- [Tailwind CSS 3.4](https://tailwindcss.com)
- [Lucide React](https://lucide.dev) — icônes
- [Fraunces](https://fonts.google.com/specimen/Fraunces) / [Geist](https://vercel.com/font) / [JetBrains Mono](https://www.jetbrains.com/lp/mono/) — via `next/font/google`

---

Fait avec rigueur à Lyon.
