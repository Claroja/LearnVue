<!-- app.vue里添加router-view来显示路由的内容 -->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to='/'>helloworld</router-link>
      <router-link to='/hiworld'>hiworld</router-link>
      <router-link to='/gohome'>gohome</router-link>
      <router-link to='/gohome2'>gohome2</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
