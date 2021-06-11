<template>
  <div id="top"   v-on:click=reset>
    <img src="@/assets/22.png" alt="" class="r-top1"   v-on:click.stop=change1>
  <Menu   v-show=this.$store.state.isShow></Menu>
      <!-- <div class="r-top"> 这是隐藏项目</div>  
      应该做个组件插入 -->  
        <!-- 点击某个组件控制显示隐藏 -->
      <div class="img">  <img src="@/assets/11.png" alt=""> </div>
        <router-link to="/mine/detail"   tag="div"   class="login">个人中心</router-link>
     
      <div class="null"></div>
  </div>
</template>

<script>  
import Menu from "../mine/menu"

export default {
  components:{
    Menu
  },
  methods:{
    change1(){
      this.$store.commit("change")
    },
    reset(){
      this.$store.commit("reset1")
    }
  }

  
}
</script>

<style scoped>
#top{position: relative;}
.r-top1{width: 22px;height: 22px; position: absolute; border-radius: 0; right: 5px;top: 5px;}
*{margin: 0;padding: 0;}
 img{width: 80px;height: 80px;  margin-left: 50px; border-radius: 50%; }
.login{margin-left: 20px;color: white;}
#top{width: 100%;height: 250px;display: flex; background: rgb(236, 212, 223); align-items: center;}
    .null{flex: 1;}
</style>