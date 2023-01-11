import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// 引入naiveUi组件库
import naiveUi from "naive-ui";

const app = createApp(App);

app.use(router);

app.use(naiveUi);

app.mount("#app");
