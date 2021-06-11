<template>
 <div>


    
     <router-link to="/city"> city</router-link>   
     <router-link to="/search"> search</router-link>

     <ul>
         <li v-for="data in datalist"  :key="data.address">
             <div id="box">
                 <div class="left">
                     <div class="name">{{data.name}} </div>
                     <div class="address">{{data.address}} </div>
                 </div>
                 <div class="right">
                     <div class="price"> ￥{{  (data.lowPrice)/100  }}起  </div>
                     <!-- <div >定位无法读取,暂时不看</div> -->
                 </div>

             </div>


         </li>
     </ul>
 </div>
</template>

<script>
import axios from  "axios"
export default {
    data(){
        return {
            datalist:[]
        }
        },
        mounted(){
            axios({
                url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4094936",
                headers:{
                   'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16190522175060905993764865","bc":"110100"}',
                  'X-Host':'mall.film-ticket.cinema.list'
                }
            }).then(res=>{
               
                this.datalist=res.data.data.cinemas
            })
        }
    }

</script>

<style scoped>
*{margin: 0px;padding: 0px;list-style: none;}
    #box{display: flex; padding: 15px; overflow: hidden;}
    .left{width: 175px;height: 50px;margin: 0 0 15px 0; }
    .name{font-size: 15px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;padding: 10px 0; }
    .address{font-size: 12px; white-space: nowrap;text-overflow: ellipsis;overflow: hidden; color: gray;}
    .right{flex: 1;  position: relative;}
    .price{width:70px ;height: 25px;position: absolute;left: 20%;top: 20%;  color:#FF5F16 ; font-size: 15px;}
</style>