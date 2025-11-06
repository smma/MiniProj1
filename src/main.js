import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Description from "./components/Description.vue";
import Footer from "./components/Footer.vue";

const app = createApp(App);

app.component("Description", Description);
app.component("Footer", Footer);

app.use(router);

app.mount("#app");
