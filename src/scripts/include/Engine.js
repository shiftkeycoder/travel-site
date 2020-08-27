import Vue from "./Vue";
import App from "./App.vue";
import VueWaypoint from 'vue-waypoint';

Vue.use(VueWaypoint);
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