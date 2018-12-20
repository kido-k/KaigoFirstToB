const pkg = require('./package')

module.exports = {
  mode: 'universal',
  srcDir: 'app',

  head: {
    title: 'KAIGO FIRST',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    script: [{ src: 'https://unpkg.com/ionicons/dist/ionicons.js', body: true }]
  },

  loading: { color: '#fff' },

  css: [],

  plugins: [],

  modules: ['@nuxtjs/axios', 'bootstrap-vue/nuxt'],

  axios: {
    baseURL: 'https://ask-caremanager.firebaseio.com'
  },

  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
