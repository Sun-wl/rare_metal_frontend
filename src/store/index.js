import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  payment:'',
  area:[]
}
const mutations = {
  paymentSave (state, { paymentSelected }) {
    state.payment = paymentSelected
  },
  areaSave (state, { areaSelected, index }) {
    state.area[index] = areaSelected
  },

}


const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions'
  ], () => {
    // const getters = require('./getters').default
    // const actions = require('./actions').default
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions')
    })
  })
}

export default store
