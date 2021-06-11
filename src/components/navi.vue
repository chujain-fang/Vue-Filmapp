<template>
  <div   v-on:click=reset>
      <span class="name"> 初见CX电影</span>

    <img src="@/assets/22.png" alt="" class="r-top1"   v-on:click.stop=change1>
  <Menu   v-show=this.$store.state.isShow></Menu>
     
      
  </div>
</template>

<script>
import Menu from "../components/mine/menu"

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

<style   scoped>
*{margin: 0;padding: 0;}
div{width: 100%;height: 50px;
    background: red; }
.name{display: block; width: 100px  ;margin: auto; line-height: 50px; color: white;}
.r-top1{width: 22px;height: 22px; position: absolute; border-radius: 0; right: 5px;top: 5px;}

</style>