export default defineNuxtConfig({
  app: {
    head: {
      title: "Vue - Momentum",
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Polish Football League standings and team information",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  css: ["@/assets/css/tailwind.css"],
  pinia: {
    storesDirs: ["./stores/**"],
  },

  devtools: { enabled: true },

  compatibilityDate: "2025-03-14",
});
