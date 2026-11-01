# Princípios

- Seguir YAGNI e KISS no código e na comunicação; responder de forma curta e direta.
- Fazer mudanças pequenas e focadas, preservando Astro e CSS nativo; evitar dependências, migrações e abstrações sem necessidade da tarefa.
- Manter baixo acoplamento e alta coesão na estrutura existente.
- Escrever novos identificadores e comentários em inglês; comunicar e documentar em português. Manter o conteúdo do site em PT/EN sincronizado em `src/i18n/`.
- Usar Node.js >=22.12 e npm; preservar `package-lock.json` em tarefas sem mudança de dependências.
- Seguir `DESIGN.md` nas mudanças visuais e usar apenas informações profissionais verificadas, sem inventar resultados ou links.
- Preservar responsividade, temas claro/escuro, navegação por teclado e conteúdo acessível sem JavaScript; tratar indisponibilidade de armazenamento nas preferências.
- Para mudanças de código, executar `npm run build` e validar os fluxos afetados conforme `docs/design/verification.md`. Informar o que foi verificado e eventuais limitações. Não há scripts de teste ou lint; quando existirem, aplicar TDD a regras e bugs testáveis e executar testes e lint sem correções automáticas.
- Atualizar o README quando a mudança afetar seu conteúdo; criar documentação adicional em `docs/` apenas quando necessário.
