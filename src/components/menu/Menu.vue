<script setup lang="ts">

import { useUtilsStore } from "@/stores/utils";
import { ref, reactive, onMounted } from "vue"
import { useRouter } from "vue-router";
let menudom = ref<HTMLLIElement>();//解决类型“never”上不存在属性“classList”。
let randomColor2=ref("");
let hightlighter = ref<HTMLDivElement | null>(null);
let liactive=ref<HTMLLIElement | null>(null);
let utilsStore = useUtilsStore();
let router = useRouter();
onMounted(() => {
  let elment = menudom.value?.firstChild as HTMLElement;//类型“ChildNode”上不存在属性“getBoundingClientRect”。
  let lineboxx = elment.offsetLeft;
  let liwidth = elment.offsetWidth;
  menudom.value?.style.setProperty("--lineboxx", lineboxx + "px");
  menudom.value?.style.setProperty("--liwidth", liwidth + "px");
 
  randomColor2.value = "#" + Math.floor(Math.random() * 16777225).toString(16);
  /* ** */

  hightlighter.value?.addEventListener('mousemove', (e) => {
    e.preventDefault();
    let x = e.pageX - hightlighter.value!.offsetLeft;
    let y = e.pageY - hightlighter.value!.offsetTop;
    hightlighter.value?.style.setProperty('--x', `${x}px`);
    hightlighter.value?.style.setProperty('--y', `${y}px`);
  })

  /* *** */
  let ulchild = menudom.value?.children as HTMLCollectionOf<HTMLLIElement>;
   
})
const openmenu = () => {
  // 获取到dom元素,进行ts非空判断
  menudom.value?.classList.toggle("active");
  let ulchild = menudom.value?.children as HTMLCollectionOf<HTMLLIElement>;
  for (let index = 0; index < ulchild.length - 1; index++) {
    const element = ulchild[index];
    element.addEventListener("mouseenter", function (e) {
      menudom.value?.style.setProperty("--lineboxx", this.offsetLeft + "px");
    });
  }
}




</script>

<template>
  <div class="container-fluid menu-wapper">
    <div class="hightlighter" ref="hightlighter">
      <ul class="menu-parent" ref="menudom">
        <li @click="router.push({
          name: 'home'
        })" class="item mouselink">首页</li>
        <li @click="router.push({
          name: 'about'
        })" class="item mouselink">关于</li>
        <li class="item mouselink">个人</li>
        <li class="item mouselink">相册</li>
        <li @click="router.push({
          name: 'article'
        })" class="item mouselink">笔记</li>
        <li class="item mouselink">开发</li>
        <li class="line-icon-wapper">
          <div class="line-icon"></div>
        </li>
      </ul>
    </div>
    <div class="menu-class-style" @click="openmenu">
      <div class="menu__icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

  </div>
</template>

<style scoped>
.hightlighter {
  --rgb: 255, 255, 255;
  --clr:v-bind('utilsStore.randomColor');
  position: relative;
  background: rgba(var(--rgb), 1);
  border-radius: 50px;
  font-size: 1.5em;
  text-transform: uppercase;
  text-decoration: none;
  overflow: hidden;

}



.hightlighter::before {
  content: '';
  position: absolute;
  top: var(--y);
  left: var(--x);
  width: 200px;
  height: 200px;
  background: radial-gradient(var(--clr), transparent, transparent);
  transform: translate(-50%, -50%);
  transition: 0.5s, top 0s, left 0s;
  opacity: 0;
}

.hightlighter:hover::before {
  opacity: 1;
  transition: opacity 1s ease;;
}

.hightlighter::after {
  content: '';
  position: absolute;
  inset: 2px;
  background: rgba(var(--rgb), 0.8);
  border-radius: 48px;
  z-index: 2;
}

/* 移动块 */
div.line-icon {
  --menu-color: v-bind('utilsStore.randomColor');
  width: 10px;
  height: 10px;
  background: var(--menu-color);
  border-radius: 50%;
}

li.line-icon-wapper {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -5px;
  left: calc(var(--lineboxx));
  width: var(--liwidth);
  transition: all 0.8s ease;
}

/* 菜单 */
.menu-wapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  background: v-bind('utilsStore.backgroundWhiteColor') !important;
  backdrop-filter: blur(7px);
  box-shadow: none;
  overflow: hidden;
  border-bottom: 1px solid v-bind('utilsStore.borderBottomColor');
  z-index: 999;
}

ul.menu-parent {
  position: relative;
  padding-left: 0;
  list-style-type: none;
  display: flex;
  gap: 20px;
  transform: translateX(50px);
  opacity: 0;
  transition: all 0.8s ease;
  z-index: 3;
}

li.item {
  color: v-bind('utilsStore.siteTextColors');
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
  padding: 10px 20px;
}
li.item.active{
  color: v-bind(randomColor2);
} 
li.item:hover {
  color: v-bind('utilsStore.randomColor');
}

ul.menu-parent.active {
  transform: translateX(0px);
  opacity: 1;
}

/* <reset-style> ============================ */
.menu__icon {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-family: inherit;
  border: none !important;
}

.menu__icon {
  width: 32px;
  height: 32px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform .4s;
}

.menu__icon span {
  width: 100%;
  height: 0.15rem;
  border-radius: 0.125rem;
  background-color: v-bind('utilsStore.randomColor');
  transition: width .4s, transform .4s, background-color .4s;
}

.menu__icon :nth-child(1) {
  width: 75%;
}

.menu__icon :nth-child(2) {
  width: 50%;
}

.menu__icon:hover {
  transform: rotate(-90deg);
}

.menu-class-style {
  padding: 10px;
}

.menu-class-style:hover .menu__icon span {
  width: .25rem;
  transform: translateX(10px);
  background-color: v-bind(randomColor2);
}
</style>
