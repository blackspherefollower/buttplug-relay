import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
const Icon = require("vue-awesome/components/Icon");
const VueTouch = require("vue-touch");
import * as ButtplugPanel from "vue-buttplug-material-component";
import Router from "vue-router";
import Relay from "./components/Relay.vue";
import Landing from "./components/Landing.vue";

// Fix viewport scaling on iOS
require("viewport-units-buggyfill").init();

Vue.use(Router);
Vue.use(VueTouch);
Vue.use(Vuetify);
Vue.use(ButtplugPanel);
Vue.component("icon", Icon);

const router = new Router({
    routes: [
        {
            path: "/:room",
            component: Relay,
        },
        {
            path: "/",
            component: Landing,
        },
    ],
});

// tslint:disable-next-line no-unused-expression
new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
});
