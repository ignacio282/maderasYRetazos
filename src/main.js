import './firebase';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";




Vue.config.productionTip = false;
import './assets/css/app.scss';

Vue.component('navBar',require('./components/navBar.vue').default);
Vue.component('tarjetaProd',require('./components/tarjetaProducto.vue').default);
Vue.component('foot',require('./components/footer.vue').default);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
