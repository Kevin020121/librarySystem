<template>
    <div>
      <div class="container">
        <div class="box">
        <h2>欢迎进入南铁院图书管理系统</h2>
        <form action="">
            <div class="userName">
              <label>
                <span>学号：</span>
                <input type="text" placeholder="请输入学号" class="input1" v-focus="true">
              </label>
                
            </div>
            <div class="password">
                <label>
                  <span>密码：</span>
                  <input type="password" placeholder="请输入密码" style="margin-left: 12px;" class="input1">
                </label>
            </div>
            <router-link :to="{ path: '/home', query: { user: '杨凯' }}" tag="button" class="register">登录</router-link>
        </form>
    </div>
      </div>
    
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  height: 1000px;
  background: url(../assets/1.jpg) no-repeat;
  overflow: hidden;
}
.box {
    margin: 250px auto;
    width: 450px;
    height: 350px;
    background-color: #f2f0f3;
    border-radius: 10px;
    border-top: 1px solid #fff;
    padding-left: 66px;
}
h2 {
    margin-top: 50px;
    margin-bottom: 30px;
}

.userName,
.password {
    margin-bottom: 35px;
}
.input1 {
    width: 250px;
    height: 30px;
    margin-left: 10px;
    padding-left: 10px;
}

.register {
    width: 310px;
    height: 40px;
    background-color: #bdcefc;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    color: #fff;
    font-size: 20px
}
.register:hover {
  background-color: green;
  color: #000
}

span {
  font-weight: bold;
}




</style>