<template>
  <div id="register"   >
      <div class="head">用户注册</div>
     <img src="@/assets/11.png" alt="">
      <form action="" class="form">
        <input type="text"  placeholder="用户名"   class="user-name"  v-on:keyup="change1" ref="myvalue1"><br>
        <span class="tips" ref="value"></span>
       <input type="text" placeholder="密码" class="user-key"     v-on:keyup="change2"  ref="myvalue2">
       <span class="low"  ref="low">弱</span>
       <span class="mid" ref="mid" >中</span>
       <span class="strong" ref="strong">强</span>
      </form>
      <div class="register"    v-on:click=transform>注册</div>
  </div>
</template>

<script>


export default {
    data(){
        return {
            istrue:false
        }
    },
methods:{
    change1(){
        
        console.log( )
        if(/\d/.test(this.$refs.myvalue1.value[0])){
           this.$refs.value.innerHTML="用户名不能以数字开头!"
            this.$refs.value.style.color="red"
        }
       else if(/\W/.test(this.$refs.myvalue1.value)){
            this.$refs.value.innerHTML="用户名只能以字母数字下划线组成!"
            this.$refs.value.style.color="red"
        }
        else if(  this.$refs.myvalue1.value.length<6){
          
             this.$refs.value.innerHTML="用户名要大于六位!"
              this.$refs.value.style.color="red"

        }
        else{
                var  key1=this.$refs.myvalue1.value;
                console.log(key1)
               
            console.log(110)
            let  arr=this.$store.state.key_name;
            console.log(arr)
            if(arr.length==0){
                 this.$refs.value.innerHTML="该用户名可注册!"
              this.$refs.value.style.color="green";
              this.istrue=true;
            }
            else{var  count=0
                for(let i=0;i<arr.length;i++){
                    for(let key in  arr[i]){
                        
                        if(key1==arr[i][key]){
                            count++
                            console.log("chongmingl");
                            this.$nextTick(function(){
                                 this.$refs.value.innerHTML="该用户已被注册!"
                                                this.$refs.value.style.color="red";
                                                this.istrue=false; 
                            })
                        }
                        else{
                            count++
                        }
                       
                          
                        }
                        
                       if(count==arr.length) {

                             this.$refs.value.innerHTML="该用户名可注册!"
                       this.$refs.value.style.color="green";
                       this.istrue=true
   
                        
                    }
                }
            }
            
        }
    },
    change2(){

      
        if(/^\d+$/.test(this.$refs.myvalue2.value) ||(/^[a-z]+$/.test(this.$refs.myvalue2.value)) || /^[A-Z]+$/.test(this.$refs.myvalue2.value)){
           
            this.$refs.low.style.backgroundColor="red"  //这是弱
           
             this.$refs.mid.style.backgroundColor="white"
            this.$refs.strong.style.backgroundColor="white"
        }
      else if(/\d/.test(this.$refs.myvalue2.value) && /[a-z]/.test(this.$refs.myvalue2.value) && /[A-Z]/.test(this.$refs.myvalue2.value)){
         
             this.$refs.low.style.backgroundColor="white"  //这是强
            this.$refs.strong.style.backgroundColor="green"
             this.$refs.mid.style.backgroundColor="white"
        }
        else{
             this.$refs.low.style.backgroundColor="white"
            this.$refs.strong.style.backgroundColor="white"
             this.$refs.mid.style.backgroundColor="orange"
        }
    },
    //这个点击事件应该加个防抖     多次点击只能触发一次事件

    transform:(function debounce(){
            let timer=null;
            return function(){
                if(timer){clearTimeout(timer)}
                timer=setTimeout(() => {
                    
             var name=this.$refs.myvalue1.value;
            var key=this.$refs.myvalue2.value;
            if(this.$refs.myvalue2.value.length>=6   &&  this.istrue==true){

                console.log(this.$refs.myvalue2.value.length)
                  this.$store.commit("set",{name,key})   
            }
            else{
                alert("请重新选择用户名/密码")   //检查是否存在当前用户名或者密码,待做
            }
          
                   
                    
                }, 500);
            }
      })()
    // transform(){

    //    debounce()
    //     var  that =this
    //    function debounce(){
    //         let timer=null;
           
           
    //         return function(){
               
    //             if(timer){clearTimeout(timer)}
    //             timer=setTimeout(fn,1000 );
    //         }

    //    }
    //    function fn(){
          
    //      console.log(111)
                    
                

    //    }

      
           



       
      
    // }

}


}
</script>

<style scoped>
*{margin: 0;padding: 0;}
.tips{display: block;height: 20px;line-height: 20px;text-align: center;width: 100%;}
    img{width: 60px;height: 60px;margin: auto;display: block; padding: 20px;}
   .form{width: 100%;height: 200px;} 
  span{display: block;width: 33%;float: left;height: 20px;line-height: 20px; text-align: center;}
   .user-name{padding: 30px; width: 100%; border: none; outline: none;}
   .user-key{padding: 30px;width: 100%; border: none; outline: none;}
   .head{text-align: center;height: 50px; margin-top: 0px;line-height: 50px;font-size: 16px;}
   .register{text-align: center;height: 50px;line-height: 50px;width: 90%;color: white;
   background: red;margin: auto;}
</style>