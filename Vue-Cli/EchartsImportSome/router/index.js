import Vue from 'vue'
import Router from 'vue-router'
import HelloEcharts from '@/components/HelloEcharts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloEcharts
    }
  ]
})
