<template>
  <div class="buy">
 <span class="frist">今天</span>  <span   class="second">明天</span><span  class="third"  >后天</span>
  <div class="day1">
    <ul> 
      
      <li  v-for="data in  this.$store.state.cinemadata"   :key="data.showAt"> 

        <div class="detail">        
          <div class="left"> <span>  {{ show(data.showAt) }} </span>  <br>   <span   class="l-end">   {{ show(data.endAt) }}  </span>   </div>
          <div class="mid">    <span> {{data.filmLanguage}} {{data.imagery}}  </span>  <br>   <span class="m-end">{{data.hallName}}  </span>  </div>
         <div class="right">¥ {{data.maxSalePrice /100}}  <span class="buy1" ref="buy"   v-on:click="click">购票</span>   </div>                     
                   </div>
 
      </li>
    </ul>
  </div>
  <div class="day2"></div>
  <div class="day3"></div>
  </div>
</template>

<script>
export default {
  
 methods:{
   click(e){
     (e.target.style.backgroundColor="orange");
     this.$router.push('/film/playing')
    // this.$refs.buy.style.color="orange"

   },
    show(data){
      var  time=new Date(data*1000);
      var hours=time.getHours();
      var  min=time.getMinutes();
      
   return  `${hours}:${min}`

    }
  },
  created(){
    console.log(this.$store.state.cinemadata,"这是购票界面信息")
  }
}
</script>

<style scoped>
*{list-style: none;}
.detail{display: flex;}
    .left{ width:80px;height: 40px; padding-top: 10px 5px 10px 10px;}
    .l-end{color: gray;}
    .m-end{color: gray;}
    .mid{width:135px;height: 60px;padding-top: 10px 5px 10px 10px;   overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
    .right{ flex: 1;padding-top: 10px 5px 10px 10px; line-height: 60px;  color: orange;text-align: center;}
   .day1{width:100%; }
   .day2{width: 100%;}
   .day3{width: 100%;}
   .buy1{display: inline-block;border: solid 1px orange;height: 30px;line-height: 30px; color: red;}
</style>