<template>
    <div>
        <h2>Vuex</h2>
        <h3>{{$store.state.count}}</h3>
        <h3>{{count}}</h3>
        <p>
            <button @click="$store.commit('add',10)">+</button><!--传值，commit第一个参数是方法名，第二个是方法的第二个参数，方法的第一个state默认不用写-->
            <button @click="sub">-</button>
        </p>
    </div>
</template>

<script>
    import store from '@/vuex/store'
    import {mapState,mapMutations} from 'vuex'
    export default {
        store,
        computed:mapState(['count']),//将vuex的state映射过来
        methods:mapMutations(['sub'])//将vuex的mutations映射过来
    }
</script>
