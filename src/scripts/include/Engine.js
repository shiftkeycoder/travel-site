import Vue from "./Vue";
import App from "./App.vue";
import VueWaypoint from 'vue-waypoint';
import VueLazyload from 'vue-lazyload';

Vue.use(VueWaypoint);
Vue.use(VueLazyload);
export default class Engine {
  constructor() {
  }
  hotInject() {
    if (module.hot) {
      module.hot.accept();
    }
  }
  vueInit() {
   new Vue({
    el: "#app",
    render: h => h(App)
   });
  }
 

}