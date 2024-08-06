<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue";
import type { leftBJ } from '@/types/Interface/index.ts'
const backgroundImg = ref('url(/articleLeft2.jpg)');
import { onBeforeRouteLeave, useRoute, useRouter } from "vue-router";
let route = useRoute()
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
  if (route.meta.page == 'postPageList') {
    console.log(route.meta.page)
    document.body.style.overflowY = "hidden"
  }
  timer = setInterval(() => {
    backgroundImg.value = `url(${leftBj[currentIndex.value].bj})`;
    currentIndex.value++
    if (currentIndex.value >= leftBj.length) {
      currentIndex.value = 0
    }
  }, 3000)
})
//清除定时器
onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="pujun-postPagePist-page">
    <div class="pujun-postPagePist-page-left" :style="{ 'background-image': backgroundImg }">
    </div>
    <div class="pujun-postPagePist-page-right">
    </div>
  </div>
</template>

<style scoped>
.pujun-postPagePist-page-left {
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url(/articleLeft.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  transform-style: preserve-3d;
  transition: background-image 2s ease-in-out;
  will-change: transition;
  background-position: center;
}

.pujun-postPagePist-page-right {
  background-color: rgb(126, 126, 75)
}

.pujun-postPagePist-page {
  display: flex;
}

.pujun-postPagePist-page .pujun-postPagePist-page-left {
  height: 100vh;
  width: 35%;
}

.pujun-postPagePist-page .pujun-postPagePist-page-right {
  height: 100vh;
  width: 65%;
}

@media screen and (max-width: 992px) {
  .pujun-postPagePist-page {
    flex-wrap: wrap;
  }

  .pujun-postPagePist-page .pujun-postPagePist-page-left {
    height: 480px;
    width: 100%;
  }

  .pujun-postPagePist-page .pujun-postPagePist-page-right {
    height: 50vh;
    width: 100%;
  }
}
body
{
  background-color: rgb(255, 255, 0);
}
</style>