<template>
  <div  id="app">
  <router-view></router-view>
   <tabbar id="btom" v-if="$store.state.showTabbar"></tabbar> 
  </div>
</template>
<script>
import tabbar from  "./components/tabbar";
export default {
  components:{
  tabbar,
    }
}

</script>

<style scoped>
/* #btom{position: fixed;top: 375px;} */   
*{list-style: none;margin: 0;padding: 0;}
#app{position: relative; ;width: 100%;   overflow-x: hidden; overflow-y: auto;}


</style>

<style src="C:\Users\Administrator\Desktop\电影项目.app\filmapp\font_2564752_qwr96ej34tn\iconfont.css">

</style>