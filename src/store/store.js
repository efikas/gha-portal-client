import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stateName: 'ekiti', // window.location.origin.substring(location.origin.lastIndexOf('/') + 1)
    items: [
      {
        name: 'Dashboard',
        link: '/dashboard'
      }
    ]
  },
  getters: {
    getStateName: state => state.stateName,
    breadCrumbItem: state => state.items
  },
  mutations: {
    // setStateName (state, newState) {
    //   state.stateName = newState
    // },
    updateBreadCrumbItem (state, payload) {
      // newNumber is the payload passed in.
      state.items = payload
    }
  },
  actions: {
    setBreadCrumbItem ({ dispatch }, item) {
      dispatch('updateBreadCrumbItem', item)
    }
  }
})
