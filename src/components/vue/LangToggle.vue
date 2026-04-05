<script setup lang="ts">
import { ref, provide } from 'vue';
import type { Locale } from '../../i18n/index';

const locale = ref<Locale>(
  (typeof localStorage !== 'undefined' && (localStorage.getItem('locale') as Locale)) || 'pt'
);

function toggle() {
  locale.value = locale.value === 'pt' ? 'en' : 'pt';
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('locale', locale.value);
  }
  // Emite evento global para que outros componentes Vue possam reagir
  window.dispatchEvent(new CustomEvent('locale-change', { detail: locale.value }));
}

provide('locale', locale);
</script>

<template>
  <button class="lang-toggle" @click="toggle" :aria-label="`Switch to ${locale === 'pt' ? 'English' : 'Português'}`">
    {{ locale === 'pt' ? 'EN' : 'PT' }}
  </button>
</template>

<style scoped>
.lang-toggle {
  background: none;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 0.25rem 0.6rem;
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-muted);
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
  letter-spacing: 0.05em;
}

.lang-toggle:hover {
  color: var(--color-text);
  border-color: var(--color-text);
}
</style>
