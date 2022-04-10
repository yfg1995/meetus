import { createStore } from "vuex";

import infoModule from './info/index.js';

const store = createStore({
  modules: {
    info: infoModule,
  },
});

export default store;