import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HiWorld from '@/components/HiWorld'

Vue.use(Router)
//在这里添加新组件的路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hi',
      name: 'hi',
      component: HiWorld
    }
  ]

})
