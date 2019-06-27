<!-- components文件夹用来添加不同的模块,这些模块会统一被app.vue调用 -->
<!-- 通过router进行传值,name属性要和router的name向对应,params里面传递相应的参数,通过$router.params.id来调用-->
<template>
  <div>
    <p>Hi World</p>
    <router-link :to="{name:'hiworld1',params:{id:'1'}}">hiworld1</router-link>
    <router-link to="/hiworld/hiworld2">hiworld2</router-link>
    <router-view></router-view>
  </div>

</template>

<script>
</script>

<style scoped>
</style>
