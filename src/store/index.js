import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    isAuthenticated: false,
    user: {}
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    user: state => state.user
  },
  mutations: {
    set_Authenticated(state, isAuthenticated) {
      if (isAuthenticated) {
        state.isAuthenticated = isAuthenticated
      } else {
        state.isAuthenticated = false
      }
    },
    set_user(state, user) {
      if (user){
		  state.user = user
	  }else{
		  state.user = {}
	  }
    }
  },
  actions: {
	  setAuthenticated(context,isAuthenticated){
			context.commit('set_Authenticated',isAuthenticated)
	  },
	  setuser(context,user){
		context.commit('set_user',user)
	  },
	  clearCurrentState(context){
		context.commit('set_Authenticated',false)
		context.commit('set_user',{})
	  }

  },
  modules: {

  }
})

export default store
