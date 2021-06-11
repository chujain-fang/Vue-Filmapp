<template>
  <div >
    
         <navi></navi>
    
      <router-link to="/film/playing"  tag="div" class="playing"  active-class="active2">正在热映</router-link>
      <router-link to="/film/will"  tag="div"   class="will"  active-class="active2">即将上映</router-link>
       <router-view></router-view>
  </div>
</template>

<script>
import navi from "../navi"
export default {
    components:{
       navi
    },

   
}
</script>

<style  scoped>
.active2{color: red; width: 33%;}
.playing{width: 50%; float: left; text-align: center;}
.will{width: 50%;float: left; text-align: center;}
</style>
