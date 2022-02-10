<template>
  <div class="container">
    <h1>删除书籍</h1>
    <div class="del">
        <div>
          <label>
            <span>编号：</span>
            <input type="text" placeholder="请输入要删除的书籍编号" v-model="id"  v-focus="true">
          </label>
        </div>
    </div>
      <div class="bottom">
        <button @click="delBtn">删除</button>
        <button @click="clearBtn">清除</button>
      </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      id: ''
    }
  },
  methods: {
    delBtn() {
      if(this.id != '') {
        this.$store.commit('removeById', this.id)
        //清除input数据
        this.id = ''
      }
    },
      clearBtn() {
        this.id = ''
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
.del {
  width: 100%;
  
  padding-left: 30px;
}
.del div {
  padding-top: 35px;
}
.del span {
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