import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showcity:true,//控制城市的显示
    showTabbar:true,
    login:false,
    cinemaId:'',
    key_name:[],
    isShow:false,
    cityId:210300,
    filmId:'',
    timesnap:'',
    cinemadata:''
  },
  mutations: {
    isCityListShow(state){
      state.showcity=false
    },
    filmid(state,num){
      state.filmId=num
    },
    transId(state,num){   
      state.cinemaId=num.cinemaId;
    }
,

    changeCity(state,num){
      state.cityId=num;
      console.log(state.cityId)
    },
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
