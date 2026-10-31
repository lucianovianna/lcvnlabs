import type { I18n } from './pt';

export const en: I18n = {
  ui: {
    navigation: 'Main navigation',
    menu: 'Menu',
    skip: 'Skip to content',
    home: 'lcvnlabs: home',
    light: 'Switch to light theme',
    dark: 'Switch to dark theme',
    language: 'Mudar para português',
    top: 'Back to top',
    title: 'Luciano Vianna | Senior Full Stack Developer — lcvnlabs',
    description: 'Luciano Vianna’s portfolio. Senior full stack developer focused on backend development, PostgreSQL and Vue, with experience in business applications and software for the electric utility sector.',
  },
  nav: { about: 'About', stack: 'Stack', projects: 'Projects', contact: 'Contact' },
  hero: {
    title: 'Luciano Vianna',
    role: 'Senior Full Stack Developer',
    tagline: 'I build web applications with a focus on backend and data.',
    action: 'View projects',
    focus: 'Business and regulatory applications',
    context: 'Software for indicators, reporting and workflows in the electric utility sector.',
  },
  about: {
    heading: 'About me',
    bio: [
      'I have over 5 years of experience in full stack web development, with a focus on backend. My work includes data modeling and PostgreSQL query optimization.',
      'I work on systems for the electric utility sector that consolidate and validate indicators, generate reports and support regulatory monitoring. I also develop an internal project management application.',
    ],
    results: [
      { value: '70%', label: 'reduction in loading time for a management dashboard.' },
      { value: 'Regulation', label: 'implementing business rules based on electric utility regulations.' },
    ],
  },
  stack: {
    heading: 'Tech stack',
    intro: 'Technologies and tools I use in my daily work.',
    categories: { frontend: 'Frontend', backend: 'Backend', database: 'Database', devops: 'Infra & Cloud' },
  },
  projects: {
    heading: 'Projects',
    intro: 'My portfolio and a few projects I built while learning.',
    repo: 'Repository',
    demo: 'Demo',
    items: [
      {
        name: 'lcvnlabs',
        description: 'My portfolio, built with Astro and TypeScript.',
        stack: ['Astro', 'TypeScript'],
        repo: 'https://github.com/lucianovianna/lcvnlabs',
        repoLabel: 'View the lcvnlabs repository on GitHub',
      },
      {
        name: 'Pokédex',
        description: 'A Pokédex with search, sorting and Pokémon details using the PokéAPI. I built it as a junior developer and later returned to the code to improve accessibility and error handling.',
        stack: ['Vue.js', 'PokéAPI', 'Vite'],
        repo: 'https://github.com/lucianovianna/pokedex-vuejs',
        repoLabel: 'View the Pokédex repository on GitHub',
      },
      {
        name: 'Expense Tracker',
        description: 'I built this expense tracking app to try Flutter before my first software development job.',
        stack: ['Flutter', 'Dart'],
        repo: 'https://github.com/lucianovianna/expense-tracker-app',
        repoLabel: 'View the Expense Tracker repository on GitHub',
      },
    ],
  },
  contact: {
    heading: 'Let’s talk',
    intro: 'Get in touch about software development, projects or job opportunities.',
    action: 'Connect on LinkedIn',
  },
};
