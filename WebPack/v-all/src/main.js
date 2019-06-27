
//这样导入的包不完整,是dist/vue.runtime.common.js
//import Vue from 'Vue'

import Vue from '../node_modules/vue/dist/vue.js'

//v-text,v-html,v-cloak
var text = new Vue({
    el: '#text',
    data: {
        msg: 'text'
    }
})

var html = new Vue({
    el: '#html',
    data: {
        msg: '<p>哈哈</p>'
    }
})

var cloak = new Vue({
    el: '#cloak',
    data: {
        msg: 'cloak'
    }
})

// v-bind
var bind = new Vue({
    el: '#bind',
    data: {
        msg: '绑定'
    }
})

var _class = new Vue({
    el: '#class',
    data: {
        flag:true
    }
})

var style = new Vue({
    el: '#style',
})

// v-model
var model = new Vue({
    el: '#model',
    data:{
        msg:"hello"
    },
})

// v-on
//v-on用来给标签绑定事件,事件的方法要在vue的methods定义
var on = new Vue({
    el: '#on',
    methods: {
        show(){alert('hello')}
    },
})
//keyup用来监听键盘事件,后面可以跟具体的键位,如果不跟则会监听所有键盘事件
var keyup = new Vue({
    el: '#keyup',
    methods: {
        show(){alert('hello')}
    }
})

//this可以在methods中更改data里的数据,注意要想改变data里的值,需要重新赋值this.msg=this.msg-1
var _this = new Vue({
    el: '#this',
    data: {
        msg: 10
    },
    methods: {
        sub() {
            this.msg = this.msg -1
        }
    },
})

//vue方法调用默认是冒泡机制,既里层的元素方法调用,外层的的元素方法也会被调用,stop可以阻止冒泡机制
var stop = new Vue({
    el: '#stop',
    methods: {
        div() {
            alert("div")
        },
        btn() {
            alert("btn")
        }
    },
})

//capture是捕获机制,和冒泡机制相反.捕获机制是先调用外层元素方法,再调用内层函数方法
var capture = new Vue({
    el: '#capture',
    methods: {
        div() {
            alert("div")
        },
        btn() {
            alert("btn")
        }
    },
})

//self可以用来阻止冒泡和捕获机制,意思该元素只有自己被点击时才会被触发
var self = new Vue({
    el: '#self',
    methods: {
        div() {
            alert("div")
        },
        btn() {
            alert("btn")
        }
    },
})

//prevent用来阻止默认行为,比如页面跳转
var prevent = new Vue({
    el: '#prevent',
    methods: {
        link(){
            alert("阻止跳转")
        }
    },
})

//once指定该方法只能被触发一次
var once = new Vue({
    el: '#once',
    methods: {
        link(){
            alert("阻止跳转")
        }
    },
})

//v-for
//v-for循环输出,数字迭代,key的作用是唯一标识元素;在事件触发器中可以传入for循环的元素
var list = new Vue({
    el: '#for',
    data:{
        list: ['a','b','c','d','e'],
        map:{'key1':'value1','key2':'value2','key3':'value3'}
    },
    methods:{
        show(item){
            alert(item)
        }
    }
})

//v-if是不渲染标签,v-show是将标签的display设置为none
var ifshow = new Vue({
    el: '#ifshow',
    data:{
        flag:true
    }
})