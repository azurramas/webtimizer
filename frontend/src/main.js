import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import wails runtime
import * as Wails from "@wailsapp/runtime";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

Wails.Init(() => {
  createApp(App)
    .use(Quasar, quasarUserOptions)
    .use(store)
    .use(router)
    .mount("#app");
});
