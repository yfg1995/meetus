import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/index.js";
import VueSelect from 'vue-next-select';

const app = createApp(App);

app.use(router);
app.use(store);
app.component('vue-select', VueSelect);
app.mount('#app');
