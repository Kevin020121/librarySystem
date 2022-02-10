<template>
  <div class="container">
    <h1>我的书籍</h1>
    <div class="dataList">
      <ul>
        <li>序号</li>
        <li>编号</li>
        <li style="width: 320px">书名</li>
        <li>作者</li>
        <li>出版社</li>
        <li>价格</li>
        <li>操作</li>
      </ul>
      <transition-group appear>
        <ul v-for="(item,index) in booklist" :key="item.name">
            <li>{{ index+1 }}</li>
            <li>{{ item.id }}</li>
            <li style="width: 320px">《{{ item.name }}》</li>
            <li>{{ item.author }}</li>
            <li>{{ item.publisher }}</li>
            <li style="color: red">{{ item.price | getFullPrice}}</li>
            <li>
              <button @click="delBtn(index)">删除</button>
            </li>
        </ul>
      </transition-group>
    </div>
    <div class="bottom">共计：{{ totalCount }}本书&nbsp;&nbsp;&nbsp;&nbsp;总价：{{ totalPrice }}元</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      key: ''
    }
  },
  computed: {
    ...mapState({
      booklist: 'books'
    }),
    ...mapGetters(['totalCount','totalPrice'])
  },
  methods: {
    delBtn(index) {
      this.$store.commit('remove', index)  
    }
  },
  filters: {
    getFullPrice(price) {
      return price.toFixed(2) + "￥"
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  background-color: skyblue;
  height: 60px;
  line-height: 60px;
}
.container {
  margin-top: 20px;
  margin-left: 20px;
}
.head {
  position: relative;
}

.head ul {
  position: absolute;
  top: 4px;
  right: 30px;
  width: 500px;
  font-size: 20px;
}
.head ul li {
  float: left;
  top: 0;
  right: 0;
  
}
.head ul li a {
  padding: 0 20px;
}
.dataList ul {
  display: flex;
  height: 50px;
  line-height: 50px;
  list-style: none;
  background-color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 2px;
}
.dataList ul li {
  width: 200px;
  text-align: center;
  float: left;
}
button {
  width: 52px;
  height: 32px;
  border-radius: 5px;
  background-color: #ff786f;
  cursor: pointer;
  color: #fff
}
button:hover {
  color: #000
}
.bottom {
  height: 56px;
  line-height: 56px;
  background-color: #fff;
  text-align: right;
  font-size: 24px;
  font-weight: bold;
  padding-right: 100px;
}
a:link, a:visited {
  color: #000;
  
}
a:hover, a:active {
  color: green
}

/* 过渡效果 */
.v-enter,.v-leave-to {
    opacity: 0;
    transform: translateY(40px);
}
.v-enter-active,.v-leave-active{
    transition: all 0.8s;
}

.v-leave-to {
  position: absolute;
}

</style>