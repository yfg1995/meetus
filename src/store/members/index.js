import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      members: [
        {
          name: 'Djordje Andonovic',
          date: '31st December, 1995',
          phone: '44 (012) 6954 783',
          mail: 'djole@gmail.com',
          address: 'Santa Monica Bullevard',
          image: 'djordje.png',
          profession: 'front-end developer',
          donation: 1.8,
          projects: 565,
          volunteers: 1965,
          skills: {
            afterEffects: 85,
            photoshop: 80,
            illustrator: 70,
            sketch: 75
          }
        },
        {
          name: 'Stefan Andonovic',
          date: '15th March, 1991',
          phone: '44 (012) 3497 924',
          mail: 'stefan@gmail.com',
          address: 'Santa Monica Bullevard',
          image: 'stefan.png',
          profession: 'full stack developer',
          donation: 2.1,
          projects: 1233,
          volunteers: 2965,
          skills: {
            afterEffects: 80,
            photoshop: 90,
            illustrator: 75,
            sublime: 90,
            sketch: 85
          }
        },
        {
          name: 'Nikola Ivanov',
          date: '27th July, 1991',
          phone: '44 (012) 6478 744',
          mail: 'poki@gmail.com',
          address: 'Santa Monica Bullevard',
          image: 'nikola.png',
          profession: 'full stack developer',
          donation: 2.5,
          projects: 1465,
          volunteers: 3965,
          skills: {
            afterEffects: 85,
            photoshop: 80,
            illustrator: 75,
            sketch: 70
          }
        },
      ],
      tableStats: [
        {
          country: 'Canada',
          flag: 'elements/f1.jpg',
          visit: 509222
        },
        {
          country: 'United States',
          flag: 'elements/f2.jpg',
          visit: 645032
        },
        {
          country: 'United Kingdom',
          flag: 'elements/f3.jpg',
          visit: 386714
        },
        {
          country: 'Germany',
          flag: 'elements/f4.jpg',
          visit: 415207
        },
        {
          country: 'Australia',
          flag: 'elements/f5.jpg',
          visit: 117845
        },
        {
          country: 'China',
          flag: 'elements/f6.jpg',
          visit: 522934
        },
        {
          country: 'Bangladesh',
          flag: 'elements/f7.jpg',
          visit: 96714
        },
        {
          country: 'Belgium',
          flag: 'elements/f8.jpg',
          visit: 197436
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};