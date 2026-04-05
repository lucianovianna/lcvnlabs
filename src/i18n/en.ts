import type { I18n } from './pt';

export const en: I18n = {
  nav: {
    about: 'About',
    stack: 'Stack',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    title: 'Luciano Vianna',
    role: 'Senior Software Engineer · Full Stack',
    tagline: 'Building software you can rely on.',
  },
  about: {
    heading: 'About me',
    bio: [
      'Senior Software Engineer with over 5 years of experience in backend development and data modeling, working on critical systems in the Brazilian electric utility sector.',
      'Specialized in PostgreSQL—execution plan analysis, index creation, and query refactoring—with proven impact: reduced a high-usage management dashboard\'s loading time by 70%. Currently leading a 4-person engineering squad responsible for 3 multitenant internal systems.',
      'Core stack: Laravel (PHP), Vue.js, PostgreSQL, Redis, AWS, and Docker.',
    ],
  },
  stack: {
    heading: 'Tech Stack',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      devops: 'Infra & Cloud',
    },
  },
  projects: {
    heading: 'Projects',
    repo: 'Repository',
    demo: 'Demo',
    items: [
      {
        name: 'lcvnlabs',
        description: 'This portfolio — built with Astro, Vue, and Naive UI.',
        stack: ['Astro', 'Vue', 'Naive UI'],
        repo: 'https://github.com/lucianovianna/lcvnlabs',
      },
    ],
  },
  contact: {
    heading: 'Contact',
    intro: 'Open to remote opportunities as a senior backend engineer — full-time, contract, or freelance.',
  },
};
