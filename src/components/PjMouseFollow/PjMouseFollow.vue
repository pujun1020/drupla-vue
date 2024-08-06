<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue";
import { useUtilsStore } from "@/stores/utils";
let utilsStore = useUtilsStore();
const mousebox = ref<HTMLDivElement | null>(null);

function updateMousePosition(e: MouseEvent) {
  if ((e.target as HTMLDivElement).classList.contains("mouselink")) {
    (mousebox.value as HTMLDivElement).style.width = "30px";
    (mousebox.value as HTMLDivElement).style.height = "30px";
  } else {
    (mousebox.value as HTMLDivElement).style.width = "60px";
    (mousebox.value as HTMLDivElement).style.height = "60px";
  }

  (
    mousebox.value as HTMLDivElement
  ).style.border = `1px solid ${utilsStore.randomColor}`;
  (mousebox.value as HTMLDivElement).style.top =
    e.pageY - (mousebox.value as HTMLDivElement).offsetHeight / 2 + "px";
  (mousebox.value as HTMLDivElement).style.left =
    e.pageX - (mousebox.value as HTMLDivElement).offsetWidth / 2 + "px";
}
function updatemouseleavePosition(e: MouseEvent) {
  (mousebox.value as HTMLDivElement).style.width = "0px";
  (mousebox.value as HTMLDivElement).style.height = "0px";
  (
    mousebox.value as HTMLDivElement
  ).style.border = `0px solid ${utilsStore.randomColor}`;
}
/* 
pageY、clientY、offsetY的区别
pageY：鼠标在页面上的位置,从页面左上角开始,即是以页面为参考点,不随滑动条移动而变化；
clientY：鼠标在页面上可视区域的位置,从浏览器可视区域左上角开始,即是以浏览器滑动条此刻的滑动到的位置为参考点；
offsetY：IE特有,鼠标相比较于触发事件的元素的位置,以元素盒子模型的内容区域的左上角为参考点,如果有boder,可能出现负值。

 */
let updatescrollleavePosition = (e: Event) => {
  (mousebox.value as HTMLDivElement).style.top =
    (e as WheelEvent).pageY -
    (mousebox.value as HTMLDivElement).offsetHeight / 2 +
    "px";
  (mousebox.value as HTMLDivElement).style.left =
    (e as WheelEvent).pageX -
    (mousebox.value as HTMLDivElement).offsetWidth / 2 +
    "px";
};

onMounted(() => {
  if (document.body) {
    document.body.addEventListener("mousemove", updateMousePosition);
    document.body.addEventListener("mouseleave", updatemouseleavePosition);
    return true;
  }
  document.documentElement.addEventListener("mousemove", updateMousePosition);
  document.documentElement.addEventListener(
    "mouseleave",
    updatemouseleavePosition
  );
  window.addEventListener("scroll", updatescrollleavePosition);
});

onUnmounted(() => {
  if (document.body) {
    document.body.removeEventListener("mousemove", updateMousePosition);
    document.body.removeEventListener("mouseleave", updatemouseleavePosition);
    return true;
  }
  document.documentElement.removeEventListener(
    "mousemove",
    updateMousePosition
  );
  document.documentElement.removeEventListener(
    "mouseleave",
    updatemouseleavePosition
  );
  window.removeEventListener("scroll", updatescrollleavePosition);
});
</script>

<template>
  <div ref="mousebox" class="mousebox"></div>
</template>

<style scoped>
.mousebox {
 
  position: absolute;
  top: 0;
  left: 0;
  border: 0px solid v-bind("utilsStore.randomColor");
  font-size: 20px;
  width: 0px;
  height: 0px;
  border-radius: 50%;
  transition: width 0.5s, height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 9999;
  pointer-events: none;
}

@media screen and (max-width: 992px) {
  .mousebox {
    display: none;
  }

}
</style>
