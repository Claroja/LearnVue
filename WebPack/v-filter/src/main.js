
//这样导入的包不完整,是dist/vue.runtime.common.js
//import Vue from 'Vue'

import Vue from '../node_modules/vue/dist/vue.js'

//过滤器定义方法filter(方法名,方法体),Vue.filter创建的是全局过滤器,所有的vue对象共享
Vue.filter('msgFormat1',function(msg,arg){
    return msg + arg
})

var filter = new Vue({
    el: '#filter',
    data: {
        msg: 'hello'
    },
    filters: {
    //也可以定义为一个vue对象私有的过滤器
    msgFormat2:function(msg,arg){
        return msg + arg
        }
    }
})

        