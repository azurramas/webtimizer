import { createRouter, createMemoryHistory } from "vue-router";
import Main from "../views/Main.vue";
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
