<template>
  <div id="login">
     <span class="back"   @click="to"> &lt;&lt;&lt;</span>
      <img src="../assets/11.png" alt=""> <br>
      <form action="">
            <input type="text"  placeholder="账号"  id="name" ref="key">
      <input type="text"  placeholder="密码"  id="key" ref="value">
      <div id="btn"    v-on:click=login> <div>登 陆</div></div>
      <div class="bottom">
        <span >没有账户?</span> <router-link to="/register"     >注册</router-link> 
      </div>
      </form>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';export default {
  methods:{
    to(){
      this.$router.push("/film/playing")
    },
    login(){
      //先判断store中是否存在
    //  先拿到输入框的值,再判断;
var key1=this.$refs.key.value;  //这是本地输入的账户和密码
var value=this.$refs.value.value;
  if(this.$store.state.key_name.length){
    var  count=0
    let keys=this.$store.state.key_name;
    console.log(keys)
    for(let i=0;i<keys.length;i++){      
      for(let key in keys[i]){   
      if (key1==key  && keys[i][key]==value){
        window.sessionStorage.setItem("login",1) //这里用sessionstroage来存储登陆状态
        console.log("登陆成功")
         MessageBox({
        title: '登陆成功！',
       // message: '附件名称?',
        showCancelButton: false
      }) 
      .then(action => {
        if (action === 'confirm') {
         this.$router.push("/mine_login")
        }
       
      }).catch(err => {
        console.log(err)
      })
      }
      else{
         count++
          if(count==keys.length)  {
            window.sessionStorage.setItem("login", 0);
        MessageBox({
        title: '账户或者密码错误',
       // message: '附件名称?',
        showCancelButton: true
      }) 
      //.then(action => {
    //     if (action === 'confirm') {
    //      this.$router.push("/login")
    //     }
    //     if (action === 'cancel') {
    //       console.log(2)
    //     }
    //   }).catch(err => {
    //     console.log(err)
    //   })        
          }
      }
      }
    } 
    
  }

  else{
      window.sessionStorage.setItem("login", 0)
       MessageBox({
        title: '账户或者密码错误',
       // message: '附件名称?',
        showCancelButton: true
      }) 
   //alert("账号或者密码错误")    //这里考虑mint-ui优化
  }
    },
   
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
<style>
.back{color: rgb(147, 147, 231);display: block;width: 15px;height: 15px;font-size: 15px;line-height: 15px;}
#btn{width: 90%;height: 50px;background:#E55513 ; margin: auto;border-radius: 7px;} 
#btn div{line-height: 50px;text-align: center; color:#ece7e4;}
#login{width: 100%;height: 430px;}
img{width: 60px;height: 60px; display: block;margin: auto;}
#name{width: 100%;height: 15px;  padding: 20px 0; border:0; outline: none;}
#key{width: 100%;height: 15px; padding: 20px 0; border: 0; outline: none;}
.bottom{float: right; padding: 10px 20px;}

</style>