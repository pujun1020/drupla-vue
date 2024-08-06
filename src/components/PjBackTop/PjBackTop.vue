<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue"
let scrollfun = () => {
    var scrollTop = document.documentElement.scrollTop;
    let docHeight = document.body.scrollHeight;
    let winHeight = window.innerHeight;

    // 计算 stroke-dashoffset 的值
    let circleLength = 307.919; // 这是路径的总长度
    let dashoffset = circleLength * (1 - scrollTop / (docHeight - winHeight));
    // 设置 stroke-dashoffset
    (document.querySelector('.scroll-top-btn svg path') as SVGPathElement).style.strokeDashoffset = `${dashoffset}`;
    if (scrollTop > 200) {
        (document.querySelector('.scroll-top-btn') as HTMLDivElement).classList.add('show');
    } else {
        (document.querySelector('.scroll-top-btn') as HTMLDivElement).classList.remove('show');
    }
}

onMounted(() => {
    window.addEventListener('scroll', scrollfun);
})
// 页面卸载时移除监听事件
onUnmounted(() => {
    window.removeEventListener('scroll', scrollfun);
})

// 回到顶部
let scrolltopfun=()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
</script>

<template>
    <div class="scroll-top-btn" @click="scrolltopfun">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
        <svg t="1666780093400" class="top-icon-svg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="1783"
            width="25" height="25">
            <path
                d="M874.666667 342.4L553.322667 665.450667c-11.434667 11.498667-25.024 17.237333-40.789334 17.237333-15.765333 0-29.354667-5.76-40.789333-17.237333L149.333333 341.333333c101.866667 84.032 227.456 133.632 363.306667 133.632 135.296 0 260.394667-49.173333 362.026667-132.544z"
                p-id="1784"></path>
        </svg>
    </div>
</template>

<style scoped>
.scroll-top-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    clip-path: inset(50% round 50%);
    transition: clip-path 0.3s linear;
}

.scroll-top-btn.show {
    clip-path: inset(0% round 50%);
}

.scroll-top-btn svg {
    fill: none;
}
svg.top-icon-svg path {
    fill: #f54325;
}
svg.top-icon-svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(180deg);
}
.scroll-top-btn svg path {
    stroke: #f54325;
    stroke-width: 4;
    transition: stroke-dashoffset 10ms linear 0s;
    stroke-dasharray: 307.919, 307.919;
    stroke-dashoffset: 307.919;
}
</style>
