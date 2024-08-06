<script setup lang="ts">
import {ref, onMounted, onUnmounted, watchEffect} from 'vue';
import * as echarts from 'echarts';
const chartContainer = ref<HTMLDivElement | null>(null);
let chartInstance: echarts.ECharts | null = null;
const props = defineProps({
  chartOptions: {
    type: Object,
    default() {
      return {};
    },
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '300px',
  },
})
onMounted(() => {
  chartInstance = echarts.init(chartContainer.value);

  //使用刚刚的配置项和数据显示图表。
  chartInstance.setOption(props.chartOptions);


  handleResize(); // 设置初始大小
  window.addEventListener('resize', handleResize);
});

watchEffect(() => {
  if (chartInstance && props.chartOptions) {
    chartInstance.setOption(props.chartOptions);// 更新图表配置
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  if (chartInstance) {
    chartInstance.dispose();// 销毁实例
    chartInstance = null;
  }
});

function handleResize() {
  const width = (chartContainer.value as HTMLDivElement).offsetWidth;
  const height = (chartContainer.value as HTMLDivElement).offsetHeight;
  (chartInstance as echarts.ECharts).resize({width, height});
}

</script>

<template>
  <div>
    <div class="share-chart-container" :style="{ height, width }" ref="chartContainer"></div>
  </div>
</template>

<style scoped>
.share-chart-container {
  width: 100%;
  height: 100%;
}
</style>

