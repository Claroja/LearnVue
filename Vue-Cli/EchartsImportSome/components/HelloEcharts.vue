<template>
<div id="nowscore" :style="{width: '400px', height: '300px'}"></div>
</template>

<script>
// 在组件中部分引入echarts模块，可以直接使用echarts.init，如果全局使用绑定在vue里
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/radar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'hello',
  mounted(){
    this.drawNowScore();
  },
  methods: {
    drawNowScore(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('nowscore'))
        var data = [[80,100,78,73,100,80]];//外层数组的元素是对应的点，内层数组对应的是各个字段的值
        //绘制图表
        myChart.setOption({
            title: {
                text: '综合评价'
            },
            tooltip: {
            },
            radar: {
                indicator: [
                    {name: '语文', max: 100},
                    {name: '数学', max: 100},
                    {name: '英语', max: 100},
                    {name: '体育', max: 100},
                    {name: '品德', max: 100},
                    {name: '其他', max: 100}
                ],
            },
            series: [
                {
                    type: 'radar',
                    data: data,
                },
            ]
        });
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
