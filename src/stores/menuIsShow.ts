import { ref} from 'vue'
import { defineStore } from 'pinia'
//当路由切换，菜单隐藏
export const useMenuIsShowStore = defineStore('MenuIsShow', () => {
    
    const menuIsShow = ref<HTMLDivElement | null>(null);

  return { menuIsShow };
});
