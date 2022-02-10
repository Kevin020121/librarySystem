import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Login from '../components/login.vue'
import homeBooks from '../components/common/homeBooks'
import searchBook from '../components/common/searchBook'
import addBook from '../components/common/addBook'
import changeBook from '../components/common/changeBook'
import delBook from '../components/common/delBook'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login,
      meta: {title: '登录'}
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          component: homeBooks,
          meta: { title: '我的书籍' }
        },
        {
          path: 'search',
          component: searchBook,
          meta: { title: '搜索书籍' }
        },
        {
          path: 'add',
          component: addBook,
          meta: { title: '添加书籍' }
        },
        {
          path: 'change',
          component: changeBook,
          meta: { title: '修改书籍' }
        },
        {
          path: 'del',
          component: delBook,
          meta: { title: '删除书籍' }
        }
      ]
    },
  ]
})
