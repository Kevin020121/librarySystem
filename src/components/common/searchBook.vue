<template>
  <div class="container">
    <h1>查找书籍</h1>
    <div class="search">
      <input type="text" placeholder="请输入要搜索的书籍名称" 
      v-model="searchName" @keyup.enter="searchBtn(searchName)" v-focus="true"> 
      <button @click="searchBtn(searchName)">搜索</button>
      <button @click="clearBtn">清除</button>
    </div>
    <div class="search_ul">
      <table border="1">
        <tr style="font-size: 20px;">
          <th>序号</th>
          <th>编号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版社</th>
          <th>价格</th>
        </tr>
        <transition-group tag="tbody">
          <tr v-for="(item,index) in temp" :key="item.name" style="font-size: 18px;">
            <td>{{ index+1 }}</td>
            <td>{{ item.id }}</td>
            <td>《{{ item.name }}》</td>
            <td>{{ item.author }}</td>
            <td>{{ item.publisher }}</td>
            <td style="color: red; font-weight: bold;">{{ item.price | getFullPrice }}</td>
          </tr>
        </transition-group>
      </table>
      <h3 class="bottom">共搜索{{ temp.length }}个</h3>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      searchName: '',
      temp: []
    }
  },
  computed: {
    ...mapState({
      booklist: 'books'
    })
  },
  methods: {
    //搜索按钮
    searchBtn(searchName) {
      this.temp = this.booklist.filter((item) => {
        if(item.name.toLowerCase().indexOf(searchName.toLowerCase()) != -1) {
          return item
        } 
      })
    },
    //清楚按钮
    clearBtn() {
      this.temp =  []
      this.count = 0
      this.searchName = ''
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

.container {
  margin-top: 20px;
  margin-left: 20px;
}
h1 {
  text-align: center;
  background-color: skyblue;
  height: 60px;
  line-height: 60px;
}
.search {
  height: 50px;
  margin: 10px 0;
}
.search input {
  width: 1330px;
  height: 45px;
  padding-left: 20px;
}
.search button {
  width: 60px;
  height: 40px;
  cursor: pointer;
  margin: 0 10px;
  font-size: 16px;
  font-weight: 800;
}
.search button:hover {
  background-color:coral;
}
table {
  width: 1500px;
  text-align: center;
}
table tr {
  height: 50px;
}

table tbody tr:hover {
  background-color: greenyellow;
  cursor: pointer;
}
.bottom {
  text-align: center;
  font-weight: 400;
  margin: 10px 0;
  font-size: 18px;
}
/* 过渡效果 */
.v-enter,.v-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
.v-enter-active,.v-leave-active{
    transition: all 0.8s ease;
}
.v-move{
    transition: all 1s ease;
}
.v-leave-to {
  position: absolute;
}
</style>