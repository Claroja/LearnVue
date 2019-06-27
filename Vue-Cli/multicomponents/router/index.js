import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HiWorld from '@/components/HiWorld'

Vue.use(Router)
//在这里添加新组件的路由
//多个组件,component后面要加s
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components:{
        helloworld:HelloWorld,
        hiworld:HiWorld
      } 
    },
  ]

})
