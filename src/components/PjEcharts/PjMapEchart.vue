<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import BlockTitle from "@/components/BlockTile/BlockTitle.vue";
import MapEchart from '@/components/PjEcharts/MapEchart.vue';
import observeAndAnimate from "@/utils/JsUtil/util.viewportObserve";
import { adjustColorOpacity } from '@/utils/JsUtil/util.common';
import china from '@/assets/worldMap.json';
const state = reactive({
    key: 1,
    mapData: [],
    mapCityOption: {
        name: 'world',
        geoData: china
    },
    //图标配置项和数据
    chartOptions: {

        visualMap: [
            {
                show: false,
                min: 10,
                max: 1000,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'],
                calculable: false,
                orient: 'horizontal',
                inRange: {
                    color: [adjustColorOpacity('#f54325', 80), '#f54325'],
                    symbolSize: [15, 60], // 标记点大小
                },
            },
        ],
        //绘制功能
        geo: {
            map: 'world',
            show: false,//地图的绘制功能关闭
            
        },
        series: [
            //
            {
                type: 'map',
                map: 'world',
                //配置高亮区域
                emphasis: {
                    //高亮区域标签
                    label: {
                        show: true,
                        color: 'red',
                        fontSize: 13,
                        areaColor: 'transparent',
                    },
                    //高亮区域
                    itemStyle: {
                        //areaColor: '#f54325',
                        borderColor: 'red',
                    },
                },
                //地图缩放
                //zoom: 1,
                //设置区域颜色和边框颜色
                itemStyle: {
                    areaColor: adjustColorOpacity('#ffffff', 10),
                    borderColor: adjustColorOpacity('#b3b3b3', 80),

                },
                data: [

                ],
                label: {
                    show: false,
                    /* color: 'red',
                    fontSize: 13,
                    areaColor: 'red', */
                }
            },
            // 添加标记点的series
            {

                type: 'effectScatter', // 可以使用scatter或effectScatter
                //使用绘制功能geo
                coordinateSystem: 'geo',
                data: [

                    // 标记的地点数据
                    {
                        name: '🧭云南省·昭通市',
                        // symbol: 'image://https://xsgames.co/randomusers/assets/avatars/male/24.jpg',
                        symbol: 'circle', // 标记点的图形样式，可以是圆圈：'circle'、气泡：'pin'、方块：'rect'等
                        value: [104, 27], // 数值可以影响标记点大小，例如 [经度, 纬度, 100]21°8′～29°15′
                        label:{
                            show: true,
                            color: '#f54325',
                            distance: 16,
                            fontSize: 15,
                            fontWeight: 600,
                            position: 'top',
                            formatter: '{b}',

                        },

                    },
                
                    // 可以添加多个标记点
                ],
                //通用标记点label
                label: {
                    show: true,
                    color: '#f54325',
                    distance: 16,
                    fontSize: 15,
                    fontWeight: 600,
                    position: 'top',
                    formatter: '{b}',
                },
            }
        ],
    }
})



onMounted(() => {
    observeAndAnimate('.map-item', (element: HTMLDivElement) => {
        // 自定义动画效果
        element.style.opacity = '1';
        element.style.transform = 'scale(1)';
    });
})
</script>

<template>
    <div class="echarts-block container-1920">
        <!-- <BlockTitle titleName="坐标" :top="60"></BlockTitle> -->
        <MapEchart :mapCityOption="state.mapCityOption" class="map-item" :chartOptions="state.chartOptions"
            height="calc(100vh - 15rem)"></MapEchart>
    </div>
</template>

<style scoped></style>
