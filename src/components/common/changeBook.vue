<template>
  <div class="container">
        <h1>修改书籍</h1>
    <div class="search">
      <div>
        <label>
          <span>编号：</span>
          <input type="text" placeholder="请输入要修改的书籍编号" v-model="id"  v-focus="true">
        </label>
      </div>
    <div>
      <label>
      <span>书名：</span>
      <input type="text" placeholder="请输入修改后的书籍名称" v-model="name">
      </label>
    </div>
    <div>
      <label>
      <span>作者：</span>
      <input type="text" placeholder="请输入修改后的作者" v-model="author">
      </label>
    </div>
    <div style="margin-left: -20px;">
      <label>
      <span>出版社：</span>
      <input type="text" placeholder="请输入修改后的出版社" v-model="publisher">
      </label>
    </div>
    <div>
      <label>
      <span>价格：</span>
      <input type="number" placeholder="请输入修改后的价格" v-model="price">
      </label>
    </div>
    </div>
    <div class="bottom">
        <button @click="changeBtn">修改</button>
        <button @click="clearBtn">清除</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      id: '',
      name: '',
      author: '',
      publisher: '',
      price: '',
    }
  },
  methods: {
    changeBtn() {
        if(this.id != '' && this.name != '' && this.author != '' && this.publisher != '' && this.price != '') {
          this.$store.commit('changeBook', {
          id: this.id,
          name: this.name,
          author: this.author,
          publisher: this.publisher,
          price: parseInt(this.price)

        })
        //清除input数据
        this.clearBtn();
      }
    },
    clearBtn() {
      this.id = ''
      this.name = ''
      this.author = ''
      this.publisher = ''
      this.price = ''
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
  width: 800px;
  height: 600px;
  margin: 20px auto;
  background-color: #fff;
}
.search {
  width: 100%;
  
  padding-left: 30px;
}
.search div {
  padding-top: 35px;
}
.search span {
  margin-left: 60px;
  margin-right: 30px;
  font-size: 20px;
  font-weight: 800;
}
input {
  width: 500px;
  height: 40px;
  padding-left: 20px;
}
.bottom {
  padding-left: 170px;
  margin-top: 40px;
}
.bottom button {
  width: 100px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  margin: 0 60px;
}

</style>