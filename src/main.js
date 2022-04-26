import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/index.js";
import VueSelect from 'vue-next-select';
import Observable from './components/UI-helpers/Observable.vue';

const app = createApp(App);

app.component('vue-select', VueSelect);
app.component('observable', Observable);

app.use(router);
app.use(store);

app.mount('#app');
