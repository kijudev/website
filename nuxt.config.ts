// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@nuxtjs/i18n"],
    css: ["~/assets/css/main.css"],
    i18n: {
        vueI18n: "~/i18n/config.ts",
        strategy: "prefix_except_default",
        locales: ["en", "pl"],
        defaultLocale: "en",
    },
});
