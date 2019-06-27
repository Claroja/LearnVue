
//这样导入的包不完整,是dist/vue.runtime.common.js
//import Vue from 'Vue'

import Vue from '../node_modules/vue/dist/vue.js'

//组件基本调用可以直接在js里写,也可以在html里写好再调用
Vue.component('com1',{
    template:'<p>全局组件com1</p>'
})

Vue.component('comt1',{
    template:'#temp1'//直接调用html里的模板
})

var vm = new Vue({
    el: '#app',
    data: {
        msg: 'hello'
    },
    components:{
        com2:{
            template:'<p>局部组件com2</p>'
        },
        comt2:{
            template:'#temp2'
        }
    }
})

//组件成员
var data = new Vue({
    el: '#data',
    components:{
        com:{
            template:'#temp3',
            data:function(){
                return {num:0}//返回值既是成员变量,可以直接用
            },
            methods:{
                count(){
                    this.num++
                }
            }
        },
    }
})

//component引用其vue对象的数据
var prop = new Vue({
    el: '#prop',
    data:{
        msg:'123'
    },
    components:{
        com:{
            template:'<p>子组件,引用父组件的data数据:{{parentmsg}}</p>',
            props:['parentmsg']
        },
    }
})


var emit = new Vue({
    el: '#emit',
    methods:{
        show:function(){
            alert('父对象的show方法')
        }
    },
    components:{
        com:{
            template:'#emitt',
            methods:{
                myclick(){
                    this.$emit('parentfn')
                }
            }
        },
    }
})



//组件切换(了解)
var change = new Vue({
    el: '#change',
    data:{
        comName:'login'
    },
    components:{
        login:{
            template:'<p>登录组件</p>',
        },
        register:{
            template:'<p>注册组件</p>'
        }
    }
})