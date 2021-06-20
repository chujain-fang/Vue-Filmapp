<template>
  <div id="search">

     
      
        <input type="text" placeholder="请输入城市名"   ref="mytext"      v-model="mytext">  <span  @click="to">取消</span>
      <ul>
  <li  v-for="data in citydata "  :key="data.name"   class="s-city">   {{data}}   </li>    
</ul>

  </div>
</template>

<script>
import axios from "axios"
export default {
 created(){
     this.$store.state.showTabbar=false;
  },
   beforeRouteLeave (to, from, next) {
            this.$store.state.showTabbar=true;
   
    next()
        },
    methods:{
       to(){
      this.$router.push("/cinema")
    }},
    data(){
      return  {
        mytext:'',
        datalist:[]
      }
    },
    mounted(){
    axios({
      url:"https://m.maizuo.com/gateway?k=5076801",
      headers:{
         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16190522175060905993764865","bc":"210300"}',
         'X-Host': 'mall.film-ticket.city.list'
    
      }
    }).then(res=>{
      console.log(res.data.data.cities);
      this.datalist=res.data.data.cities;
      console.log( )
       
})},
 computed:{    
    citydata(){   //计算属性
      let res=[]
      console.log(this.datalist);
     
      let arr=this.datalist;
  for(let i =0;i<arr.length;i++){
    res.push(arr[i].name);

  }
  console.log(res); 
  console.log(typeof  this.mytext)                           
 
let  result=[];
  res.forEach(item=>{
     if(this.mytext.length==0){return}
    if((item.indexOf(this.mytext))>-1){
      result.push(item)
    }


  })
//  for(let i=0;i<res.length;i++){
//  if((res[i].indexOf(this.mytext))>-1){
   
//    result.push(res[i])
//  }
   
//  }
//   console.log(result,110)
 //
  return result
    }
  },

}
</script>

<style scoped>
#search{width: 100%;}
  *{margin:0;padding:0;}
 input{width: 79%;height:70%; ;margin:auto;  display:block;
  outline: none; padding:10px;color:gray;border:none; margin-top: 20px;  background: #F4F4F4; float: left;}
.s-city{height: 50px;line-height: 50px;padding: 0px 10px; clear: both;}
span{display: block;height: 50px;line-height: 70px;padding-left: 10px;}
</style>