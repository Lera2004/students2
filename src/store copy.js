import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    count: 0,
theme: "light-theme"
  },
   mutations: { 
        setCount: (state, count) => { 
            state.count = count; 
        }, 
        setTheme: (state, theme) => { 
            state.theme = theme; 
        }, 
    },
  actions: {
    setCount({ commit }, count) {
      commit('setCount', count);
    },

  },
  getters: {
    getCount: (state) => state.count,
    getSelectedTheme: (state) => state.theme,
  },
})
