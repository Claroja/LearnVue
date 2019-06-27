
//这样导入的包不完整,是dist/vue.runtime.common.js
//import Vue from 'Vue'

import Vue from '../node_modules/vue/dist/vue.js'
//1.render会替换vue控制的div,而component只会替换自己的标签,不会覆盖vue对象控制的
//2.render也可以直接使用template来替代
var render = new Vue({
    el: '#render',
    render:function(create){
        return create({template:'<p>render渲染,替换vue控制的div</p>'})
    }
})

var template = new Vue({
    el: '#template',
    template:'<p>render可以使用template属性来替换</p>'
})