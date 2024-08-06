<script setup lang="ts">
import { ref, reactive, watchEffect, onBeforeUnmount, onMounted, watch } from 'vue'
import setting from '@/setting'
import PjMenuList from '@/components/PjMenuList/PjMenuList.vue'
import { useMenuIsShowStore } from "@/stores/menuIsShow";
let MenuIsShowStore = useMenuIsShowStore();
const showHeader = ref(true)
const state = reactive({
  lastScrollTop: 0
})
let moreMenu = ref<HTMLDivElement | null>(null)
const watchScroll = () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop === 0) {
    showHeader.value = true
  } else showHeader.value = scrollTop < state.lastScrollTop;
  state.lastScrollTop = scrollTop
}
onMounted(() => {
  var paths = document.querySelectorAll('.path');

  paths.forEach(function (path) {
    const d = (path as SVGPathElement).getTotalLength();
    (path as SVGPathElement).style.setProperty('--d', d as any);
  })
  window.addEventListener('scroll', watchScroll)
  /* console.log(moreMenu.value) */
  moreMenu.value?.addEventListener('click', () => {
    (moreMenu.value?.previousElementSibling as HTMLDivElement).classList.toggle('show')
    if (((moreMenu.value as HTMLDivElement).previousElementSibling as HTMLDivElement).classList.contains('show')) {
      (moreMenu.value as HTMLDivElement).classList.add("active")
    } else {
      (moreMenu.value as HTMLDivElement).classList.remove("active")
    }
  })
  MenuIsShowStore.menuIsShow = (moreMenu.value?.previousElementSibling as HTMLDivElement)


})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', watchScroll);
});

</script>

