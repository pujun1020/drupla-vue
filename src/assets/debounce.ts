// ts定义 debounce 函数，在规定时间里只执行最新的一次，而节流在规定时间里只执行第一次
import { ref } from "vue";
function debounce(func: (...args: any[]) => void, wait: number, immediate?: boolean) {
    let timeout: number | undefined;
    const context = ref<any>(null);
    return function (this: any, ...args: any[]) {
      context.value = this;
      const later = function () {
        timeout = undefined;
        if (!immediate) func.apply(context.value, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait) as any;
      if (callNow) func.apply(context.value, args);
    };
  };
  export default debounce;