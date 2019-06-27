<!-- components文件夹用来添加不同的模块,这些模块会统一被app.vue调用 -->
<template>
  <div>
    <p>Hi World</p>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
