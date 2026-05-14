export const languages = {
  es: 'ES', en: 'EN', fr: 'FR', ca: 'CA',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'hero.role':        'Ingeniero Full Stack | Especialista en IA',
    'hero.cta':         'Ver proyectos',
    'nav.experience':   'Experiencia',
    'nav.projects':     'Proyectos',
    'nav.contact':      'Contacto',
    'experience.legal.description':
      'Lideré el ecosistema Front-End: migración a React 18, RBAC con 180+ checks vía CASL y lazy loading sobre 70+ rutas. Reducción del bundle inicial en un 40%.',
    'experience.frontera.description':
      'Desarrollé internal tools y dashboards para gestión dinámica de activos digitales. Cada herramienta nació de entrevistas directas con el equipo de negocio.',
    'contact.heading':  'Hablemos',
    'contact.cta':      'Enviar mensaje',
    'thanks.message':   'Mensaje recibido. Te respondo en menos de 48 h.',
    'thanks.back':      'Volver al inicio',
  },
  en: {
    'hero.role':        'Full Stack Engineer | AI Workflow Specialist',
    'hero.cta':         'View projects',
    'nav.experience':   'Experience',
    'nav.projects':     'Projects',
    'nav.contact':      'Contact',
    'experience.legal.description':
      'Led the Front-End ecosystem: React 18 migration, RBAC with 180+ checks via CASL, and lazy loading across 70+ routes. 40% reduction in initial bundle size.',
    'experience.frontera.description':
      'Built internal tools and dashboards for dynamic digital asset management. Every tool was shaped by direct interviews with the business team.',
    'contact.heading':  "Let's talk",
    'contact.cta':      'Send message',
    'thanks.message':   "Message received. I'll reply within 48 hours.",
    'thanks.back':      'Back to home',
  },
  fr: {
    'hero.role':        'Ingénieur Full Stack | Spécialiste des flux IA',
    'hero.cta':         'Voir les projets',
    'nav.experience':   'Expérience',
    'nav.projects':     'Projets',
    'nav.contact':      'Contact',
    'experience.legal.description':
      "Pilotage de l'écosystème Front-End : migration React 18, RBAC avec 180+ vérifications via CASL et lazy loading sur 70+ routes. Réduction du bundle initial de 40 %.",
    'experience.frontera.description':
      "Développement d'outils internes et de dashboards pour la gestion dynamique d'actifs numériques, conçus à partir d'entretiens directs avec les équipes métier.",
    'contact.heading':  'Parlons-en',
    'contact.cta':      'Envoyer le message',
    'thanks.message':   'Message reçu. Je vous réponds sous 48 h.',
    'thanks.back':      "Retour à l'accueil",
  },
  ca: {
    'hero.role':        'Enginyer Full Stack | Especialista en IA',
    'hero.cta':         'Veure projectes',
    'nav.experience':   'Experiència',
    'nav.projects':     'Projectes',
    'nav.contact':      'Contacte',
    'experience.legal.description':
      "Vaig liderar l'ecosistema Front-End: migració a React 18, RBAC amb 180+ checks via CASL i lazy loading a 70+ rutes. Reducció del bundle inicial en un 40%.",
    'experience.frontera.description':
      "Vaig desenvolupar eines internes i dashboards per a la gestió dinàmica d'actius digitals, dissenyats a partir d'entrevistes directes amb l'equip de negoci.",
    'contact.heading':  'Parlem',
    'contact.cta':      'Enviar missatge',
    'thanks.message':   'Missatge rebut. Et respondré en menys de 48 h.',
    'thanks.back':      "Tornar a l'inici",
  },
} as const;

export type UiKey = keyof typeof ui[typeof defaultLang];
