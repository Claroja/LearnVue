
//这样导入的包不完整,是dist/vue.runtime.common.js
//import Vue from 'Vue'

import Vue from '../node_modules/vue/dist/vue.js'

var vm = new Vue({
    el: '#app',
    methods:{
        getEle(){
            alert(this.$refs.myp.innerText)
        }
    }
})