<template>
    <div>
        <h1>.vue文件定义的模板,{{msg}}</h1>
    </div>
</template>

<script>
export default{
    data(){//组件中的data必须是function
        return {
            msg: '123'
        }
    }
}
</script>

<style>

</style>
