// const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const {initReactI18next } = require('react-i18next');
const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
    defaultLanguage: 'en-US',
    otherLanguages: ['zh-CN'],
    cleanCode: true,
    localePath: typeof window === 'undefined' ? 'public/locales' : 'locales',
    // localeSubpaths,
    // localeSubpaths: {
    //     'zh-CN': 'cn',
    //     'en-US': 'en',
    // }
    use: [initReactI18next],
});