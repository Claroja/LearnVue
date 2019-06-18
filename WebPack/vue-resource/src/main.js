
//这样导入的包不完整,是dist/vue.runtime.common.js
//import Vue from 'Vue'

import Vue from '../node_modules/vue/dist/vue.js'
import VueResource from 'vue-resource'

Vue.use(VueResource);

var vm = new Vue({
    el: '#app',
    data: {
    },
    methods:{
        getInfo(){
            this.$http.get('http://vue.studyit.io/api/getlunbo').then(function(result){
                console.log(result)
            })
        }
        
    }
})