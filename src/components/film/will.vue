<template>
  <div class="will">
    
    <ul>
      <li   v-for="data in  datalist"  :key="data.filmId">
          <div class="box">
               <img :src=data.poster alt=""  class="img">
               <div class="mid-main">
                <div  class="name">{{data.name}}   <span   class="type">{{data.filmType.name}}</span>                      </div>  
             <div class="mid">
                 <div class=" actor">主演:</div>
                   <div class="actor"   v-for="data in data.actors" :key="data.avatarAddress">  
                    <span  class="actor">  {{data.name}}|  </span>
               </div>
             </div>

                <div class="time">上映日期:{{show(data.premiereAt)}}    </div>
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
  methods:{
    show(data){

      var data=1000*data;
      var time=new Date(data);
      var day=time.getDay();
      var mounth=time.getMonth()+1;
      var date=time.getDate();
  switch(day){
    case 1: day="一";break;
    case 2: day="二";break;
     case 3: day="三";break;
      case 4: day="四";break;
       case 5: day="五";break;
        case 6: day="六";break;
         case 7: day="日";break;
  }


      return `周${day} ${mounth}月${date}日`
    }
  },

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
.will{width: 100%;}
.actor{float:left}
.name{text-align: left;}
.time{text-align: left;}
.mid{position: relative  ;overflow: hidden;height: 20px;color:gray;text-overflow:ellipsis;white-space: nowrap;}
.mid-main{align-self: center; width: 58%; }
.type{background: rgb(209, 206, 206); color :white;margin-left: 10px;}
.box{width: 100%;height: 100px;padding: 15px  15px 15px 0; display: flex;margin: auto;}
.buy{flex: 1; line-height: 100px;color: red;}
.img{width: 66px;height: 117px; padding-right: 20px;}
</style>

