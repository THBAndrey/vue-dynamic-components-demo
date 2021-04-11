import Vue from "vue";
import App from "./App.vue";

import "./css/animations/fade.css";
import "./css/animations/slide.css";
import "./css/animations/slide-top.css";
import "./css/animations/slide-right.css";
import "./css/animations/slide-bottom.css";

import VueDynamicComponents from "vue-dynamic-components";
Vue.use(VueDynamicComponents);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
