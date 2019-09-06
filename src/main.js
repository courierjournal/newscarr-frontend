import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import _ from "lodash";
import { default as notification } from "@/assets/components/notification/index.js";
import "@/assets/styles/main.less";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.prototype.$notification = notification;
