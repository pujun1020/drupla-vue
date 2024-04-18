<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import Menu from "@/components/menu/Menu.vue";
import mouseFollow from "@/components/mouseFollow/mouseFollow.vue";
import { onBeforeMount, onMounted, ref } from "vue";
import loading from '@/components/loading/loading.vue'
import "animate.css"
/* let isloading=ref(true)
onMounted(() => {
  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      isloading.value = false;
    }
  };
}); */
</script>

<template>
  <div class="menu-height" style="height: 80px;">
    <Menu></Menu>
    <div id="progress"></div>
  </div>
  
  <mouseFollow></mouseFollow>
  <div class="site-content">
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Suspense>
          <template #default>
            <component :is="Component"></component>
          </template>
          <!-- 加载中状态 -->
          <template #fallback>
            <loading></loading>
          </template>
        </Suspense>
      </template>
    </RouterView>
  </div>
</template>

<style scoped>
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
