import { createStore } from "vuex";

import membersModule from './members/index.js';

const store = createStore({
  modules: {
    members: membersModule,
  },
});

export default store;