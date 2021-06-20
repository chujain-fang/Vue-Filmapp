<template>
  <div id="cinema">
     
      <span class="back"   @click="to"> &lt;&lt;&lt;</span>
  <div  class="outer-img">
 <img :src=this.data3.poster alt=""   class="poster">
  </div >
      <span   class="mid"> {{this.data3.name}}  <span class="grade">  {{this.data3.grade}}分</span>  </span>   
      <div  class="bottom1" >{{this.data3.category}}{{this.data3.runtime}}分钟 {{this.data3.director}}  </div>    
    <buy></buy>
  </div>
</template>
<script>
import axios   from  "axios";
import buy from "./buytickets"
export default {
  components:{
buy
  },
  data(){
    return {
      data2:'',
      data3:[],  //这里存储影片信息
     data4:[]     //这里存储排场
    }
  },
  methods:{
      to(){
      this.$router.push("/cinema")
    },
  }
 ,
 beforeRouteLeave (to, from, next) {
            this.$store.state.showTabbar=true;
   
    next()
        },
created(){

this.$store.state.showTabbar=false;
   //获取当前啊时间时间戳,避免链接失效
   
    var  now =new  Date();
   
    console.log(now)
var  year=now.getFullYear();
var  mounth=now.getMonth();
var day=now.getDate();
switch(mounth){
case 0:mounth="Jan";break;
case 1:mounth="Feb";break;
case 2:mounth="Mar";break;
case 3:mounth="Apr";break;
case 4:mounth="May";break;
case 5:mounth="Jun";break
case 6:mounth="Jul";break;
case 7:mounth="Aug";break;
case 8:mounth="Sept";break;
case 9:mounth="Oct";break;
case 10:mounth="Nov";break;
case 11:mounth="Dec";break;
}
    var   time =new   Date(`${mounth} ${day} ${year} 00:00:00 `)
    var  timesnap=Date.parse(time)/1000
   this.$store.state.timesnap=timesnap;
   window.localStorage.setItem("timesnap",timesnap)
  console.log(   this.$store.state.timesnap)
  console.log(111112222222222222222222222)
  let cinemaId=window.localStorage.getItem("cinemaId");

  cinemaId=Number(cinemaId)
  // console.log(id)
  // console.log(110,this.$store.state.cinemaId)  //这里拿不到cinemaId，本页面刷新页面不会拿到数据
  axios({
    url:`https://m.maizuo.com/gateway/?cinemaId=${cinemaId}&k=1766851`,
    headers:{
      'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"16190522175060905993764865","bc":"110100"}',
      'X-Host':'mall.film-ticket.film.cinema-show-film'
    }
  }).then(res=>{
   console.log(res.data.data.films[0].filmId,"这是filmId");
   window.localStorage.setItem("filmId",res.data.data.films[0].filmId);
  //  let  a=window.localStorage.getItem("filmId",res.data.data.films[0].filmId);
  //  console.log(typeof    a)
   this.data2=res.data.data.films[0].filmId;     //这里不能存在data2里面
   this.data2=res.data.data.films[0].filmId;
   this.$store.commit("filmid",res.data.data.films[0].filmId)
   this.data3=res.data.data.films[0];
   console.log(res.data.data.films)

   console.log(this.data3,"这是影片信息")
  }).then(axios({
                    //Request URL: https://m.maizuo.com/gateway/?filmId=5476&cinemaId=4984&date=1622649600&k=881046//1622649600
                  //  filmId存在哪里       cinemaid存在哪里       时间戳存在哪里                                                                                               // 1622705408000  最新时间戳
    url:`https://m.maizuo.com/gateway/?filmId=${Number(window.localStorage.getItem("filmId"))}&cinemaId=${cinemaId}&date=${Number(window.localStorage.getItem("timesnap"))}&k=10314099`,  //zheg
    headers:{                                                                                                     //date参数                          
    'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"16190522175060905993764865"}',                     // 过期的时间戳1622649600//需要实时 
    'X-Host':'mall.film-ticket.schedule.list'
  }
  }).then(res=>{
    console.log(res.data)
    console.log(res.data.data," 这是排场信息");
    this.data4=res.data.data.schedules; //没有拿到数据会报错
    window.localStorage.setItem("data4",res.data.data.schedules)
     this.$store.state.cinemadata=this.data4;   //这里可以经过mutation
  }))
},
}
</script>

<style scoped>
.back{color: rgb(147, 147, 231);display: block;width: 15px;height: 15px;font-size: 15px;line-height: 15px;}

.poster{width:90px;height:130px}
  .mid{display: block;width:200px ;height: 20px;margin: auto ;display: block; padding: 10px; text-align: center;}
  .grade{color: orange;}
  .bottom1{width: 280px;height: 20px;color: gray;
  overflow: hidden;text-overflow: ellipsis;white-space: nowrap; margin: auto; clear:both}
</style>




