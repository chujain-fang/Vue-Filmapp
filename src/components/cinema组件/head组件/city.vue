<template>
  <div id="city"  >
<div class="head">
  
  <span   @click="getlocation"   class="location">获取定位</span><span  >:{{city}}</span>
</div>
<div class="search"> 
  <!-- input 有个事件,暂时删除了  v-model="change" -->
  <input type="text" placeholder="输入城市名"   ref="mytext"    @keyup="search"   v-model="mytext"> <span  @click="to">取消</span> </div>
<span  class="hot">热门城市</span>
<div
class="hotcity"   @click="tocity">  
<!-- 设置点击事件，利用事件委托绑定事件 -->
<span class="">北京</span>
<span >上海</span>
<span >广州</span>
<span >深圳</span>
</div>
<!-- 搜索时触发显示搜索框 -->
<div class="searchcity"  v-show=!this.$store.state.showcity>   
  
<ul   >
  <li  v-for="data in citydata "  :key="data.name"   class="s-city">   {{data}}   </li>    
</ul>
</div>

<div  v-show=this.$store.state.showcity>
  <mt-index-list >
  <mt-index-section :index=data.index  v-for="data in list" :key="data.index"  >
    <mt-cell :title=data.name  v-for="data in data.item"    :key="data.cityId"   @click.native="getcityid" ></mt-cell>  
  </mt-index-section>
</mt-index-list>
</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  computed:{    
    citydata(){   //计算属性
      let res=[]
      console.log(this.datalist);
      window.sessionStorage.setItem("city",this.datalist)
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
      

       var res=[]
    var  obj={}
      for(var i=65;i<=90;i++){
        res.push(String.fromCharCode(i))
//将A-Z存入一个数组
}
      for(var i=0;i<res.length;i++){
      obj[res[i]]=[];
    }
    //构建分类
  for(var i=0;i<res.length;i++){
    for(var j=0;j<this.datalist.length;j++){  
      if(res[i]==this.datalist[j].pinyin.toString().slice(0,1).toUpperCase()){
        obj[res[i]].push(this.datalist[j])      
      } 
    }
  }
   
for(let key in obj){
       if( obj[key] .length==0) {
         delete obj[key]
       }
      }
       this.datalist2=obj    //数据没处理好，太多了，一开始过滤的时候不要用循环，用filter，存入数据的格式也应该是外部对象，内部小对象，小对象包括index：XXX,item:[]
        console.log(this.datalist2)
      for(let key in this. datalist2){
        this.arr.push(obj[key])
        this.list.push({
          index:key,
          item:obj[key]
        })

        }

       
    })
  },
  data(){
    return {
     mytext:'',
      city:'-----',
      datalist:[],
      datalist2:[],
      data2:[],index:[],arr:[],list:[]  
    }  
  },
  methods:{
     to(){
      this.$router.push("/cinema")
    },
      search(){
      
        this.$store.commit("isCityListShow");
        //console.log(this.$store.state.showcity)
    },
    getlocation(){
      axios.get("/ip/").then(res=>{
    console.log( res.data.dz.split(" ")[2]);
    this.city=res.data.dz.split(" ")[2]
})
    },
    tocity(e){
      let  cityid=e.target.innerHTML;
      switch(cityid){
        case("北京"):this.$store.commit("changeCity",110100);
          this.$router.push("/cinema");
          break;
        case("上海"):this.$store.commit("changeCity",310100);
          this.$router.push("/cinema");
          break;
           case("广州"):this.$store.commit("changeCity",440100);
          this.$router.push("/cinema");
          break;
           case("深圳"):this.$store.commit("changeCity",440300);
          this.$router.push("/cinema");
          break;    
      }
    },
    getcityid(e){
    for(let i =0;i< this.arr.length;i++ ){
      for(let j in this.arr[i]){
        if( this.arr[i][j].name==e.target.innerHTML){
          this.$store.commit("changeCity",this.arr[i][j].cityId);
          this.$router.push("/cinema")     
        }
      }
    }
    }
  },
  created(){
     this.$store.state.showTabbar=false;
  },
   beforeRouteLeave (to, from, next) {
            this.$store.state.showTabbar=true;
    next();
        }
  }
</script>
<style scoped>
.s-city{height: 50px;line-height: 50px;padding: 0px 10px; }
*{margin: 0;padding:0;list-style: none;}
.back{color: rgb(147, 147, 231);
position:absolute;left: 0;
display: block;width: 15px;height: 15px;font-size: 15px;line-height: 15px;}
.head{display: flex;justify-content: center;}
.location{color:gray ;}
.hot{
   display: block;font-size: 13px;padding: 10px;color :gray
 }
.hotcity{display:flex;flex-wrap: wrap;margin: auto;}
 .hotcity span{
      width: 28%;background:#F4F4F4; height: 30px; text-align: center;line-height: 30px;
      padding: 0 0 10px; margin: 0 10px; margin-bottom: 10px;font-size: 13px;
 }
 .search{width: 100%; height: 36px;}
 .search   input{width: 79%;height:70%; ;margin:auto;  display:block;float: left;
  outline: none; padding:10px;color:gray;border:none;}
  span{display: block;height: 50px;line-height: 50px;padding-left: 10px;}
</style>
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/mint-ui/lib/style.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/mint-ui/lib/index.js"></script>
