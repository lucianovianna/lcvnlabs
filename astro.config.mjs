// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  base: '/lcvnlabs', // remover quando domínio custom estiver apontado
  output: 'static',
  site: 'https://lucianovianna.github.io',
});
