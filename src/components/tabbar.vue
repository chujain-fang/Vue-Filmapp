<template>
  <div id="tab">
      <router-link to="/film/playing" id="film"   active-class="active"   tag="div"><div  class="iconfont icon-dianying    film"><br><span>电影</span></div></router-link> <br>
      <router-link to="/cinema" active-class="active"  tag="div"><div class="iconfont icon-wode   cinema" ><br><span>影院</span></div></router-link><br>
       <router-link to="/mine_login"   active-class="active"   tag="div"><div  class="iconfont icon-yingyuan    mine" ><br><span>我的</span></div></router-link> 
  
  </div>
</template>
<script>
export default {
}
</script>

<style  scoped>
#tab{height: 667px; position: relative;}

*{list-style: none;}
.active{color: red;}   
/* 这个特殊的属性只能用color ，不能用background */
.film{width: 33%; position: fixed; bottom: 0; text-align: center;  background: white;z-index: 100;}
.cinema{width:33%; position:fixed;bottom: 0;left: 33%;text-align: center;  background: white;z-index: 100;}
.mine{width: 33%; position: fixed;bottom: 0;right: 0;  text-align: center;  background: white;z-index: 100;}
</style>
<style src="C:\Users\Administrator\Desktop\电影项目.app\filmapp\font_2564752_qwr96ej34tn\iconfont.css">

</style>
<style scoped>
  
</style>