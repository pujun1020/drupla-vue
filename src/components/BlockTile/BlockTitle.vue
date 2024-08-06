<script setup lang="ts">
import { number } from "echarts";
import { ref, reactive, onMounted, onUnmounted } from "vue"
let slotData = defineProps({
    titleName: {
        type: String,
        default: () => '......'
    },
    dataNumber: {
        type: String,
        default: () => '01'
    },
    top: {
        type: Number,
        default: () => 0
    }

})
let a = '55'
</script>

<template>
    <div class="block-title-wrapper">
        <div class="block-title">
            <slot>
                <box-icon type='logo' name='mongodb' color="green"></box-icon>
            </slot>
            <span>{{ titleName }}</span>
            <span class="block-line" :data-number="dataNumber"></span>
        </div>
    </div>
</template>

<style scoped>
.block-title-wrapper {
    margin-top: v-bind(top + 'px');
}

.block-line::after {
    content: attr(data-number);
    border-radius: 50%;
    position: absolute;
    font-size: 11px;
    font-weight: 600;
    text-align: center;
    color: #7b7b7d;
    opacity: .8;
    width: 15px;
    height: 15px;
    top: -6px;
    right: -35px;
}

.block-title {
    display: flex;
    align-items: center;
    white-space: nowrap;
    letter-spacing: 0;
    font-weight: 800;
    color: #7c7d7d;
    font-size: 1.25rem;
    line-height: 1.2;
    -webkit-box-reflect: below -5px linear-gradient(transparent, rgba(0, 0, 0, .4));
    margin-bottom: 40px;
}

.block-line {
    position: relative;
    margin-left: 20px;
    margin-right: 35px;
    display: inline-block;
    height: 1px;
    width: 100%;
    background-image: repeating-linear-gradient(to right, transparent, green 8px, #fff 0, #fff 16px),
        linear-gradient(to right, white, black 20% 80%, white);
    background-position: 0 0
}
</style>
