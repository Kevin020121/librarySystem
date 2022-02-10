import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//导入数据
import books from '../src/api/books'

const store = new Vuex.Store({
  //数据
  state: {
    books
  },
  mutations: {
    //直接删除
    remove(state, index) {
      state.books.splice(index,1)
    },
    //通过编号删除
    removeById(state,id) {
      state.books.forEach((item,index) => {
        //如果数据里有编号
        if(item.id == id) {
          state.books.splice(index,1)
          alert('删除成功')
        } 
      })
    },
    //添加功能
    addBook(state,addedBook) {
      var res = state.books.find(item => {
        return item.id == addedBook.id
      })
      if(!res) {
        state.books.push(addedBook)
          alert('添加成功')
      } else {
        alert('编号已存在，请重新添加')
      }
    },
    //修改功能
    changeBook(state, changedBook) {
      for(var i = 0 ;i < state.books.length;i++) {
        if(state.books[i].id == changedBook.id) {
          Vue.set(state.books, i, changedBook)
          alert('修改成功')
        }
      }
      
    }
  },
  getters: {
    //总数
    totalCount(state) {
      return state.books.length
    },
    //总价格
    totalPrice(state) {
      return state.books.reduce((price,item) => {
        return price += item.price
      }, 0)
      
    }
  }
})
export default store