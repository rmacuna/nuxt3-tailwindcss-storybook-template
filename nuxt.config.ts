// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    config: {
      content(contentDefaults) {
        return [
          ...contentDefaults,
          "./components/**/*.stories.{vue,js,ts}",
          "./stories/**/*.{vue,js,ts}",
          "./dick/**/*.{vue,js,ts}",
        ];
      },
    },
  },
});
