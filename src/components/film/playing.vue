<template>
  <div>
    <ul>
      <li   v-for="data2 in datalist"  :key="data2.filmId">  
      <div  class="box"    @click="ck(data2)">
        <img :src=data2.poster alt="" class="img">
        <div  class="middle">
          <div class="name">{{data2.name}}</div><span></span>
          <div class="grade" >观众评分:{{data2.grade}}</div> 
          <div class="mid">
               <span class="main">主演:</span> 
                <div class="actor"   v-for="data in data2.actors" :key="data.avatarAddress">  
                    <span  class="actor">  {{data.name}}|  </span>
               </div>
          </div>
          <div class="time">{{data2.nation}}|{{data2.runtime}}分钟</div>
        </div>
        <div class="buy">购票</div>
      </div>
      </li>
    </ul>
  </div>
</template>

<script>
import  axios   from  "axios"
export default {
  methods:{
    ck:function(data){
     console.log(data,data.filmId)
     window.localStorage.setItem("filmId",data.filmId)
            this.$store.commit("transId",{
               
                cinemaId:data.cinemaId,
                filmId:data.filmId})
           
            this.$router.push(`/a/${data.filmId}`)
    }
  },
    data(){
        return {
            datalist:[],
            datalist2:[]
        }
    },
    mounted(){
      axios({
        url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=2659610",
        headers:{
         "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"16190522175060905993764865","bc":"110100"}',
         "X-Host": "mall.film-ticket.film.list",
        }
      }).then(res=>{
      
          this.datalist=res.data.data.films
          console.log(res.data.data.films)
          this.datalist2=res.data.data.films.actors
        })
    }
}

</script>
<style scoped>
.actor{float:left}
.time{clear:both}
.middle{width:58%}
.mid{position: relative  ; width: 58%;overflow: hidden;height: 20px;color:gray;text-overflow:ellipsis;white-space: nowrap;}
*{margin: 0;padding: 0;list-style: none;}
.main{ float: left;}
.box{width: 100%;height: 100px;padding: 15px  15px 15px 0; display: flex;margin: auto;}
.buy{flex: 1; text-align: center;line-height: 100px;color: red;}
.img{width: 66px;height: 85px; padding-right: 20px;}
</style>>