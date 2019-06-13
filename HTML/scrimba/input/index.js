var app = new Vue({
  el: '#app',
  data: { //data定义了数据
    message: 'Hello Vue.js!'
  },
  methods: {//methods定义了方法，this指代的是对象app
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
