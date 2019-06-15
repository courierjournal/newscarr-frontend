import Vue from "vue";
import Router from "vue-router";
import Home from "./apps/Home/index.vue";
import apps from "./apps/apps.json";

Vue.use(Router);

//Dynamically create routes from our apps.json config
let routes = apps.map(n => {
  return { path: n.path, component: () => import("./apps/" + n.component) };
});

//Make sure we push the home component as the first route available
routes.unshift({
  path: "/",
  name: "home",
  component: Home
});

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
