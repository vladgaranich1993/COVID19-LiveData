import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueBasicAutocomplete from 'vue-basic-autocomplete';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
 
Vue.use(VueBasicAutocomplete)

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
