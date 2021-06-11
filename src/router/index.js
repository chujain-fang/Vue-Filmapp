import Vue from 'vue'
import VueRouter from 'vue-router'
import film from '../components/film/film.vue'
import cinema from '../components/cinema.vue'
import mine from    '../components/mine.vue'
import playing from '../components/film/playing.vue'
import will from '../components/film/will.vue'
import login from "../components/login.vue"
import mine_login from "../components/mine-login.vue"
import city  from  "../components/cinema组件/head组件/city.vue"
import search from "../components/cinema组件/head组件/search.vue"
import register from "../components/register.vue"
import  detail  from   "../components/mine/detail.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/film',   //这里其实不重要，重要的是下面的component,这里配置完了还不行，还需要在显示的地方加个插槽
    component: film,
    children:[
      {path:"playing",
      component:playing,
    },
    {
      path:"will",    
      component:will
    },
    {
      path:"*",
      redirect:"playing"
    }
    
    
    
    
    ]
   // " "
  },
  {
    path: '/cinema',
    component: cinema,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited
   
  },
  {

    path:'/mine',
    component:mine ,
    children:[
      {
        path:"detail",
        component:detail
      }
    ]


  },
  // {
  //   path:'*',
  //  redirect:"/film/playing"   
  // },
  {
    path:"/login",
    component:login
  },
  
       
  {
    path:"/city",
    component:city
  },
 { path:"/search",
   component:search
},
{
  path:"/register",
  component:register
},{
  path:"/mine_login",
  component:mine_login
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 这是全局守卫
router.beforeEach((to,from,next)=>{
    if(to.path==="/mine"){
     
      //这里需要判断登陆
      if(true){
        next()
      }
      else{
        next("/login")
      }
    }
    else{
      next();
    }
    
})



export default router
