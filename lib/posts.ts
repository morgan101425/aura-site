/**
 * Source des articles du journal AURA.
 * Pour ajouter un article : créer une entrée ici.
 * Dans une v1 plus avancée, on migrera vers MDX dans content/.
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Produit' | 'Terrain' | 'Méthodologie' | 'Vision';
  date: string; // ISO
  readingMinutes: number;
  body: { heading?: string; paragraphs: string[] }[];
}

export const POSTS: BlogPost[] = [
  {
    slug: 'pourquoi-aura',
    title: 'Pourquoi AURA existe — et pourquoi Excel n’a jamais été la bonne réponse',
    excerpt:
      'Retour sur la genèse d’AURA : un chef de chantier, un dimanche soir, et un Excel corrompu pour la troisième fois du mois.',
    category: 'Vision',
    date: '2026-04-10',
    readingMinutes: 6,
    body: [
      {
        paragraphs: [
          'Il y a trois ans, un dimanche soir, j’ai passé quatre heures à reconstruire un fichier Excel de suivi de chantier. Quatre heures pour un document que deux personnes allaient lire — dont moi. C’est là que l’idée d’AURA est née.',
          'Les outils de gestion de projet existants n’étaient pas faits pour le BTP industriel. Les ERP étaient trop lourds, MS Project trop rigide, les outils no-code trop génériques. Et Excel, bien sûr, continuait à tout faire — mal.',
        ],
      },
      {
        heading: 'Ce qui différencie un chantier industriel',
        paragraphs: [
          'Un chantier industriel d’installation de machines, ce n’est pas un projet de développement logiciel. C’est une chorégraphie entre des électriciens, des mécaniciens, des ISM, des livraisons qui glissent, des clients qui veulent des reportings hebdos au format imposé.',
          'Aucun outil générique ne peut répondre à ça. Soit il est trop souple et vos équipes ne l’utilisent pas, soit il est trop rigide et il casse au premier imprévu.',
        ],
      },
      {
        heading: 'La réponse d’AURA',
        paragraphs: [
          'AURA est pensé avec la contrainte inverse : partir des livrables que vos clients attendent (Daily Report, Weekly Plan, Punch List), et remonter jusqu’à la donnée minimale qu’un chef de chantier doit saisir pour les produire.',
          'Résultat : une saisie unique, des rapports générés automatiquement au format attendu, et du temps rendu au chef de chantier pour faire son vrai métier — diriger.',
        ],
      },
    ],
  },
  {
    slug: 'aura-ai-11-regles',
    title: 'Les 11 règles qu’AURA AI applique pour détecter les dérives',
    excerpt:
      'Démystification du moteur d’analyse de risques d’AURA. Aucune boîte noire : chaque alerte est explicable et actionnable.',
    category: 'Produit',
    date: '2026-03-28',
    readingMinutes: 9,
    body: [
      {
        paragraphs: [
          'Quand on parle d’IA dans le BTP, deux réactions : soit du scepticisme (« encore un gadget »), soit de l’enthousiasme aveugle (« ça va tout remplacer »). AURA AI n’est ni l’un ni l’autre. C’est un moteur de règles expertes, transparent et actionnable.',
        ],
      },
      {
        heading: 'Une échelle de sévérité claire',
        paragraphs: [
          'Chaque insight est classé sur une échelle à 4 niveaux : CRITIQUE, ALERTE, AVERTISSEMENT, BON. Pas de score opaque entre 0 et 100 dont personne ne comprend la formule. Un chef de chantier doit pouvoir décider en trois secondes : « j’agis maintenant » ou « je note, j’y reviens ».',
        ],
      },
      {
        heading: 'Des règles qui viennent du terrain',
        paragraphs: [
          'Les 11 règles actuelles couvrent les dérives classiques : chemin critique qui glisse, déséquilibre de charge, tâches qui stagnent au même statut depuis trop longtemps, risques de coactivité non anticipés, ratio de punch list qui explose en fin de phase.',
          'Chacune a été dérivée de situations réelles rencontrées sur des chantiers d’installation industrielle. Aucune règle n’a été inventée par un data scientist qui n’a jamais mis les pieds sur un plateau.',
        ],
      },
    ],
  },
  {
    slug: 'methodologie-aura',
    title: 'La méthodologie AURA — comment on conçoit un outil pour le terrain',
    excerpt:
      'Les principes qui guident le développement d’AURA : propre, pas de hack, prend le temps qu’il faut.',
    category: 'Méthodologie',
    date: '2026-03-15',
    readingMinutes: 5,
    body: [
      {
        paragraphs: [
          'Trois règles guident le développement d’AURA : propre, pas de hack, et prendre le temps qu’il faut. Ça semble évident. Ça ne l’est pas.',
        ],
      },
      {
        heading: 'Propre',
        paragraphs: [
          'Chaque module est isolé, testé, documenté. Aucun spaghetti entre les vues. Les 28 fichiers de la v1.0 ont été conçus pour qu’un développeur qui rejoint l’équipe puisse ouvrir n’importe lequel et comprendre son rôle en moins de 5 minutes.',
        ],
      },
      {
        heading: 'Pas de hack',
        paragraphs: [
          'Quand on rencontre un cas limite, on refactore. On ne rajoute pas un `if` de plus dans une fonction qui en contient déjà six. C’est plus long au début, mais infiniment plus rapide après — parce que le bug suivant se répare en dix minutes, pas en deux jours.',
        ],
      },
      {
        heading: 'Prendre le temps qu’il faut',
        paragraphs: [
          'La v1.0 a demandé plusieurs mois de plus que prévu. Et c’est tant mieux. Un produit qui s’installe dans le quotidien de chefs de chantier mérite qu’on ne bâcle pas sa conception.',
        ],
      },
    ],
  },
];
