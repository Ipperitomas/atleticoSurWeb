// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,

  app: {
    head: {
      title: 'Sitio Oficial - Atlético Sur Gualeguaychú',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ],
    },
  },

  nitro: {
    preset: 'static'
  },

  runtimeConfig: {
    public: {
      apiBase: ''
    }
  },

  css: [
    '~/assets/css/main.css'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ]
})
