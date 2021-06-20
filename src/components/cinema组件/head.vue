<template>
 <div>


    <div class="head"  >
        <router-link to="/city"   tag="span"   class="left1"> {{city2}}</router-link>   <span class="triangle"></span>
     <div class="mid">影院</div>
     <router-link to="/search" tag="span"  class="right1"> 搜索</router-link>
    </div>
     <ul>
         <li v-for="data in datalist"  :key="data.address"     >
             <div id="box"   @click="jumpPage(data)">
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
    methods:{
        jumpPage(data){
            console.log(data,data.cinemaId)
            this.$store.commit("transId",{
                cinemaId:data.cinemaId})
           window.localStorage.setItem("cinemaId",data.cinemaId);
           console.log(  window.localStorage.getItem("cinemaId"));
           console.log(this.$store.state.cinemaId)
            this.$router.push(`/detail/${data.cinemaId}`)
          
            
        }
    },
    data(){
        return {
            datalist:[]
        }
        },
        computed:{
            city2:function(){
                if(this.datalist.length!=0){
                    var str=this.datalist[0].cityName
                      console.log(  typeof str);
                      return str.slice(0,str.length-1)
                       
                }
                return   ''                                               
            }
        },
        mounted(){
            
            axios({
                url:`https://m.maizuo.com/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=4094936`,
                headers:{
                   'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16190522175060905993764865","bc":"110100"}',
                  'X-Host':'mall.film-ticket.cinema.list'
                }
            }).then(res=>{
               
                this.datalist=res.data.data.cinemas;
                console.log(this.$store.state.cinemaId,111111)
            })
        }
    }
</script>
<style scoped>
*{margin: 0px;padding: 0px;list-style: none;}
.head{display: flex;width: 100%;}
.left1{font-size: 15px; float: left;line-height: 50px; width:33%; color: blue; text-align: center;}
.mid{ line-height: 50px;text-align: center;width: 34%;text-align: center;}
.right1{display: block;  width: 50px;color: blue;text-align: center;
   display: block; width: 33%;float: right;padding-right: 10px;height: 50px;line-height: 50px;}
ul{clear: both;}

    #box{display: flex; padding: 15px; overflow: hidden; clear: both;}
    .left{width:52%;height: 50px;margin: 0 0 15px 0; }
    .name{font-size: 15px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;padding: 10px 0; }
    .address{font-size: 12px; white-space: nowrap;text-overflow: ellipsis;overflow: hidden; color: gray;}
    .right{flex: 1;  position: relative;  text-align: center;}
    .price{width:70px ;height: 25px;margin: auto;  color:#FF5F16 ; font-size: 15px; line-height: 25px;}
</style>