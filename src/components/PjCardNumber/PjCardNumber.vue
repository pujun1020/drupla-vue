<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue"
import NumberAnimation from '@/utils/JsUtil/NumberAnimation'
import observeAndAnimate from '@/utils/JsUtil/util.viewportObserve'
let cardData = defineProps({
    title: {
        type: String,
        default: () => 'Vue'
    },
    start: {
        type: Number,
        default: () => 0
    },
    end: {
        type: Number,
        default: () => 60
    },
    duration: {
        type: Number,
        default: () => 3000
    }
})
let ANINumber = ref<number>(0)
onMounted(() => {
    observeAndAnimate('.technology-card', (el:HTMLDivElement) => {
        /* console.log(el) */
        NumberAnimation(cardData.start, cardData.end, cardData.duration, (numberValue) => {
            ANINumber.value = numberValue
            /* console.log(ANINumber.value) */
        })
    })
})
</script>

<template>
    <div class="technology-card">
        <div class="card-item">
            <h3 data-v-a45bec14="" class="card-item-title">{{ title }}</h3>
            <div data-v-a45bec14="" class="c-divider"></div>
            <div data-v-a45bec14="" class="card-item-content">熟练度：{{ ANINumber }}%</div>
        </div>
    </div>
</template>

<style scoped>
.card-item-title {
    font-size: 24px;
    font-weight: 900;
    color: #00283a;
    line-height: 20px;
    -webkit-box-reflect: below -5px linear-gradient(transparent, rgba(0, 0, 0, .4));
}

.c-divider {
    height: 1px;
    border-bottom: dotted 2px rgba(225, 225, 235, .9);
    width: 100%;
    margin: 20px 0;
}

.card-item-content {
    font-size: 15px;
    color: #5e5e5e;
}

.technology-card {
    width: 100%;
    aspect-ratio: 16 / 10;
}

.card-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    text-align: center;
    border-radius: 10px;
    padding: 15px;
    height: 100%;
    box-shadow: 0 2px 4px -2px #00000026;
    background-color: #fff;
    background-image: url(bg-map-9bef45bb.png);
    background-position: center center;
}

.card-item::after {
    content: "";
    position: absolute;
    left: 30px;
    top: -8px;
    height: 8px;
    width: calc(100% - 60px);
    background-color: #fcfcfe;
    border-radius: 5px 5px 0 0;
    opacity: .3;
}

@media screen and (max-width: 768px) {
    .main-slideLeft {
        order: 3;
    }
}
</style>
