import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./request";
import VueI18n from "vue-i18n";
import { Lazyload, Toast, Sku } from "vant";
import "./registerServiceWorker";
import "amfe-flexible";
import "@/styles/base.less";
import "vant/lib/button/style";

Vue.use(Toast);
// options 为可选参数，无则不传
Vue.use(Lazyload);
Vue.use(Sku);
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "zh",
  messages: {
    zh: require("@/i18/zh.json"),
    en: require("@/i18/en.json")
  }
});

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
