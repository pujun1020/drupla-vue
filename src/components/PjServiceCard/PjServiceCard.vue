<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, onRenderTriggered, onRenderTracked } from "vue"
import type { serviceData } from '@/types/Interface/index.ts'
import BlockTitle from "@/components/BlockTile/BlockTitle.vue";
defineProps({
    PjCardData: {
        type: Array,
        default: () => [{
            id: 1,
            title: 'WEB 网页应用开发',
            desc: '结合前沿技术和创新思维、高质量和专业水平打造的最现代、最优质的Web网页应用。',
            img: '/card-bj.png'
        },
        {
            id: 2,
            title: 'APP/小程序开发',
            desc: '高质量、高水平、快速地开发各平台的小程序,可进行开发 iOS 和 Android 等跨端APP应用程序.',
            img: '/service1.webp'
        },
        {
            id: 3,
            title: 'DRUPAL后端服务',
            desc: '快速搭建WEB服务接口，为前端应用提供后端支持.帮助解决各种DRUOAL前台相关问题。',
            img: '/service2.webp'
        }]
    }
})
onMounted(() => {


})

</script>

<template>
    <div class="container service-block">
        <BlockTitle titleName="服务" :top="60" dataNumber="02"></BlockTitle>
        <div class="service-card">
            <div class="service-card-inner" v-for="(item, index) in PjCardData" :key="(item as serviceData).id">
                <figure class="service-card-item">
                    <img :src="(item as serviceData).img" alt="">
                    <figcaption>
                        <h2>{{ (item as serviceData).title }}</h2>
                        <p>{{ (item as serviceData).desc }} </p>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
</template>

<style scoped>
.service-card {

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem;
    padding: 2rem 10px;
}
.service-card-inner {
    position: relative;
}

.service-card-inner:hover::after {
    opacity: 0;
}

figure {
    margin: 0 0 0 0;
}

.service-card-inner::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 1;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
    z-index: 1;
    -webkit-transition: all .35s steps(4);
    transition: all .35s steps(4);
}

.service-card figcaption h2 {
    color: #fff;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
}

.service-card figcaption p {
    color: #fff;
    font-weight: 300;
    text-align: center;
    opacity: .7;
}



.service-card .service-card-item:nth-child(2)::before {
    left: 0;
    right: 0;
    opacity: .8;
    top: 0;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;

}

.service-card .service-card-item:nth-child(2)::after {
    left: 0;
    right: 0;
    opacity: .8;
    top: 25%;
    -webkit-transition-delay: .1s;
    transition-delay: .1s;

}

.service-card .service-card-item:hover::before {
    left: 0;
    right: 0;
    opacity: .8;
    top: 0;



}

.service-card .service-card-item:hover::after {
    left: 0;
    right: 0;
    opacity: .8;
    top: 25%;


}


.service-card .service-card-item::before {
    background: #0a0a0a;
    height: 25%;
    position: absolute;
    content: "";
    opacity: 0;
    -webkit-transition: all .35s steps(4);
    transition: all .35s steps(4);
    z-index: 1;
    left: 50%;
    right: 50%;
    top: 0;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
}

.service-card .service-card-item {
    position: relative;
}

.service-card .service-card-item::after {
    background: #0a0a0a;
    height: 25%;
    position: absolute;
    content: "";
    opacity: 0;
    -webkit-transition: all .35s steps(4);
    transition: all .35s steps(4);
    z-index: 1;
    left: 50%;
    right: 50%;
    top: 25%;
    -webkit-transition-delay: .1s;
    transition-delay: .1s;
}

.service-card img {
    max-width: 100%;
    object-fit: cover;
    aspect-ratio: 16/9;
    width: 100%;
}

.service-card figcaption {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    padding: 30px;
}

.service-card .service-card-item:nth-child(2) figcaption::after {
    left: 0;
    right: 0;
    opacity: .8;
    top: 75%;
    transition-delay: .3s;
    z-index: -1;
}

.service-card .service-card-item:nth-child(2) figcaption::before {
    left: 0;
    right: 0;
    opacity: .8;
    top: 50%;
    transition-delay: .2s;
    z-index: -1;
}

.service-card .service-card-item:hover figcaption::after {
    left: 0;
    right: 0;
    opacity: .8;
    top: 75%;
    z-index: -1;
    transition-delay: .3s;
}

.service-card .service-card-item:hover figcaption::before {
    left: 0;
    right: 0;
    opacity: .8;
    top: 50%;
    z-index: -1;
    transition-delay: .2s;
}


.service-card-item figcaption::after {
    background: #0a0a0a;
    height: 25%;
    position: absolute;
    content: "";
    opacity: 0;
    -webkit-transition: all .35s steps(4);
    transition: all .35s steps(4);
    z-index: 1;
    left: 50%;
    right: 50%;
    top: 75%;
    transition-delay: .3s;
}

.service-card-item figcaption::before {
    background: #0a0a0a;
    height: 25%;
    position: absolute;
    content: "";
    opacity: 0;
    -webkit-transition: all .35s steps(4);
    transition: all .35s steps(4);
    z-index: 1;
    left: 50%;
    right: 50%;
    top: 50%;
    transition-delay: .2s;
}
</style>
