<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import PjBanner from '@/components/PjPageBanner/PjPageBanner.vue'
import Prism from 'prismjs';
let preDom = ref<HTMLPreElement[]>([]);
onMounted(() => {
  Prism.highlightAll();
  if (preDom.value.length > 0) {
    [...preDom.value].forEach((item) => {
      /* console.log(item.querySelector('code')?.offsetWidth, item.offsetWidth - 55) */
      if ((item.querySelector('code') as HTMLElement).offsetWidth >= item.offsetWidth - 55) {
        /* console.log('大于') */
        item.style.overflowX = 'scroll';
        item.style.overflowY = 'hidden';
      } else {
        /* console.log('小于') */
        item.style.overflowX = 'hidden';
        item.style.overflowY = 'hidden';
      }
    })
  }
  /* console.log(preDom.value?.querySelectorAll('code')) */
})
let code = `<template>
<div class="pujun-about container-1920">
    <pre><code class="language-js line-numbers">{{ 999 }}</code></pre>
    <pre><code class="language-js line-numbers">{{ 999 }}</code></pre>
  </div>
</template>
`
</script>

<template>
  <div class="pujun-blog-page">
    <div class="pujun-blog-page-banner">
      <PjBanner current="文章" title="文章" sub-title="有趣的人记录有趣的事。">
      </PjBanner>
    </div>
    <div class="pujun-blog-page-content container">
          <div class="article-block-list-item" v-for="(item, index) in 2" :key="index">
            <div class="article-block-list-item-title">
              这是标题
            </div>
            <div class="article-block-list-item-desc">
              这是描述
            </div>
            <div class="article-block-list-item-time">2024-05-01 11:56:18 </div>
            <pre ref="preDom"><code class="language-js line-numbers">{{ code }}</code></pre>
          </div>
    </div>
  </div>
</template>

<style scoped>
.pujun-blog-page-content{
  margin-top: 40px;
}
.article-block-list-item{
  margin-bottom: 20px;
}
pre code {
    display: inline-block;
    position: relative;
    top: 20px;
    padding: 0 30px 20px 30px;
}

pre::before {
    content: "";
    position: absolute;
    background: red;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 10px;
    left: 15px;
    transform: translate(-50%);
}

pre::after {
    content: "";
    position: absolute;
    background: sandybrown;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 10px;
    left: 30px;
    transform: translate(-50%);
}

pre {
    /* overflow: hidden !important; */
    padding-left: 55px !important;
}

pre code:first-child::after {
    content: "";
    position: absolute;
    background: limegreen;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: -26px;
    left: -7px;
    transform: translate(-50%);
}
</style>
