import { pt } from './pt';
import { en } from './en';

export type Locale = 'pt' | 'en';

const translations = { pt, en } as const;

export function useI18n(locale: Locale) {
  return translations[locale];
}

export { pt, en };
