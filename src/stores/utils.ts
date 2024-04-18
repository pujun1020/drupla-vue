import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const useUtilsStore = defineStore('utils', () => {
  const count = ref(0)
  let randomColor = ref(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  let siteTextColors = ref("#000000")
  let borderBottomColor = ref("#dcdfe6")
  let backgroundWhiteColor = ref("#ffffff")
  //随机生成一个rgba的颜色
  function randomRGBColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgba(${r},${g},${b},0.5)`;
  }
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  return { count, randomColor,doubleCount, increment,siteTextColors,borderBottomColor,backgroundWhiteColor,randomRGBColor}
})
