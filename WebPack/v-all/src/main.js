
//这样导入的包不完整,是dist/vue.runtime.common.js
//import Vue from 'Vue'

import Vue from '../node_modules/vue/dist/vue.js'

var cloak = new Vue({
    el: '#cloak',
    data: {
        msg: 'cloak'
    }
})

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


var model = new Vue({
    el: '#model',
    data:{
        msg:"hello"
    },
})

var style = new Vue({
    el: '#style',
})
var on = new Vue({
    el: '#on',
    methods: {
        show: function(){alert('hello')}
    },
})

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
var prevent = new Vue({
    el: '#prevent',
    methods: {
        link(){
            alert("阻止跳转")
        }
    },
})
var once = new Vue({
    el: '#once',
    methods: {
        link(){
            alert("阻止跳转")
        }
    },
})

var list = new Vue({
    el: '#for',
    data:{
        list: ['a','b','c','d','e'],
        map:{'key1':'value1','key2':'value2','key3':'value3'}
    }
})
var ifshow = new Vue({
    el: '#ifshow',
    data:{
        flag:true
    }
})