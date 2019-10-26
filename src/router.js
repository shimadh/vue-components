import Vue from "vue";
import VueRouter from "vue-router";

import Dashboard from "./components/Dashboard.vue";
import Login from "./components/Login.vue";
import Profile from "./components/Profile.vue";
import NotFound from "./components/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Dashboard },
  { path: "/login", component: Login },
  { path: "/profile", component: Profile },
  { path: "*", component: NotFound }
];

export default new VueRouter({
  mode: "history",
  routes
});
