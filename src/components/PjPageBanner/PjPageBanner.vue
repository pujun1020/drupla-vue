<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { useRouter } from 'vue-router'
import { goToPage } from '@/utils/JsUtil/util.router'
let router = useRouter()
let props = defineProps({
    img: {
        type: String,
        default: () => '/home-bg.jpg'
    },
    title: {
        type: String,
        default: () => "Completed projects"
    },
    subTitle: {
        type: String,
        default: () => "Interesting People Record Interesting."
    },
    current: {
        type: String,
        default: () => "CURRENT"
    },
    goTopath: {
        type: String,
        default: () => '/'
    },
    // 关闭背景动画
    disBgAnimate: {
        type: Boolean,
        default: () => false
    },
    // 关闭文字动画
    disTextAnimate: {
        type: Boolean,
        default: () => false
    }
})
//卡片hover
let currentMousePos = { x: 0, y: 0 };
let mouseFromCenter = { x: 0, y: 0 };
const titleDom = ref<HTMLDivElement | null>(null)
const card = ref<HTMLDivElement | null>(null)

const handleMouseleave = (event: MouseEvent) => {
    (card.value as HTMLDivElement).style.backgroundPosition = `center center`;
    (card.value as HTMLDivElement).style.transform = "none";
    /* (card.value as HTMLDivElement).style.backgroundImage='' */
}
const handleMousemove = (event: MouseEvent) => {
    /* (card.value as HTMLDivElement).style.backgroundImage='url(/home-bg.jpg)' */
    let wHeight = (card.value as HTMLDivElement).clientHeight;
    let wWidth = (card.value as HTMLDivElement).clientWidth;

    mouseFromCenter.x = currentMousePos.x - (wWidth / 2);
    mouseFromCenter.y = currentMousePos.y - (wHeight / 2);
    currentMousePos.x = event.pageX;
    currentMousePos.y = event.pageY;
    let mousePositionX = (currentMousePos.x / wWidth) * 100;

    let around1 = -1 * (currentMousePos.y * 100 / wHeight * 0.2 - 10) + 'deg';
    let around2 = (currentMousePos.x * 100 / wWidth * 0.2 - 10) + 'deg';

    if (!props.disBgAnimate) {
        /* console.log(55); */
        (card.value as HTMLDivElement).style.backgroundPosition = mousePositionX * .5 + '%' + ' ' + (currentMousePos.y / wHeight) * 25 + '%';
    }

    if (!props.disTextAnimate) {
       /*  console.log(66); */
        (card.value as HTMLDivElement).style.transform = "translateX(" + ((mouseFromCenter.x / 25) * 0.7) + "px) rotatex(" + around1 + ") rotatey(" + around2 + ")  translateY(" + ((mouseFromCenter.y / 25) * 1.65) + "px) translateZ(100px)";
    }

}
</script>

<template>
    <div class="pujun-pagebanner">
        <div class="pujun-pagebanner-banner">
            <div class="pujun-pagebanner-banner-inner" ref="titleDom" :style="{ 'background-image': `url(${img})` }"
                @mousemove="handleMousemove" @mouseleave="handleMouseleave">
                <div class="pujun-pagebanner-banner-inner-content head-text-wrap" ref="card">
                    <p class="head-title">{{ title }}</p>
                    <p class="head-title-sub">{{ subTitle }} </p>
                    <p class="head-title-sub ban-bred">

                        <span class="pujun-span-tex pujun-span-tex-link pujun-span-tex-home"
                            @click="goToPage('/', router)">
                            <box-icon name="home" color="#555"></box-icon>
                        </span>
                        <span class="pujun-span-tex">&nbsp;/&nbsp;</span>
                        <span class="pujun-span-tex pujun-span-tex-link">
                            <slot name="action"></slot>
                        </span>
                        <span class="current pujun-span-tex">{{ current }}</span>
                    </p>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pujun-span-tex {
    display: flex;
    align-items: center;
}
.head-text-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 900px;
    margin-top: 110px;
    gap: 15px;
    transform-style: preserve-3d;
    /* background-image: url(/home-bg.jpg);
    transform: translateZ(0); */
    transition: all .2s linear;
    /* padding-left: 30px; */
}

.head-title {
    font-size: 2.3rem;
    color: #fff;
    /* transform: translateZ(0); */
}

.head-title-sub {
    font-size: 1.3em;
    color: #eaeaea;
    /* transform: translateZ(0); */
}

.pujun-span-tex-home {
    display: flex;
    align-items: center;
    justify-content: center;
}

p.head-title-sub {
    display: flex;
}

p.head-title-sub.ban-bred {
    letter-spacing: .5px;
    color: #555;
    background-color: #eeeeee80;
    padding: 0 1rem;
    border-radius: 5px;
    width: 30%;
    min-width: 225px;
    transform: translateZ(0);
}

.pujun-span-tex-link {
    cursor: pointer;
    color: #555;
}

.current {
    color: #fff;

}

.head-title-sub span {
    font-size: 1.1rem;
}

/*banner*/
.pujun-pagebanner-banner-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 480px;
    background-size: cover;
    /* background-image: url(home-bg.jpg); */
    background-position: center center;
    background-repeat: no-repeat;
    transition: all .3s linear;
    background-attachment: fixed;
    transform-style: preserve-3d;
}

.pujun-pagebanner-banner {
    perspective: 1600px;
    background: linear-gradient(to top, #fff, transparent);
}
</style>
