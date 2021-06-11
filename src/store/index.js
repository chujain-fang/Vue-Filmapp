import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    key_name:[],
    isShow:false
  },
  mutations: {
    change(state){
      state.isShow= !state.isShow
    },
    reset1(state){
      console.log(11)
      if(state.isShow==true){
       state.isShow=false
       
      }
    },
    set(state,data){
     console.log(data)
     console.log(data.name)
     console.log(data.key)

     
      
      console.log("触发了")
      
      state.key_name.push({[data.name]:data.key})
      console.log(state.key_name)
    }
    
  },
  actions: {
  },
  modules: {
  }
})
