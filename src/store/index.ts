import { createStore } from 'vuex'

export default createStore({
  state: {
    selectAddress: null,
    count:0
  },
  mutations: {
    setSelectAddress(state, payload) {
      state.selectAddress = payload
    },
    add(state){
      console.log("sdaf");
      
      state.count+=1
    },
    noAdd(state){
      state.count-=1
    }
  },
  actions: {
  },
  modules: {
  }
})
