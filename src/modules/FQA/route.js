import Vue from 'vue'
import Router from 'vue-router'
import List from './list'
import detail from './detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      component: List,
      name: 'list'
    },
    {
      path: '/detail',
      component: detail,
      name: 'detail'
    }, {
      path: '/',
      redirect: '/list'
    }
  ]
})
