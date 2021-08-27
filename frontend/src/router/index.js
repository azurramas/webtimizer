import { createRouter, createMemoryHistory } from "vue-router";
const Main = () => import("../views/Main.vue");
const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
