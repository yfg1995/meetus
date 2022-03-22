import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/index.js";
import VueObserveVisibility from "vue-observe-visibility";

const app = createApp(App);

app.use(router);
app.use(VueObserveVisibility);
app.use(store);

app.mount('#app');
