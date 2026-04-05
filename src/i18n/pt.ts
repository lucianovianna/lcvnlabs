export const pt = {
  nav: {
    about: 'Sobre',
    stack: 'Stack',
    projects: 'Projetos',
    contact: 'Contato',
  },
  hero: {
    title: 'Luciano Vianna',
    role: 'Desenvolvedor Full Stack',
    tagline: 'Transformo ideias em produtos digitais — do backend ao frontend.',
  },
  about: {
    heading: 'Sobre mim',
    bio: [
      'Sou desenvolvedor full stack com experiência em construção de aplicações web escaláveis e de alto desempenho.',
      'Trabalho tanto em projetos CLT quanto freelance, com foco em entregar valor real para o negócio.',
      'Apaixonado por código limpo, boas práticas e ferramentas modernas.',
    ],
  },
  stack: {
    heading: 'Stack Técnica',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      data: 'Dados',
      devops: 'DevOps / Infra',
    },
  },
  projects: {
    heading: 'Projetos',
    repo: 'Repositório',
    demo: 'Demo',
    items: [
      {
        name: 'lcvnlabs',
        description: 'Este portfólio — desenvolvido com Astro, Vue e Naive UI.',
        stack: ['Astro', 'Vue', 'Naive UI'],
        repo: 'https://github.com/lucianovianna/lcvnlabs',
      },
    ],
  },
  contact: {
    heading: 'Contato',
    intro: 'Aberto a oportunidades CLT, freela e projetos de produto.',
  },
};

export type I18n = typeof pt;
