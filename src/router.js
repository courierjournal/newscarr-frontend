import Vue from "vue";
import Router from "vue-router";
import Home from "./apps/Home/Home.vue";
import apps from "./apps/apps.json";

Vue.use(Router);

//Dynamically create routes from our apps.json config
let routes = apps.map(n => {
  return {
    path: n.path,
    name: n.name,
    meta: { description: n.description, title: n.title },
    component: () => import("./apps/" + n.component)
  };
});

//Remove the 'Test' app if we're in production
if (process.env.NODE_ENV === "production") {
  routes.shift();
}

//Make sure we push the home component as the first route available
routes.unshift({
  path: "/",
  name: "Home",
  meta: { description: "Newscarr homepage" },
  component: Home
});

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
