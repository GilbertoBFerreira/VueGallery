import Vue from 'vue'
import App from './App.vue'
import VueGallery from 'vue-gallery'

Vue.component('VGallery', VueGallery)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
