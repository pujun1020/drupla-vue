<script setup lang="ts">
import { ref, reactive, defineAsyncComponent, watchEffect, onMounted, onDeactivated, onActivated } from "vue";
import PjHover from '@/components/PjHoverImg/PjHoverImg.vue';
import Intro from "@/components/PjIntro/PjIntro.vue";
import MainContainer from '@/components/PjMian/PjMian.vue';
import PjEchart from "@/components/PjEcharts/PjMapEchart.vue";
import Backtop from '@/components/PjBackTop/PjBackTop.vue'
import Homebaner from "@/components/PjHomeBanner/PjHomeBanner.vue";
import PjServiceCard from '@/components/PjServiceCard/PjServiceCard.vue'
import PjAbout from '@/components/PjAbout/PjAbout.vue'
import { TimeUtils } from "@/utils/JsUtil/util.time";
import lazyLoadImages from "@/utils/JsUtil/util.lazyLoad";
import { openFullscreen,openElementFullscreen } from '@/utils/JsUtil/util.common'
import PjHomeArticleList from '@/components/PjHomeArticleList/PjHomeArticleList.vue'
import ProfileCard from '@/components/ProfileCard/ProfileCard.vue'
import { ElProgress, ElButton} from "element-plus"
// 实现平滑滚动到锚点的方法
const scrollToSection1 = (id: string) => {
  const dom = document.querySelector(id)
  /* console.log(dom) */
  dom?.scrollIntoView({ behavior: "smooth" });
};

onMounted(() => {
  lazyLoadImages()//懒加载函数
  let currentDate = Number('1721030402573');
  /* console.log(TimeUtils.formatTime(currentDate)) */
});

onActivated(() => {
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
  console.log("🚀 ~ onActivated ~ 调用时机为首次挂载--------:")
})


onDeactivated(() => {
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
  console.log("🚀 ~ onDeactivated ~ DOM--------:")
})
</script>

<template>

  <div class="">---------
<!--     333333333333333333
        <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button> -->
    <!-- <ProfileCard></ProfileCard> -->
    <Intro @mose="scrollToSection1"></Intro>
    <Homebaner></Homebaner>
    <MainContainer></MainContainer>
    <PjAbout></PjAbout>
    <PjServiceCard></PjServiceCard>
    <PjHomeArticleList></PjHomeArticleList>
    <PjEchart></PjEchart>
    <Backtop></Backtop>
<!--     <span @click="openFullscreen">全屏</span>
    <img src="/home-bg.jpg" @click="openElementFullscreen" style="max-width: 600px;" alt=""> -->
    <!-- <img src="@/assets/logo.svg" class="lazy-image" data-src="http://8.134.37.43:5178/sites/default/files/cardsite-img/two-update/newcard.jpg" alt=""> 测试懒加载-->
  </div>
</template>

<style scoped></style>
