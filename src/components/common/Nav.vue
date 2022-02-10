<template>
  <div class="left">
      <div class="touxiang" >
        <img src="../../assets/touxiang.png">
      </div>
      <div class="list">
        <ul>
          <li><router-link :to="{path: '/home', query: {user: '杨凯'}}">我的书籍</router-link></li>
          <li><router-link :to="{path: '/home/add', query: {user: '杨凯'}}">添加书籍</router-link></li>
          <li><router-link :to="{path: '/home/del', query: {user: '杨凯'}}">删除书籍</router-link></li>
          <li><router-link :to="{path: '/home/change', query: {user: '杨凯'}}">修改书籍</router-link></li>
          <li><router-link :to="{path: '/home/search', query: {user: '杨凯'}}">查找书籍</router-link></li>
        </ul>
      </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.touxiang {
  width: 100px;
  height: 100px;
  margin: 10px auto;
}
.touxiang img {
  width: 100px;
  height: 100px;
}
.left {
  width: 15%;
  height: 1000px;
  background-color: #324157;
  color: #fff;
  padding-top: 40px;
}
.left ul {
  margin-top: 20px;
}
.left ul li {
  height: 60px;
  line-height: 60px;
  margin-top: 10px;
}
.right {
  width: calc(100% - 15%);
  height: calc(600px - 20px);
  margin-left: 20px;
  margin-top: 20px;
}
ul {
  list-style: none;
  
}
.left ul li {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
a {
  display: block;
  width: 100%;
  height: 50px;
  font-size: 19px;
}
a:link, a:visited {
  color: #fff;
}
a:hover, a:active {
  color: green
}
.touxiang img:hover {
  transform: scale(1.2);
  cursor: pointer;
}
</style>