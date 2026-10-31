# lcvnlabs — direção visual

## Decisões aprovadas

Paleta petróleo, símbolo B2 (L sugerido pelo contorno assimétrico do frasco,
V integrado ao interior), Inter e portfólio bilíngue com temas claro/escuro.
Manter Astro, CSS nativo e conteúdo profissional real.

| Papel | Claro | Escuro |
| --- | --- | --- |
| Fundo | `#F8FAFC` | `#0F172A` |
| Superfície | `#FFFFFF` | `#1E293B` |
| Texto | `#0F172A` | `#F1F5F9` |
| Secundário | `#475569` | `#CBD5E1` |
| Ação | `#0F766E` | `#5EEAD4` |
| Texto sobre ação | `#FFFFFF` | `#0F172A` |

Conteúdo com largura máxima de 1080px; títulos com hierarquia forte; bordas
discretas; raios de 8px para ações e 4px para tags. Controles com pelo menos
44px de altura. Conteúdo visível por padrão, sem animação de entrada obrigatória.

## Composição

Cabeçalho com marca e navegação, apresentação compacta com ação para projetos,
experiência com resultados, projetos/casos, stack em quatro categorias e contato.
No celular, navegação por disclosure nativo, sem modal ou armadilha de foco.

Referências de organização consultadas: [Lee Robinson](https://leerob.com/)
(conteúdo direto) e [Rauno Freiberg](https://rauno.me/) (hierarquia e identidade).
A paleta e a marca são as escolhas feitas nesta conversa, não cópias dessas páginas.

## Alvo visual e verificação

[Composição gerada](docs/design/target.png), 946 × 1663 pixels, inspecionada antes
da implementação. Ferramenta: imagegen integrada. Prompt: página desktop com
paleta petróleo, Inter, cinco seções reais, experiência em PostgreSQL e contato;
sem fotos, gradientes, terminal fictício ou clientes inventados.

Correções necessárias no alvo: usar o SVG B2 exato, o ano atual e as tecnologias
do projeto (a imagem acrescentou Python, ClickHouse e Tailwind, entre outras
substituições). O texto final recebe revisão gramatical. Esses detalhes da imagem
não constituem fatos do produto. Não se promete equivalência pixel a pixel.

Validar 320/390/768/946/1440px, PT/EN, claro/escuro, teclado, menu móvel,
persistência, armazenamento indisponível, conteúdo sem JavaScript e preferência
por movimento reduzido. O caso interno de PostgreSQL vem da bio existente e não
recebe links de repositório ou demonstração inexistentes.
