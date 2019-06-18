
//这样导入的包不完整,是dist/vue.runtime.common.js
//import Vue from 'Vue'

import Vue from '../node_modules/vue/dist/vue.js'

//el参数就是document对象,可以直接调用相应的方法,
//bind是和元素绑定的时间,inserted是元素插入dom的时间,updated是元素更新的时间,焦点实在dom加载完成后才有的,所以要在inserted里绑定,bind里绑定无效
Vue.directive('focus',{
    bind: function(){},
    inserted: function(el){
        el.focus()
    },
    updated: function(){}
})
//color在元素绑定的时候就可以设置,然后一起插入到dom中
//v-color="参数"可以通过binding的value属性来获得

Vue.directive('color1',{
    bind:function(el,binding){
        el.style.color = binding.value
    },
    inserted: function(){},
    updated:function(){}
})

var directive = new Vue({
    el: '#directive',
    data: {
        msg: 'hello'
    },
    directives:{
        'color2':{
            bind:function(el,binding){
                el.style.color=binding.value
            }
        }
    }
})