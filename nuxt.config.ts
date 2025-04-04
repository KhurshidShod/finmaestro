// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  app: {
    head: {
      link: [
        {rel: "icon", type: "image/svg+xml", href: "/favicon.svg"}
      ]
    }
  },
  devtools: { enabled: true },
  css: ["~/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/styles/_mixins" as *;`,
        },
      },
    },
  },
});
