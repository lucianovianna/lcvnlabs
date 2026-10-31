# Verificação do redesign

## Resultado

Implementado em Astro, sem novas dependências, na branch `feat/ui-redesign`.
A paleta petróleo e o símbolo B2 aprovados foram aplicados ao cabeçalho,
favicon SVG/ICO, links, ações e temas. As cinco seções foram reorganizadas
para apresentar experiência e resultados antes da stack.

O caso interno de PostgreSQL usa fatos da bio anterior: análise de planos de
execução, índices, refatoração de queries e redução de 70% no carregamento.
Não há demonstração ou repositório fictício para esse caso.

## Ambiente e métodos

Build de produção (`npm run build`), servido localmente em
`http://127.0.0.1:4173/`. Node.js 24.14.1, Chromium 156.0.8078.4 headless via Chrome DevTools
Protocol, fonte Inter carregada. Larguras CSS emuladas, escala 1, sem barras de
rolagem nas capturas. Toque sintetizado por Chromium, sem dispositivo físico.

O [alvo gerado](target.png), de 946 × 1663 pixels, foi inspecionado antes do código.
A comparação considerou hierarquia, composição, paleta e tipos de controle.
O render usa a marca B2 exata, as tecnologias reais e o ano atual; revisa a redação
e amplia controles para 44px. O comprimento final da página difere do alvo.
Não é uma declaração de equivalência pixel a pixel.

O [prompt de geração](generation-prompt.md) foi preservado junto ao alvo.

## Verificações concluídas

| Verificação | Cobertura |
| --- | --- |
| Build | Instalação com `npm ci`, build final e `git diff --check` |
| Layout | 320, 390, 768, 946 e 1440px; sem overflow horizontal; cabeçalho dentro da tela |
| Temas e idiomas | PT/EN e claro/escuro nas cinco larguras; tradução de texto, nomes acessíveis e metadados |
| Navegação por teclado | Link de salto, foco no conteúdo, links/ações; menu com Enter, Espaço, Escape e foco no destino |
| Menu móvel | Abertura, navegação, fechamento por Escape, clique externo e mudança para desktop |
| Toque emulado | Menu, âncora de projetos, idioma e tema |
| Persistência | EN e tema escuro mantidos após recarregar |
| Armazenamento bloqueado | Sem exceção; toggles continuam funcionando na visita |
| Preferências inválidas | Valores desconhecidos recuperam PT e tema do sistema |
| Tema do sistema | Mudanças acompanhadas até haver seleção manual |
| Movimento reduzido | Rolagem automática, sem transição de botão e sem animação de entrada |
| Sem JavaScript | Cinco seções visíveis, links e menu nativo; toggles não funcionais ocultos |
| Contraste de texto | Cores computadas e fundo efetivo dos textos renderizados; mínimo 5,01:1 claro e 6,97:1 escuro |
| Voltar ao topo | Retorna ao início; âncora no documento, fora do cabeçalho sticky |
| Runtime | Sem exceções JavaScript durante os fluxos verificados |

As observações brutas estão em [layout](evidence/layout-observations.json),
[interação](evidence/interaction-observations.json) e
[contraste](evidence/contrast-observations.json).

## Capturas

- [Desktop claro, português](evidence/1440-light-pt.png)
- [Desktop escuro, inglês](evidence/1440-dark-en.png)
- [Celular claro, português](evidence/390-light-pt.png)
- [Celular escuro, inglês](evidence/390-dark-en.png)
- [Tela estreita de 320px](evidence/320-light-pt.png)
- [Tablet de 768px](evidence/768-light-pt.png)
- [Comparação na largura do alvo](evidence/946-light-pt.png)
- [Render no viewport exato de 946 × 1663](evidence/946-target-viewport.png)
- [Menu móvel](evidence/mobile-menu.png)
- [Sem JavaScript](evidence/no-javascript.png)

Recibo com hashes de fontes, alvo e capturas: [visual-evidence.json](evidence/visual-evidence.json).
A checagem de integridade da skill ui-taste passou: 18 verificações declaradas e
37 referências a arquivos conferidas. Esse resultado valida a integridade das
evidências, não substitui a inspeção visual ou os testes de interação.

## Limites

Não foram executados leitor de tela real, Safari/Firefox, testes em aparelho
físico, ampliação de texto, Lighthouse ou perfil de desempenho. O contraste
medido cobre textos nos estados registrados, não certifica conformidade geral.
A fonte continua externa (Google Fonts), com fallback de sistema.

## Como repetir manualmente

1. Executar `npm ci`, `npm run build` e `npm run preview`.
2. Abrir as cinco larguras em claro/PT e escuro/EN e percorrer todas as seções.
3. Navegar com Tab; usar o link de salto; abrir o menu com Enter/Espaço e fechar
   com Escape. Selecionar uma seção e confirmar foco/visibilidade do destino.
4. Alternar tema e idioma, recarregar e conferir persistência, rótulos e idioma
   declarado em `html`.
5. Repetir com armazenamento indisponível, JavaScript desabilitado e preferência
   por movimento reduzido, distinguindo esses três cenários.
6. Conferir “Voltar ao topo” a partir do rodapé e guardar novas capturas após
   alterações. Mudanças nos arquivos de interface invalidam os hashes anteriores.
