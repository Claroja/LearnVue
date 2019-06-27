// import Vue from '../node_modules/vue/dist/vue.js'
// 这里使用webpack默认的vue模块
// 需要配置vueloader的插件
import Vue from 'vue'
import vue from './vue.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


var vm = new Vue({
    el: '#vue',
    data: {
        msg: 'hello'
    },
    render:function(create){
        return create(vue)
    }
    // render:(c)=>c(login) //方法的简写形式 function省略,return省略
})


import app from './app.vue'
import goodslist from './goodslist.vue'
import account from './account.vue'
import login from './login.vue'
import register from './register.vue'

var router = new VueRouter({
    routes:[
        {
            path: '/account',
            component: account,
            children: [
                { path: 'login', component: login },
                { path: 'register', component: register }
            ]
        },
        { path: '/goodslist', component: goodslist}
    ]
})

var approuter= new Vue({
    el: '#approuter',
    render:function(create){
        return create(app)
    },
    router
})
