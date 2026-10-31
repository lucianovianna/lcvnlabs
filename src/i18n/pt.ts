export const pt = {
  ui: {
    navigation: 'Navegação principal',
    menu: 'Menu',
    skip: 'Pular para o conteúdo',
    home: 'lcvnlabs — início',
    light: 'Ativar tema claro',
    dark: 'Ativar tema escuro',
    language: 'Switch to English',
    top: 'Voltar ao topo',
    title: 'Luciano Vianna — Engenheiro de Software Sênior | lcvnlabs',
    description: 'Backend, dados e confiabilidade. Conheça o trabalho de Luciano Vianna com Laravel, PostgreSQL e Vue em sistemas críticos do setor elétrico regulatório.',
  },
  nav: { about: 'Sobre', stack: 'Stack', projects: 'Projetos', contact: 'Contato' },
  hero: {
    title: 'Luciano Vianna',
    role: 'Engenheiro de Software Sênior · Full Stack',
    tagline: 'Backend, dados e software em que você pode confiar.',
    action: 'Ver projetos',
    focus: 'Backend com propósito.',
    context: 'Sistemas críticos no setor elétrico regulatório.',
  },
  about: {
    heading: 'Experiência que vira resultado.',
    bio: [
      'Mais de 5 anos desenvolvendo sistemas críticos, com foco em backend, dados e confiabilidade.',
    ],
    results: [
      { value: '70%', label: 'menos tempo de carregamento em um dashboard gerencial.' },
      { value: '4 pessoas', label: 'na squad que lidero tecnicamente, responsável por 3 sistemas internos multitenant.' },
    ],
  },
  stack: {
    heading: 'Stack técnica',
    intro: 'Tecnologias e ferramentas que fazem parte do meu trabalho.',
    categories: { frontend: 'Frontend', backend: 'Backend', database: 'Banco de dados', devops: 'Infra & Cloud' },
  },
  projects: {
    heading: 'Projetos e experiências',
    intro: 'Um pouco do que construo e dos problemas que ajudo a resolver.',
    repo: 'Repositório',
    demo: 'Demo',
    case: {
      context: 'Experiência profissional · sistema interno',
      title: 'Performance em PostgreSQL',
      challenge: 'Melhorar o tempo de resposta de um dashboard gerencial de alto uso.',
      contribution: 'Análise de planos de execução, criação de índices e refatoração de queries.',
      contributionLabel: 'Minha contribuição',
      result: '-70%',
      resultLabel: 'no tempo de carregamento',
    },
    items: [
      {
        name: 'lcvnlabs',
        description: 'Este portfólio — desenvolvido com Astro e TypeScript.',
        stack: ['Astro', 'TypeScript'],
        repo: 'https://github.com/lucianovianna/lcvnlabs',
        repoLabel: 'Ver repositório de lcvnlabs no GitHub',
      },
    ],
  },
  contact: {
    heading: 'Vamos conversar?',
    intro: 'Para falar sobre engenharia de software, projetos ou oportunidades.',
    action: 'Conversar no LinkedIn',
  },
};

export type I18n = typeof pt;
