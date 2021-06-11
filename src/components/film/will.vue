<template>
  <div>
    
    <ul>
      <li   v-for="data in  datalist"  :key="data.filmId">
          <div class="box">
            
               <img :src=data.poster alt=""  class="img">
               <div>
                <div  class="name">{{data.name}}</div><span>{{data.filmType.name}}</span>
                <div class=" actor">主演:</div>
                <div class="time">上映日期:</div>
               </div>
    
        <div class="buy">预购</div>
          </div>
       

      </li>
    </ul>
  </div>
</template>

<script>
import  axios from  "axios"
export default {
    data(){
        return {
            datalist:[]
        }
    
},
mounted(){
  axios({
    url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=4342761",
    headers:{
       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16190522175060905993764865","bc":"110100"}',
     'X-Host': 'mall.film-ticket.film.list'

    }
     

  }).then(res=>{
    console.log(res.data.data);
  this.datalist=res.data.data.films


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


