<script setup lang="ts">
import { ref ,reactive,onMounted,onUnmounted} from "vue"
import BlockTitle from "@/components/BlockTile/BlockTitle.vue";
</script>

<template>
  <div class="">
    <div class="container pujun-about">
      <BlockTitle titleName="随笔" :top="60"></BlockTitle>
      <div class="animate-me">
        "细数<span class="me-text me-text-b">流年</span>，频频<span class="me-text me-text-e">回眸</span>，过往的
        <span class="me-text me-text-e">千回百转</span>到最后都成了<span class="me-text me-text-a">风轻云淡</span>的念想，曾经的
        <span class="me-text me-text-e">风烟往事</span>都成了<span class="me-text me-text-d">茶余饭后</span>的闲话与聊侃。人生
        <span class="me-text me-text-e">聚散无常</span>，生活充满变数，走过了，便从容，放下了，就轻松。没有经历，就没有
        <span class="me-text me-text-e">体悟</span>；没有<span class="me-text me-text-d">领悟</span>，就不会
        <span class="me-text me-text-a">珍惜</span>。那些看似浅显的<span class="me-text me-text-d">道理</span>，非要亲历过，才能深悟，非要亲为过，方可领会。那些看似清淡如水的
        <span class="me-text me-text-c">寻常点滴</span>，回头怀想，才顿觉值得一生<span class="me-text me-text-d">追忆</span>，终生
        <span class="me-text me-text-e">回味</span>"
      </div>
    </div>
  </div>
</template>

<style scoped>


.animate-me {
  color: #fff;
  transition: all .4s linear;
  font-size: 1.5rem;
  letter-spacing: 2px;
  font-family: plantc, "Source Han Serif", serif;
  padding: 2rem 10px;
  word-break: break-word;
  text-align: center;
}

.animate-me:hover {
  color: #c4c3c3;
}

.animate-me .me-text-a {
  color: transparent;
  background-clip: text;
  font-size: 1.9rem;
  background-image: linear-gradient(to right, rgb(36, 198, 220), rgb(81, 74, 157));
}



.animate-me .me-text-b {
  color: transparent;
  background-clip: text;
  font-size: 1.9rem;
  background-image: linear-gradient(to right, rgb(76, 184, 196), rgb(60, 211, 173));
}

.animate-me .me-text-c {
  color: transparent;
  background-clip: text;
  font-size: 1.9rem;
  background-image: linear-gradient(to right, rgb(221, 94, 137), rgb(247, 187, 151));
}

.animate-me .me-text-d {
  color: transparent;
  background-clip: text;
  font-size: 1.9rem;
  background-image: linear-gradient(to right, rgb(221, 94, 137), rgb(247, 187, 151));
}

.animate-me .me-text-e {
  color: transparent;
  background-clip: text;
  font-size: 1.9rem;
  background-image: linear-gradient(to right, rgb(60, 165, 92), rgb(181, 172, 73));
}
</style>

