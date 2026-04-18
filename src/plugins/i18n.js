import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import es from '@/locales/es.json';

const systemLocale = navigator.language.split('-')[0];

const locale = ['en', 'es'].includes(systemLocale) ? systemLocale : 'en';

export const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'en',
  messages: {
    en,
    es,
  },
});
