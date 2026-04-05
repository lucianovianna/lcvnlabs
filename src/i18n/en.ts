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
    role: 'Full Stack Developer',
    tagline: 'Turning ideas into digital products — from backend to frontend.',
  },
  about: {
    heading: 'About me',
    bio: [
      'I am a full stack developer with experience building scalable and high-performance web applications.',
      'I work on both full-time and freelance projects, focused on delivering real business value.',
      'Passionate about clean code, best practices, and modern tooling.',
    ],
  },
  stack: {
    heading: 'Tech Stack',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      data: 'Data',
      devops: 'DevOps / Infra',
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
    intro: 'Open to full-time, freelance, and product opportunities.',
  },
};