<template>
  <div class="pujun-theme-header" :style="{ top: showHeader ? 0 : '-100%' }">
    <div class="header-logo">
      <RouterLink to="/">
        <svg width="73.008179" height="33.000458" viewBox="0 0 73.0082 33.0005" fill="none"
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>
            Created with Pixso.
          </desc>
          <defs />
          <path class="path" id="矢量 21"
            d="M1.5 1.94L1.5 2.11C1.5 2.22 1.5 4.37 1.5 8.56C1.5 12.75 1.5 17.09 1.5 21.59C1.5 26.09 1.5 28.89 1.5 29.99C1.5 31.08 1.53 31.58 1.58 31.48"
            stroke="#000000" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linecap="round" />
          <path class="path" id="矢量 22"
            d="M1.5 2.19L1.59 2.09C1.64 2.02 1.88 1.93 2.31 1.83C2.74 1.73 3.61 1.67 4.93 1.63C6.25 1.6 6.98 1.62 7.12 1.7C7.27 1.78 7.39 1.87 7.5 1.97C7.6 2.08 7.76 2.22 7.97 2.41C8.19 2.6 8.36 2.82 8.5 3.07C8.64 3.32 8.79 3.62 8.94 3.97C9.1 4.32 9.22 4.6 9.32 4.83C9.43 5.05 9.5 5.27 9.55 5.49C9.6 5.71 9.64 6.03 9.66 6.47C9.69 6.9 9.63 7.22 9.47 7.43C9.31 7.63 9.05 7.97 8.71 8.42C8.36 8.88 8.09 9.21 7.88 9.41C7.67 9.62 7.41 9.79 7.08 9.93C6.75 10.07 6.42 10.21 6.09 10.36C5.77 10.5 5.39 10.64 4.96 10.78C4.54 10.92 4.19 11.01 3.93 11.05C3.66 11.1 3.37 11.15 3.05 11.21"
            stroke="#000000" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linecap="round" />
          <path class="path" id="矢量 23"
            d="M13.81 5.47L13.72 5.64C13.66 5.76 13.61 6.57 13.57 8.07C13.52 9.58 13.58 10.82 13.74 11.81C13.9 12.8 14.07 13.58 14.25 14.14C14.43 14.7 14.61 15.15 14.81 15.5C15 15.85 15.2 16.11 15.41 16.27C15.62 16.44 15.93 16.61 16.35 16.77C16.77 16.94 17.21 17.04 17.68 17.07C18.14 17.11 18.51 17.07 18.8 16.96C19.09 16.85 19.37 16.65 19.63 16.37C19.89 16.08 20.29 15.7 20.82 15.24C21.34 14.77 21.82 14.31 22.24 13.86C22.67 13.41 23.05 12.83 23.4 12.11C23.75 11.39 24 10.67 24.15 9.95C24.3 9.23 24.46 8.66 24.64 8.25C24.82 7.85 24.97 7.53 25.09 7.32C25.21 7.1 25.28 6.91 25.31 6.74C25.34 6.57 25.35 6.49 25.35 6.49C25.35 6.49 25.35 6.88 25.35 7.66C25.35 8.45 25.33 9.49 25.28 10.78C25.23 12.07 25.2 13.08 25.2 13.8C25.2 14.51 25.29 15.04 25.47 15.39C25.64 15.73 25.81 15.96 25.97 16.06C26.12 16.17 26.24 16.27 26.31 16.37"
            stroke="#000000" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linecap="round" />
          <path class="path" id="矢量 24"
            d="M29.3 1.58L29.39 1.72C29.45 1.81 29.88 1.91 30.68 2.02C31.48 2.13 32.74 2.12 34.47 1.97C36.2 1.83 37.46 1.73 38.24 1.67C39.02 1.61 39.27 1.56 39.01 1.52C38.74 1.48 38.47 1.49 38.21 1.55C37.94 1.61 37.62 1.73 37.25 1.91C36.88 2.09 36.63 2.23 36.49 2.33C36.36 2.43 36.26 2.55 36.18 2.7C36.11 2.84 36.05 3.03 36.03 3.25C36 3.48 35.96 3.9 35.91 4.49C35.86 5.09 35.89 5.73 36 6.4C36.11 7.08 36.25 7.99 36.42 9.14C36.6 10.28 36.71 11.14 36.76 11.71C36.81 12.28 36.87 13.28 36.94 14.72C37.02 16.16 36.9 17.3 36.59 18.14C36.28 18.99 36.05 19.56 35.9 19.87C35.76 20.19 35.58 20.42 35.37 20.56C35.16 20.71 34.83 20.84 34.38 20.94C33.94 21.05 33.49 21.14 33.05 21.21C32.61 21.28 32.07 21.33 31.42 21.35C30.77 21.36 30.29 21.26 29.97 21.03C29.66 20.8 29.35 20.51 29.05 20.16C28.74 19.81 28.42 19.4 28.06 18.93C27.71 18.46 27.47 18.08 27.35 17.8"
            stroke="#000000" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linecap="round" />
          <path class="path" id="矢量 25"
            d="M42.52 6.19L42.52 6.49C42.52 6.7 42.5 7.9 42.45 10.12C42.4 12.34 42.43 14 42.56 15.11C42.7 16.22 42.92 17.12 43.23 17.83C43.55 18.53 43.98 19.1 44.52 19.53C45.06 19.96 45.71 20.18 46.48 20.19C47.24 20.2 47.91 20.02 48.49 19.64C49.07 19.26 49.64 18.69 50.19 17.94C50.75 17.19 51.23 16.1 51.65 14.68C52.06 13.26 52.32 12.2 52.42 11.5C52.52 10.8 52.65 10.08 52.83 9.34C53 8.59 53.15 8.05 53.27 7.73C53.39 7.4 53.48 7.16 53.53 7.02C53.59 6.87 53.64 6.87 53.69 7.02C53.74 7.16 53.79 7.83 53.84 9.01C53.89 10.2 53.93 11.04 53.96 11.55C53.99 12.06 54.03 12.6 54.08 13.17C54.13 13.75 54.23 14.27 54.38 14.75C54.53 15.23 54.66 15.67 54.77 16.07C54.87 16.47 54.96 16.77 55.03 16.96"
            stroke="#000000" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linecap="round" />
          <path class="path" id="矢量 26"
            d="M56.96 7.89L57 7.75C57.03 7.65 57.17 7.56 57.41 7.48C57.65 7.39 57.89 7.34 58.12 7.32C58.35 7.3 58.56 7.32 58.77 7.38C58.98 7.44 59.16 7.57 59.32 7.78C59.47 7.99 59.66 8.21 59.89 8.45C60.11 8.7 60.3 9.02 60.46 9.41C60.61 9.81 60.7 10.97 60.72 12.91C60.74 14.85 60.75 16.07 60.75 16.55C60.75 17.03 60.73 17.46 60.68 17.82C60.63 18.19 60.59 18.36 60.56 18.35C60.53 18.33 60.5 18.08 60.48 17.6C60.46 17.11 60.61 16.1 60.92 14.54C61.24 12.99 61.58 11.64 61.96 10.5C62.34 9.35 62.65 8.47 62.9 7.84C63.14 7.22 63.34 6.79 63.49 6.56C63.63 6.33 63.82 6.09 64.04 5.85C64.26 5.61 64.76 5.46 65.52 5.41C66.28 5.37 66.8 5.41 67.07 5.54C67.34 5.67 67.75 6.12 68.31 6.88C68.86 7.64 69.34 8.54 69.74 9.6C70.14 10.65 70.43 11.45 70.6 11.99C70.78 12.53 70.92 13.21 71.02 14.05C71.12 14.88 71.18 15.59 71.2 16.17C71.23 16.75 71.24 17.09 71.24 17.17C71.24 17.26 71.26 17.43 71.31 17.68C71.36 17.94 71.4 18.12 71.43 18.24C71.45 18.36 71.47 18.46 71.5 18.56"
            stroke="#000000" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linecap="round" />
        </svg>
        <!-- <span class="logo-text">{{ setting.websiteInfo.name || 'PU JUN' }}</span> -->
      </RouterLink>
    </div>
    <div class="header-right">
      <PjMenuList />
    </div>
    <div class="more-menu" ref="moreMenu">
      <div class="more-menu-inner">
        <box-icon type='logo' name='mongodb' color="green"></box-icon>
        <box-icon type='logo' name='mongodb' color="green"></box-icon>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-logo a {
  height: 100%;
  display: flex;
  align-items: center;
}

.path {
  stroke-width: 4;
  stroke: #fff;
  stroke-dasharray: var(--d);
  stroke-dashoffset: var(--d);
  animation: stroke 1s 2s linear forwards;
  stroke-linecap: square;

}

@keyframes stroke {
  to {
    stroke-dashoffset: 0;
  }
}

.more-menu {
  position: absolute;
  right: 10px;
  top: 25%;
  transform: translateY(0%);
  display: none;
  cursor: pointer;
}

.more-menu.active {
  top: 50%;
  transform: translateY(-50%);
}



.pujun-theme-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 50px;
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  width: 100%;
  max-width: 100vw;
  top: -100%;
  left: 0;
  z-index: 9;
  pointer-events: auto;
  box-sizing: border-box;
  transition: all .4s ease;
}

.logo-text {
  color: #eee;
  font-weight: 700;
  font-size: 20px;
  font-family: Droid Sans Mono;
  padding: 0 15px;
  cursor: pointer;
  display: inline-block;
}

.more-menu-inner {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 992px) {
  .pujun-theme-header {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 10px 30px;
  }

  .more-menu {
    display: block;
  }

  .header-right {
    display: none;
  }

  .header-right.show {
    display: block;
  }

  .logo-text {
    padding: 0 7px;
  }

}
</style>
