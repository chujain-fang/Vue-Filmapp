<template>
  <div id="login">
      <img src="../assets/11.png" alt=""> <br>


      <form action="">

            <input type="text"  placeholder="账号"  id="name" ref="name">
      <input type="text"  placeholder="密码"  id="key" ref="key">
      <div id="btn"    v-on:click=login> <div>登陆</div></div>
      <div class="bottom">
        <span >没有账户?</span> <router-link to="/register">注册</router-link> 
      </div>
   

      </form>
    
  </div>
</template>

<script>
export default {
  methods:{
    login(){
      console.log(1)
      //先判断store中是否存在
  if(this.$store.state.keys){
    let keys=this.$store.state.keys
    for(let i=0;i<keys.length;k++){
      for(let key in keys[i])
      if (this.$store.state.keys ==key  && this.$store.state.keys==keys[i][key]){
        console.log(登陆成功)
        this.$router.push("/mine_login")
      }
    }
    
  }
  else{ this.$router.push("/mine_login")
   alert("账号或者密码错误")

  }

    }
  }

}
</script>

<style>
#btn{width: 90%;height: 50px;background:#E55513 ; margin: auto;border-radius: 7px;} 
#btn div{line-height: 50px;text-align: center; color:#FF7A3D;}
#login{width: 100%;height: 430px;}
img{width: 60px;height: 60px; display: block;margin: auto;}
#name{width: 100%;height: 15px;  padding: 20px 0; border:0; outline: none;}
#key{width: 100%;height: 15px; padding: 20px 0; border: 0; outline: none;}
.bottom{float: right; padding: 10px 20px;}

</style>