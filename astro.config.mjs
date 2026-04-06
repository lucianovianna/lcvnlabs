// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  base: '/lcvnlabs', // remover quando domínio custom estiver apontado
  output: 'static',
  site: 'https://lucianovianna.github.io',
});
