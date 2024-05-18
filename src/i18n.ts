import i18next from 'i18next'

export const getI18n = async (lang = 'en') => {
  i18next.init({
    lng: lang,
    resources: {
      [lang]: {
        translation: await import(`./locales/${lang}.json`),
      },
    },
  });
  return i18next
}