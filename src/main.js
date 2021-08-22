import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import draggable from "vuedraggable";

Vue.config.productionTip = false;
new Vue({
  router,
  draggable,
  store,
  render: (h) => h(App),
}).$mount("#app");
