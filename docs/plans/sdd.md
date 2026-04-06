# SDD — Portfólio Pessoal

## 1. Visão Geral

Site de portfólio pessoal com foco em apresentação profissional como **Engenheiro de Software Sênior · Full Stack**, atraindo oportunidades remotas de emprego (CLT, PJ, freela). O site transmite clareza e competência através de um design minimalista, com suporte bilíngue (PT/EN) e dark mode.

---

## 2. Stack

| Camada | Tecnologia |
|---|---|
| Framework | [Astro](https://astro.build/) — SSG (output: static) |
| Estilo | CSS nativo com variáveis CSS (`src/styles/global.css`) |
| Interatividade | Scripts inline (`is:inline`) — sem framework JS |
| Tipografia | Inter (Google Fonts) |
| Hospedagem | GitHub Pages |
| CI/CD | GitHub Actions |

> **Sem Vue, sem Naive UI.** Os únicos dois componentes interativos (toggle de tema e toggle de idioma) são `<button>` nativos com lógica em script inline. Isso elimina ~117 pacotes e mantém o bundle praticamente zero.

---

## 3. Estrutura de Arquivos

```
src/
├── components/
│   └── sections/
│       ├── Hero.astro
│       ├── Sobre.astro
│       ├── Stack.astro
│       ├── Projetos.astro
│       └── Contato.astro
├── i18n/
│   ├── index.ts       — useI18n(), exporta pt e en
│   ├── pt.ts          — strings em português (fonte da verdade de tipos)
│   └── en.ts          — strings em inglês (tipada via typeof pt)
├── layouts/
│   └── Base.astro     — <html>, <head>, meta tags, IIFE de tema, fade-in observer
├── pages/
│   └── index.astro    — single page, header, main, footer, script inline de i18n/tema
└── styles/
    └── global.css     — variáveis CSS, reset, layout, dark/light mode, fade-in
```

---

## 4. Single Page — Seções

O site é **single page** (sem rotas separadas). Navegação por âncoras (`#sobre`, `#stack`, `#projetos`, `#contato`).

### Header (fixo)
- Logo `lcvnlabs`
- Nav com âncoras (bilíngue via `data-i18n`)
- `<button id="theme-toggle">` — alterna ☾/☀, persiste em `localStorage`
- `<button id="lang-toggle">` — alterna PT/EN, persiste em `localStorage`

### Hero
- Nome: Luciano Vianna
- Role: "Engenheiro de Software Sênior · Full Stack" / "Senior Software Engineer · Full Stack"
- Tagline: "Construindo software que você pode confiar." / "Building software you can rely on."
- Links: GitHub e LinkedIn

### Sobre (`#sobre`)
- Bio em 3 parágrafos: experiência, especialização em PostgreSQL (impacto de 70%), stack principal
- Bilíngue

### Stack Técnica (`#stack`)
- Grade por categoria: Backend, Banco de dados, Frontend, Infra & Cloud
- Tecnologias atuais: Laravel (PHP), NestJS, Node.js · PostgreSQL, Redis, Supabase · Vue.js, TypeScript, Astro · AWS, Docker, GitHub Actions

### Projetos (`#projetos`)
- 1 projeto no ar: `lcvnlabs` (este portfólio)
- Card: nome, descrição, stack (tags), link para repositório

### Contato (`#contato`)
- Intro de abertura (bilíngue)
- Links: GitHub e LinkedIn

---

## 5. Internacionalização (i18n)

**Estratégia SSG + script inline:**

1. `index.astro` renderiza com PT por padrão (SSG)
2. `define:vars={{ translations }}` injeta ambos os objetos de tradução no HTML
3. Todo elemento traduzível recebe `data-i18n="dot.path.key"` (ex: `data-i18n="about.bio.0"`)
4. Script inline executa no carregamento: lê `localStorage('locale')`, chama `applyLocale()`
5. Clique no `#lang-toggle` atualiza `localStorage`, chama `applyLocale()` diretamente

**Arquivos:**
- `src/i18n/pt.ts` — fonte da verdade; `export type I18n = typeof pt`
- `src/i18n/en.ts` — tipado via `I18n`, TypeScript garante paridade de chaves
- `src/i18n/index.ts` — exporta `useI18n(locale)`, `pt`, `en`

---

## 6. Dark Mode

**Estratégia anti-flash:**

1. IIFE em `<head>` (antes de qualquer CSS) lê `localStorage('theme')` e aplica `html.dark` ou `html.light` antes do primeiro paint
2. `global.css` define vars nas classes `html.dark` e `html.light` (maior especificidade que `@media prefers-color-scheme`)
3. Fallback automático para preferência do sistema se não houver valor em localStorage
4. Paleta dark: zinc-900 (`#18181b` base) — suave, sem o preto puro

---

## 7. Design

| Atributo | Decisão |
|---|---|
| Estilo | Minimalista / clean |
| Modo de cor | Light + Dark (toggle manual + fallback `prefers-color-scheme`) |
| Paleta dark | Zinc-900: bg `#18181b`, surface `#27272a`, text `#fafafa`, accent `#60a5fa` |
| Tipografia | Inter (Google Fonts) |
| Animações | Fade-in ao scroll via Intersection Observer (`.fade-in` → `.fade-in.visible`) |
| Responsividade | Mobile-first, max-width 900px, padding inline |
| Largura máxima | `--max-width: 900px` via variável CSS |

---

## 8. Repositório

| Atributo | Decisão |
|---|---|
| Nome | `lcvnlabs` |
| Branch principal | `main` |
| Branch de trabalho | `develop` |
| Visibilidade | Público (exigido pelo GitHub Pages gratuito) |
| Licença | MIT (código) — conteúdo com copyright reservado |

> `base: '/lcvnlabs'` em `astro.config.mjs` enquanto domínio customizado não estiver apontado.

---

## 9. CI/CD e Deploy

```
develop → PR → main → GitHub Actions → astro build → deploy para gh-pages
```

- Build: `astro build` → output `dist/`
- HTTPS: habilitado automaticamente pelo GitHub Pages
- Domínio custom: pendente (`CNAME` a configurar)

---

## 10. Requisitos Não-Funcionais

- Lighthouse score alvo: **≥ 90** em Performance, Acessibilidade e SEO
- Meta tags: `title`, `description`, `og:title`, `og:description`, `og:type`
- Zero dependências de backend ou banco de dados
- Bundle JS mínimo — sem framework JS no cliente

---

## 11. Fora de Escopo (v1)

- Blog / artigos
- Formulário de contato com backend
- CMS
- Analytics (Plausible ou similar — pós-lançamento)
- Foto na seção Sobre

---

## 12. Status e Próximos Passos

### Concluído
- [x] Repositório público com licença MIT
- [x] GitHub Actions para deploy automático
- [x] Single page com 5 seções
- [x] Suporte bilíngue PT/EN via `data-i18n` + script inline
- [x] Dark mode com toggle manual e persistência em `localStorage`
- [x] Conteúdo alinhado ao perfil real (bio, stack, tagline)
- [x] Remoção de Vue/Naive UI — stack simplificada para Astro puro

### Pendente
- [ ] Apontar domínio customizado para GitHub Pages e remover `base: '/lcvnlabs'`
- [ ] Adicionar projetos reais além do portfólio
- [ ] Foto na seção Sobre (opcional)
- [ ] Testes de Lighthouse pós-deploy
