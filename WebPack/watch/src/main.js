
//这样导入的包不完整,是dist/vue.runtime.common.js
//import Vue from 'Vue'

import Vue from '../node_modules/vue/dist/vue.js'

var keyup = new Vue({
    el: '#keyup',
    data:{
        firstname: '',
        lastname: '',
        fullname: ''
    },
    methods:{
        getFullName(){
            this.fullname = this.firstname + this.lastname
        }
    }

})

var watch = new Vue({
    el: '#watch',
    data:{
        firstname: '',
        lastname: '',
        fullname: ''
    },
    watch:{
        'firstname':function(newVal,oldVal){
           //this.fullname = this.firstname + this.lastname
            this.fullname = newVal + this.lastname
        },
        'lastname':function(newVal,oldVal){
            this.fullname = this.firstname + newVal
        }
    }
})

var computed = new Vue({
    el: '#computed',
    data:{
        firstname: '',
        lastname: '',
    },
    computed:{
        //fullname可以作为data参数来使用
        'fullname': function(){
            return this.firstname + this.lastname
        }
    }
})
