<script setup lang="ts">
import { ref, onMounted } from 'vue';

type Theme = 'light' | 'dark';

const theme = ref<Theme>('light');

onMounted(() => {
  theme.value = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
});

function toggle() {
  const next: Theme = theme.value === 'dark' ? 'light' : 'dark';
  theme.value = next;
  localStorage.setItem('theme', next);
  document.documentElement.classList.toggle('dark', next === 'dark');
  document.documentElement.classList.toggle('light', next === 'light');
}
</script>

<template>
  <button
    class="theme-toggle"
    @click="toggle"
    :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
  >
    {{ theme === 'dark' ? '☀' : '☾' }}
  </button>
</template>

<style scoped>
.theme-toggle {
  background: none;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 0.25rem 0.6rem;
  font-size: 0.85rem;
  color: var(--color-muted);
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
  line-height: 1;
}

.theme-toggle:hover {
  color: var(--color-text);
  border-color: var(--color-text);
}
</style>
