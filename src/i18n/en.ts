import type { I18n } from './pt';

export const en: I18n = {
  ui: {
    navigation: 'Main navigation',
    menu: 'Menu',
    skip: 'Skip to content',
    home: 'lcvnlabs — home',
    light: 'Switch to light theme',
    dark: 'Switch to dark theme',
    language: 'Mudar para português',
    top: 'Back to top',
    title: 'Luciano Vianna — Senior Software Engineer | lcvnlabs',
    description: 'Backend, data and reliability. Explore Luciano Vianna’s work with Laravel, PostgreSQL and Vue on critical systems in the Brazilian electric utility sector.',
  },
  nav: { about: 'About', stack: 'Stack', projects: 'Projects', contact: 'Contact' },
  hero: {
    title: 'Luciano Vianna',
    role: 'Senior Software Engineer · Full Stack',
    tagline: 'Backend, data and software you can rely on.',
    action: 'View projects',
    focus: 'Backend with purpose.',
    context: 'Critical systems in the Brazilian electric utility sector.',
  },
  about: {
    heading: 'Experience that delivers results.',
    bio: [
      'Over 5 years building critical systems, with a focus on backend, data and reliability.',
    ],
    results: [
      { value: '70%', label: 'less loading time on a management dashboard.' },
      { value: '4 people', label: 'in the squad I lead technically, responsible for 3 multitenant internal systems.' },
    ],
  },
  stack: {
    heading: 'Tech stack',
    intro: 'Technologies and tools I work with.',
    categories: { frontend: 'Frontend', backend: 'Backend', database: 'Database', devops: 'Infra & Cloud' },
  },
  projects: {
    heading: 'Projects and experience',
    intro: 'A selection of what I build and the problems I help solve.',
    repo: 'Repository',
    demo: 'Demo',
    case: {
      context: 'Professional experience · internal system',
      title: 'PostgreSQL performance',
      challenge: 'Improve the response time of a high-usage management dashboard.',
      contribution: 'Execution plan analysis, index creation and query refactoring.',
      contributionLabel: 'My contribution',
      result: '-70%',
      resultLabel: 'in loading time',
    },
    items: [
      {
        name: 'lcvnlabs',
        description: 'This portfolio — built with Astro and TypeScript.',
        stack: ['Astro', 'TypeScript'],
        repo: 'https://github.com/lucianovianna/lcvnlabs',
        repoLabel: 'View the lcvnlabs repository on GitHub',
      },
    ],
  },
  contact: {
    heading: 'Let’s talk.',
    intro: 'About software engineering, projects or opportunities.',
    action: 'Connect on LinkedIn',
  },
};
