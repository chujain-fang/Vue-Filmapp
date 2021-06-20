<template>
  <div class="cinema">
  
    <router-view></router-view>  
        <heade></heade>   
   </div>
</template>

<script>

import heade from "./cinema组件/head"

export default {
  components:{
    heade
      }
}
</script>

<style>

</style>
<style src="C:\Users\Administrator\Desktop\电影项目.app\filmapp\font_2564752_qwr96ej34tn\iconfont.css">

</style>
<style scoped>
  .cinema{margin: auto;}
</style>