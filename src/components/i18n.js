import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../locales/en/translation.json';
import translationRU from '../locales/ru/translation.json';
import translationUZ from '../locales/uz/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  uz: {
    translation: translationUZ
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // if translation not found, fallback to English

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
