
//这样导入的包不完整,是dist/vue.runtime.common.js
//import Vue from 'Vue'

import Vue from '../node_modules/vue/dist/vue.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

var routerObj1 = new VueRouter({
    routes:[
        {path: '/login1', component:{template:'<p>登录1</p>'}},
        {path: '/register1', component:{template:'<p>注册1</p>'}}
    ]
})

var router = new Vue({
    el: '#router',
    router: routerObj1
})


var routerObj2 = new VueRouter({
    routes:[
        {path: '/',redirect:'/login2'},
        {path: '/login2', component:{template:'<p>登录2</p>'}},
        {path: '/register2', component:{template:'<p>注册2</p>'}}
    ]
})

var redirect = new Vue({
    el: '#redirect',
    router: routerObj2
})


var routerObj3 = new VueRouter({
    routes:[
        {path: '/login3', component:{template:'<p>登录3 query:{{$route.query.id}}</p>'}},
        {path: '/register3', component:{template:'<p>注册3</p>'}}
    ]
})

var redirect = new Vue({
    el: '#query',
    router: routerObj3
})


var routerObj4 = new VueRouter({
    routes:[
        {path: '/login4/:id', component:{template:'<p>登录4 params:{{$route.params.id}}</p>'}},
        {path: '/register4', component:{template:'<p>注册4</p>'}}
    ]
})

var redirect = new Vue({
    el: '#params',
    router: routerObj4
})

var routerObj5 = new VueRouter({
    routes:[
        {
            path: '/account',
            component:{template:'#tmpa'},
            children:[
                {path: 'login5', component:{template:'<p>登录5</p>'}},
                {path: 'register5', component:{template:'<p>注册5</p>'}}
            ]
        }
    ]
})

var redirect = new Vue({
    el: '#children',
    router: routerObj5
})


var routerObj6 = new VueRouter({
    routes:[
        {path: '/all',components:{
            'default': {template:'<p>默认的</p>'},
            'left':{template:'<P>左边</p>'},
            'right':{template:'<p>右边</p>'}
        }}
    ],
})

var many = new Vue({
    el: '#many',
    router: routerObj6
})



var routerObj7 = new VueRouter({
    routes:[
        {path: '/',redirect:'/login7'},
        {path: '/login7', component:{template:'<p>登录7</p>'}},
        {path: '/register7', component:{template:'<p>注册7</p>'}}
    ],
    linkActiveClass:'myactive'
})

var redirect = new Vue({
    el: '#active',
    router: routerObj7
})




