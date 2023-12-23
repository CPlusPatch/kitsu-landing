import Vue from 'vue'
import VueMatomo from 'vue-matomo'

export default ({ app }) => {
  Vue.use(VueMatomo, {
    router: app.router,
    host: "https://analytics.kitsu.life",
    siteId: 2,
    requireCookieConsent: true,
  


    /** Other configuration options **/
  })
}