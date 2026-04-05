# SDD — Portfólio Pessoal

## 1. Visão Geral

Site de portfólio pessoal com foco em apresentação profissional como **Desenvolvedor Full Stack**, atraindo oportunidades de emprego CLT, freela e clientes de produto. O site deve transmitir clareza e competência através de um design minimalista.

---

## 2. Stack

| Camada | Tecnologia |
|---|---|
| Framework | [Astro](https://astro.build/) |
| UI Components | [Naive UI](https://www.naiveui.com/) (via `@astrojs/vue`) |
| Estilo complementar | CSS nativo / variáveis CSS |
| Hospedagem | GitHub Pages |
| CI/CD | GitHub Actions |
| Domínio | Custom domain via `CNAME` no repositório |

> **Obs.:** Naive UI requer a integração oficial `@astrojs/vue`. Componentes Vue ficam isolados em `.vue` files; o restante do site usa `.astro` puro para máxima performance estática.

---

## 3. Estrutura de Páginas

O site é **single page** (sem rotas separadas). A navegação é feita por âncoras (`#sobre`, `#stack`, `#projetos`, `#contato`).

### 3.1 Seções (em ordem)

#### Hero
- Nome completo
- Título: "Desenvolvedor Full Stack"
- Frase curta de posicionamento (tagline)
- Links rápidos: GitHub e LinkedIn
- Suporte bilíngue: PT | EN (toggle de idioma)

#### Sobre (`#sobre`)
- Bio curta (2–3 parágrafos)
- Foto opcional
- Conteúdo bilíngue

#### Stack Técnica (`#stack`)
- Grade visual com tecnologias dominadas
- Agrupadas por categoria (Frontend, Backend, Dados, DevOps/Infra)
- Ícones via [Simple Icons](https://simpleicons.org/) ou similar

#### Projetos (`#projetos`)
- Cards por projeto contendo:
  - Nome e descrição curta
  - Stack utilizada (tags)
  - Link para repositório e/ou demo (quando aplicável)
- Mínimo 3 projetos no lançamento
- Conteúdo bilíngue

#### Contato (`#contato`)
- Links para GitHub e LinkedIn
- E-mail opcional (pode ser exibido como texto simples ou botão `mailto:`)

---

## 4. Internacionalização (i18n)

- Idiomas: **Português (pt-BR)** e **Inglês (en)**
- Estratégia: arquivo de strings centralizado (ex: `src/i18n/pt.ts` e `src/i18n/en.ts`)
- Toggle de idioma no header — sem redirecionamento de rota, apenas troca reativa de conteúdo via estado Vue
- Idioma padrão: `pt-BR`

---

## 5. Design

| Atributo | Decisão |
|---|---|
| Estilo | Minimalista / clean |
| Modo de cor | Light (com suporte a dark mode via preferência do sistema, opcional) |
| Tipografia | Sans-serif moderna (ex: Inter) |
| Animações | Sutis — fade-in de seções ao scroll (Intersection Observer) |
| Responsividade | Mobile-first, breakpoints: `sm`, `md`, `lg` |

---

## 6. Repositório

| Atributo | Decisão |
|---|---|
| Nome | `lcvnlabs` |
| Visibilidade | Público (exigido pelo GitHub Pages gratuito) |
| Licença | MIT (código) |
| Conteúdo | Textos, design e projetos com copyright reservado — nota no README |

> **Obs.:** O nome `lcvnlabs` alinha repositório e domínio. Enquanto o domínio customizado não estiver apontado, configurar `base: '/lcvnlabs'` no `astro.config.mjs` (remover depois).

---

## 7. CI/CD e Deploy

```
main branch → GitHub Actions → build Astro → deploy para gh-pages branch
```

- Build command: `astro build`
- Output dir: `dist/`
- Domínio custom: configurar `CNAME` com o domínio adquirido
- HTTPS: habilitado automaticamente pelo GitHub Pages

---

## 8. Requisitos Não-Funcionais

- Lighthouse score alvo: **≥ 90** em Performance, Acessibilidade e SEO
- Meta tags básicas de SEO (`title`, `description`, `og:*`)
- Sem dependências de backend ou banco de dados
- Tempo de carregamento inicial: < 2s em conexão 4G

---

## 9. Fora de Escopo (v1)

- Blog / artigos
- Formulário de contato com backend
- Autenticação
- CMS
- Analytics (pode ser adicionado depois com Plausible ou similar)

---

## 10. Próximos Passos

- [x] Criar repositório público `lcvnlabs` no GitHub com licença MIT
- [ ] Adicionar nota de copyright no README separando código do conteúdo
- [ ] Inicializar projeto com `npm create astro@latest`
- [ ] Adicionar integração Vue: `npx astro add vue`
- [ ] Instalar Naive UI: `npm install naive-ui`
- [ ] Configurar GitHub Actions para deploy automático
- [ ] Apontar domínio customizado para GitHub Pages
- [ ] Implementar seções na ordem definida
- [ ] Revisar conteúdo bilíngue antes de publicar
