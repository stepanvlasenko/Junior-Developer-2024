// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'use-credentials',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'
        },
      ],
    },
  },
  alias: {
    '@types': path.join(__dirname, 'assets', 'ts', 'types.ts'),
    '@timeApi': path.join(__dirname, 'assets', 'ts', 'timeApi.ts'),
    '@citiesApi': path.join(__dirname, 'assets', 'ts', 'citiesApi.ts'),
  },
  modules: ['@nuxt/ui'],
})


