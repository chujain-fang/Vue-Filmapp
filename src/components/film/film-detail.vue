<template>
  <div class="film">
   <span class="back"   @click="to"> &lt;&lt;&lt;</span>
    <img :src=this.datalist.poster alt=""   class="img">
    <div> <span  class="name">{{this.datalist.name}}</span> <span>{{ }} </span>  </div>
    <span class="category"  >{{this.datalist.category}}  </span>
    <span class="time">{{ this.datalist.premierAt}}  </span>
    <div class="nation"><span>{{this.datalist.nation}}</span> <span>{{this.datalist.runtime}}分钟 </span> </div>
    <div  class="description"> {{this.datalist.synopsis}} </div>
    <span>演职人员</span>
    <div v-for="data in  datalist.actors"  :key="data.role"   class="actor">
     
         <img :src="data.avatarAddress" alt=""   class="actor_">
    </div>
   <div v-for="data in  datalist.actors"  :key="data.name"   class="actor">
     <span class="data-name"> {{data.name}}  </span>
     </div>



     <div class="buy">选座购票</div>
  </div>
</template>

<script>
import  axios from "axios"
export default{
  methods:{
     to(){
      this.$router.push("/film/playing")
    },
  },
  data(){
    return  {
      datalist:[]
    }
  },
  mounted(){
    let id=window.localStorage.getItem("filmId");
    
    axios({
      url:`https://m.maizuo.com/gateway?filmId=${id}&k=7644620`,
       headers:{
        'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"16190522175060905993764865","bc":"110100"}',
        'X-Host':'mall.film-ticket.film.info'
      }
    }).then(res=>{
      console.log(res.data.data.film);
      this.datalist=res.data.data.film
    })
  },
   created(){
     this.$store.state.showTabbar=false;
  },
   beforeRouteLeave (to, from, next) {
            this.$store.state.showTabbar=true;
   
    next()
        },

}
</script>

<style   scoped>
.back{color: rgb(147, 147, 231);position: absolute;background-color: rgb(243, 237, 237);opacity: 0.7;
display: block;width: 45px;height: 30px;font-size: 15px;line-height: 30px;}

.buy{width:100%;height: 50px;background: green;border-bottom: 50px;}
.data-name{float:left;width: 20%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}

.actor_{width:20%;height:120px;float:left;margin: auto;}
*{margin:0;padding:0}
.img{width:100%;height: 400px;}
.name{padding:10px;font-size:18px ;color:black;display:block}
.category{font-size: 13px;color:gray; display: block;margin: 4px 0 0;margin-left: 10px;}
.time{font-size: 13px;color:gray;margin:4px 0  0;margin-left: 10px;}
.nation{color:gray;font-size: 13px;margin-left: 10px;}
.description{width:95%;height: 40px;color:gray;margin:12px 0 0;overflow: hidden;padding:2px;margin-left:10px}


</style>