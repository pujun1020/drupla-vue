<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import Menu from "@/components/PjMenu/PjMenu.vue";
import mouseFollow from "@/components/PjMouseFollow/PjMouseFollow.vue";
import loading from '@/components/PjLoading/PjLoading.vue'
import "animate.css"

</script>

<template>
  <Menu></Menu>
  <div id="progress"></div>
  <mouseFollow></mouseFollow>
  <div class="site-content">
    <RouterView></RouterView>
    <loading></loading>
  </div>
</template>

<style scoped>
/* .site-content {
  height: 100vh;
} */

@keyframes grow-progress {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}

#progress {
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 3px;
  transform-origin: 0 50%;
  background: rgb(42, 195, 60);
  z-index: 9999;
}

@keyframes scaleProgress {
  0% {
    transform: scaleX(0);
  }

  100% {
    transform: scaleX(1);
  }
}

@keyframes colorChange {
  0% {
    background-color: red;
  }

  50% {
    background-color: yellow;
  }

  100% {
    background-color: lime;
  }
}

#progress {
  animation:
    scaleProgress auto linear,
    colorChange auto linear;
  animation-timeline: scroll(root);
}
</style>
