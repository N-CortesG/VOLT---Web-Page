import es from './es';
import en from './en';

export type Lang = 'es' | 'en';

const translations = { es, en };

export function getTranslation(lang: Lang) {
  return translations[lang] ?? translations['es'];
}
