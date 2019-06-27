import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HiWorld from '@/components/HiWorld'
import HiWorld1 from '@/components/HiWorld1'
import HiWorld2 from '@/components/HiWorld2'

Vue.use(Router)
//这里通过路由里面的路径传值,rest风格
//后面括号里直接加正则表达式来验证
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
        {path:'hiworld2/:id(\\d+)',name:'hiworld2',component: HiWorld2}
      ]
    }
  ]

})
