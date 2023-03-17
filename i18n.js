import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    debug: process.env.NODE_ENV !== 'production',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    defaultLocale: 'en',
    locales: ['en', 'nl'],
  });

export default i18n;