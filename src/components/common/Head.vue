<template>
    <div class="head">
     
      <div class="school">
        <a href="http://www.njrts.edu.cn/">
          <img src="../../assets/nty.png" alt="">
        </a>
      </div>
      <div class="mid">
        <div>
          <img src="../../assets/logo.png" alt="" class="logo">
          <h2 class="animate__animated animate__fadeInDown">南铁院图书管理系统</h2>
        </div>
     </div>
      <p >
        <span style="margin-right: 10px;">你好，{{ $route.query.user }}</span>  &nbsp;&nbsp;<router-link to="/login">退出登录</router-link>
      </p>
    </div> 
</template>

<script>
export default {

}
</script>

<style scoped>

.head {
  position: relative;
  height: 92px;
  background-color: #07c4a8;
}
.head .mid {
  position: absolute;
  top: 20px;
  left: 800px;
  width: 500px;
}

.head .logo {
  width: 100px;
  height: 56px;
  float: left;
}
.head h2 {
  color: #fff;
  font-size: 26px;
  padding-top: 10px;
}
p {
  position: absolute;
  top: 30px;
  right: 100px;
}
p span {
  font-size: 18px;
}
.school {
  position:absolute;
  left: 0;
  top: 5px;
  animation: myAni 1s;
}
@keyframes myAni {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
a {
  font-size: 18px;
}
a:link, a:visited {
  color: #000;
}
a:hover, a:active {
  color: yellow
}
</style>