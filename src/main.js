import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";

import normalize from "normalize.css";
createApp(App).use(normalize).use(ElementPlus).use(router).mount("#app");
