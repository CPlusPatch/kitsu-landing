import VueMatomo from 'vue-matomo'

export default defineNuxtPlugin(nuxtapp => {
  nuxtapp.vueApp.use(VueMatomo, {
    router: app.router,
    host: "https://analytics.kitsu.life",
    siteId: 2,
    requireCookieConsent: true,
  


    /** Other configuration options **/
  })
})
