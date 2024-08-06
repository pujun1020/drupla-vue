<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue"
import BlockTitle from "@/components/BlockTile/BlockTitle.vue";
import { useRouter } from 'vue-router'
import { goToPage } from '@/utils/JsUtil/util.router'
import type { leftBJ } from '@/types/Interface/index.ts'

let router = useRouter()
const backgroundPosition = ref('50% 0');

const backgroundImg = ref('url(/articleLeft2.jpg)');

let currentIndex = ref(0);
let timer: number;
let leftBj: leftBJ[] = [
    {
        bj: '/articleLeft1.jpg'
    },

    {
        bj: '/articleLeft0.jpg'
    }
    ,
    {
        bj: '/articleLeft2.jpg'
    }
]
//设置定时器响应式切换图片
onMounted(() => {
    timer = setInterval(() => {
        backgroundImg.value = `url(${leftBj[currentIndex.value].bj})`;
        currentIndex.value++
        if (currentIndex.value >= leftBj.length) {
            currentIndex.value = 0
        }
    }, 5000)
})
//清除定时器
onUnmounted(() => {
    clearInterval(timer)
})
let articleListData = ref([
    {
        id: 1,
        title: "Nuxt3项目初始化失败:Failed to download template from Nuxt3项目初始化失败:Failed to download template from",
        desc: "在 JavaScript 中，reduce 方法是数组操作中的一颗璀璨明珠，它为我们提供了一种强大而灵活的手段来处理数组元素。与其他数组方法相比，reduce 的独特之处在于其能够对数组进行累积、转换、筛选等操作，从而解决了许多复杂的问题。适当加入到我们的项目中去，写出更简洁、可读性更强的代码",
        time: "2024-05-01 11:56:18",
        img: "/blog1.png"
    },
    {
        id: 2,
        title: "Nodejs实现微信小程序支付功能前后端全流程实践 全新的微信支付Nodejs实现微信小程序支付功能前后端全流程实践 全新的微信支付",
        desc: "自己实现一个带支付功能的小程序，前端使用uniapp，后端使用Node.js，将实现微信小程序支付功能的全流程详细记录下来。使用的是全新的微信支付 APIv3，优点是 - 使用JSON作为数据交互的格式，不再使用XML效果图： 准备工作将小程序开通支付微信支付接入指引",
        time: "2024-05-01 11:56:18",
        img: "/blog1.png"
    },
    {
        id: 3,
        title: "Nodejs实现微信小程序支付功能前后端全流程实践 全新的微信支付Nodejs实现微信小程序支付功能前后端全流程实践 全新的微信支付",
        desc: "自己实现一个带支付功能的小程序，前端使用uniapp，后端使用Node.js，将实现微信小程序支付功能的全流程详细记录下来。使用的是全新的微信支付 APIv3，优点是 - 使用JSON作为数据交互的格式，不再使用XML效果图： 准备工作将小程序开通支付微信支付接入指引",
        time: "2024-05-01 11:56:18",
        img: "/blog1.png"
    }
])

</script>

<template>
    <div class="article-block-list container">
        <BlockTitle titleName="文章列表" :top="60" dataNumber="03"></BlockTitle>
        <div class="article-list">
            <div class="article-block row">
                <div class="article-block-left col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <aside class="blog-left" :style="{ 'background-image': backgroundImg }">
                        <section class="blog-l-info">
                            <p class="info-title">博文精选</p>
                            <p class="info-title-sub">有趣的人记录有趣的事。 </p>
                            <p class="info-title-sub ban-bred">
                                <span @click="goToPage('/PostPageList', router)" title="发现更多有趣的文章"> 发现更多 <i
                                        class="iconfont icon-shujuzhongxin"></i></span>
                            </p>
                        </section>
                    </aside>
                </div>
                <div class="article-block-right-content col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <div class="article-block-right" v-for="(item, index) in articleListData" :key="item.id">
                        <div class="article-block-list-item-text">
                            <div class="article-block-list-item-title">
                                {{ item.title }}
                            </div>
                            <div class="article-block-list-item-desc">
                                {{ item.desc }}
                            </div>
                            <div class="article-block-list-item-time">{{ item.time }} </div>
                        </div>
                        <div class="article-block-list-item-img">
                            <img :src="item.img" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.blog-left {
    width: 35%;
    background-color: rgba(0, 0, 0, 0.5);
    background-image: url(/articleLeft.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    transform-style: preserve-3d;
    transition: background-image 2s ease-in-out;
    will-change: transition;
}

.blog-left .blog-l-info {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}

.blog-left .blog-l-info .info-title {
    color: #fff;
    font-size: 2.1rem;
    font-family: "plantc", "Source Han Serif", serif;
    letter-spacing: 2px;
}

.blog-left .blog-l-info .info-title-sub {
    color: #EEEEEE;
}

.blog-left .blog-l-info .ban-bred {
    padding: 5px 10px;
    cursor: pointer;
    transition: all .3s linear;
}

.blog-left .blog-l-info .ban-bred:hover {
    color: #ffffff;
}


.article-block-right-content {
    margin-top: 20px;
}

.article-block-left .blog-left {
    width: 100%;
    height: 100%;
}

.article-block-right {
    display: flex;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    margin-bottom: 20px;
}

.article-block-list-item-img {
    flex: 1;
}

.article-block-list-item-text {
    flex: 2;
}

.article-block-list-item-title {
    font-size: 22px;
    transition: all 0.3s;
    margin-bottom: 10px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.article-block-list-item-title:hover {
    color: #000;
}

.article-block-list-item-desc {
    transition: all 0.3s;
}

.article-block-list-item-desc:hover {
    color: #000;
}

.article-block-list-item-time {
    font-size: 14px;
}

/* .article-block-list-item-img img{
    height: 100%
} */
</style>
