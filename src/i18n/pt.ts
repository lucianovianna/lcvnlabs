export const pt = {
  nav: {
    about: 'Sobre',
    stack: 'Stack',
    projects: 'Projetos',
    contact: 'Contato',
  },
  hero: {
    title: 'Luciano Vianna',
    role: 'Engenheiro de Software Sênior · Full Stack',
    tagline: 'Construindo software que você pode confiar.',
  },
  about: {
    heading: 'Sobre mim',
    bio: [
      'Engenheiro de Software Sênior com mais de 5 anos de experiência em backend e modelagem de dados, atuando em sistemas críticos do setor elétrico regulatório.',
      'Especializado em PostgreSQL — análise de plano de execução, criação de índices e refatoração de queries — com impacto comprovado: reduzi em 70% o tempo de carregamento de um dashboard gerencial de alto uso. Lidero tecnicamente uma squad de 4 pessoas responsável por 3 sistemas internos multitenant.',
      'Stack principal: Laravel (PHP), Vue.js, PostgreSQL, Redis, AWS e Docker.',
    ],
  },
  stack: {
    heading: 'Stack Técnica',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Banco de dados',
      devops: 'Infra & Cloud',
    },
  },
  projects: {
    heading: 'Projetos',
    repo: 'Repositório',
    demo: 'Demo',
    items: [
      {
        name: 'lcvnlabs',
        description: 'Este portfólio — desenvolvido com Astro e TypeScript.',
        stack: ['Astro', 'TypeScript'],
        repo: 'https://github.com/lucianovianna/lcvnlabs',
      },
    ],
  },
  contact: {
    heading: 'Contato',
    intro: 'Aberto a oportunidades remotas como engenheiro backend sênior — CLT, PJ ou freela.',
  },
};

export type I18n = typeof pt;
