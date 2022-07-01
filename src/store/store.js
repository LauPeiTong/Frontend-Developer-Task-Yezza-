import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
  },
  getters: {
  },
  plugins: [createPersistedState()],
  mutations: {
    chooseSelectedDate(state, date){
      state.selectedDate = date
    }
  },
  actions: {
  },
  modules: {
  }
})
