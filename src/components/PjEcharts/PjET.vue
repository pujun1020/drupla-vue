<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import PjShareEchart from '@/components/PjEcharts/PjShareEchart.vue';
import observeAndAnimate from "@/utils/JsUtil/util.viewportObserve";
import { adjustColorOpacity } from '@/utils/JsUtil/util.common';
const state = reactive({
    //图标配置项和数据
    chartOptions: {

        title: {
        show:false,
          text: "我的图表实例",
        },
        tooltip: {
          trigger: "axis",
        },
        //图例，在数据中必须要有，不然报提示series not exists
        legend: { data: ["抽烟", "喝酒", "烫头"] },
        xAxis: {
          type: "category",
          data: [],
        },
        yAxis: {
        },
        series: [
          {
            name: "抽烟",
            type: "bar",
            data: [],
          },
          {
            name: "喝酒",
            type: "line",
            data: [],
          },
          {
            name: "烫头",
            type: "line",
            smooth: true,
            data: [],
            areaStyle: {
              color: "rgba(255, 0, 0, 0.5)",
            },
            lineStyle: {
              color: "red",
            },
          },

        ],
    }
})



onMounted(() => {
    observeAndAnimate('.share-echart-item', (element: HTMLDivElement) => {
        // 自定义动画效果
        element.style.opacity = '1';
        element.style.transform = 'scale(1)';
    });
})
</script>

<template>
    <div class="share-echarts-block">
        <!-- <BlockTitle titleName="坐标" :top="60"></BlockTitle> -->
        <PjShareEchart class="share-echart-item" :chartOptions="state.chartOptions"></PjShareEchart>
    </div>
</template>

<style scoped></style>
