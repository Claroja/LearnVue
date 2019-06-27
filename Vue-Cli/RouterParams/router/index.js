import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HiWorld from '@/components/HiWorld'
import HiWorld1 from '@/components/HiWorld1'
import HiWorld2 from '@/components/HiWorld2'

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
      path: '/hiworld',
      name: 'hiworld',
      component: HiWorld,
      children:[
        {path:'hiworld1',name:'hiworld1',component: HiWorld1},
        {path:'hiworld2',name:'hiworld2',component: HiWorld2}
      ]
    }
  ]

})
