<template>
  <div class="menu">

      <router-link to="/film/playing" tag="div"  class="film">电影</router-link>
       <router-link to="/cinema" tag="div" class="cinema">影院</router-link>
        <router-link to="/mine" tag="div" class="order">订单</router-link>  
        <!-- 这里应该跳转到订单页面。而不是暂时的mine -->
     
      
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .menu{position: absolute;z-index: 2;right: 20px;width: 100px;height: 80px;background:white; top: 30px; z-index: 100;}
    .film{text-align: center;line-height: 40px;height: 40px;border-bottom: 1px gray solid; border-top: 1px gray solid;}
    .cinema{width: 100px;height: 40px;text-align: center;line-height: 40px; 
    border-bottom: 1px gray solid;   border-top: 1px gray solid;}

    .order{width: 100px;height: 40px;text-align: center;line-height: 40px; 
    border-bottom: 1px gray solid;   border-top: 1px gray solid; background: white;}
 
</style>>

