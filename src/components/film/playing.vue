<template>
  <div>
    <ul>
      <li   v-for="data in datalist"   :key="data.filmId">
      
      <div  class="box">
        <img :src=data.poster alt="" class="img">
        <div >
          <div class="name">{{data.name}}</div><span></span>
          <div class="grade">观众评分:{{data.grade}}</div>
          <div class="actor">主演:   
            
              <!-- <li :v-for="data in  datalist2"  :key="data"> {{data}} </li>  
            -->
            
               </div>
          <div>{{data.nation}}|{{data.runtime}}分钟</div>
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
          this.datalist2=res.data.data.films.actors
        })
    }
}

</script>

<style scoped>
*{margin: 0;padding: 0;list-style: none;}
.box{width: 345px;height: 100px;padding: 15px  15px 15px 0; display: flex;margin: auto;}
.buy{flex: 1; text-align: center;line-height: 100px;color: red;}
.img{width: 66px;height: 85px; padding-right: 20px;}
</style>>