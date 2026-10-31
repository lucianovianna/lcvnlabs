export const pt = {
  ui: {
    navigation: 'Navegação principal',
    menu: 'Menu',
    skip: 'Pular para o conteúdo',
    home: 'lcvnlabs: início',
    light: 'Ativar tema claro',
    dark: 'Ativar tema escuro',
    language: 'Switch to English',
    top: 'Voltar ao topo',
    title: 'Luciano Vianna | Desenvolvedor Full Stack Sênior — lcvnlabs',
    description: 'Portfólio de Luciano Vianna, desenvolvedor full stack sênior com foco em backend, PostgreSQL e Vue. Experiência em sistemas de gestão e aplicações para o setor elétrico.',
  },
  nav: { about: 'Sobre', stack: 'Stack', projects: 'Projetos', contact: 'Contato' },
  hero: {
    title: 'Luciano Vianna',
    role: 'Desenvolvedor Full Stack Sênior',
    tagline: 'Desenvolvo aplicações web com foco em backend e dados.',
    action: 'Ver projetos',
    focus: 'Sistemas de gestão e regulação',
    context: 'Aplicações para indicadores, relatórios e rotinas do setor elétrico.',
  },
  about: {
    heading: 'Sobre mim',
    bio: [
      'Tenho mais de 5 anos de experiência em desenvolvimento web full stack, com foco em backend. Trabalho com modelagem de dados e otimização de consultas PostgreSQL.',
      'Trabalho com sistemas para o setor elétrico que consolidam e validam indicadores, geram relatórios e apoiam o acompanhamento regulatório. Também desenvolvo uma aplicação interna de gestão de projetos.',
    ],
    results: [
      { value: '70%', label: 'de redução no tempo de carregamento de um dashboard gerencial.' },
      { value: 'Regulação', label: 'implementação de regras de negócio baseadas em normativas do setor elétrico.' },
    ],
  },
  stack: {
    heading: 'Stack técnica',
    intro: 'Tecnologias e ferramentas que uso no dia a dia.',
    categories: { frontend: 'Frontend', backend: 'Backend', database: 'Banco de dados', devops: 'Infra & Cloud' },
  },
  projects: {
    heading: 'Projetos',
    intro: 'Meu portfólio e alguns projetos de estudo.',
    repo: 'Repositório',
    demo: 'Demo',
    items: [
      {
        name: 'lcvnlabs',
        description: 'Meu portfólio em Astro e TypeScript.',
        stack: ['Astro', 'TypeScript'],
        repo: 'https://github.com/lucianovianna/lcvnlabs',
        repoLabel: 'Ver repositório de lcvnlabs no GitHub',
      },
      {
        name: 'Pokédex',
        description: 'Pokédex com busca, ordenação e detalhes de Pokémon usando a PokéAPI. Criei o projeto quando era dev júnior e depois voltei ao código para melhorar a acessibilidade e o tratamento de erros.',
        stack: ['Vue.js', 'PokéAPI', 'Vite'],
        repo: 'https://github.com/lucianovianna/pokedex-vuejs',
        repoLabel: 'Ver repositório da Pokédex no GitHub',
      },
      {
        name: 'Expense Tracker',
        description: 'Criei este aplicativo de controle de despesas para testar Flutter, antes do meu primeiro emprego em desenvolvimento.',
        stack: ['Flutter', 'Dart'],
        repo: 'https://github.com/lucianovianna/expense-tracker-app',
        repoLabel: 'Ver repositório do Expense Tracker no GitHub',
      },
    ],
  },
  contact: {
    heading: 'Vamos conversar?',
    intro: 'Entre em contato para falar sobre desenvolvimento de software, projetos ou oportunidades de trabalho.',
    action: 'Conversar no LinkedIn',
  },
};

export type I18n = typeof pt;
