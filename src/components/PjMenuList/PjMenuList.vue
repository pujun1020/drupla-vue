<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, onBeforeUnmount } from "vue"
import { onBeforeRouteUpdate, useRouter } from "vue-router";
let router = useRouter()
// 定义菜单项数据
const menuItems = ref([
    { name: 'HOME', id: 'home', path: '/' },
    {
        name: 'ABOUT', id: 'about', path: '/about'
    },
    { name: 'RESUME', id: 'resume', path: '/resume' },
    { name: 'POST', id: 'post', path: '/PostPageList' },
    {
        name: 'PICTURE', id: 'blog', path: '/picture'
    },
    { name: 'OTHER', id: 'work', path: '/other' },
    { name: 'CONTACT', id: 'contact', path: '/contact' }
]);
const menuItemRefs = ref<HTMLDivElement[]>([]);
const menuItem = ref<HTMLDivElement[]>([]);
const activeIndex = ref<number>(0); // 默认设置为第一个菜单项
const overlayLeft = ref<number>(0);
const overlayTop = ref<number>(0);
const overlayWidth = ref<number>(0);
const overlayHeight = ref<number>(0);
let subMenuDom = ref<HTMLDivElement[]>([]);
let isClickMenu = ref<string>('down')
let isHoverMenu = ref<boolean>(false)

// 方法，显示选项底纹
const showOverlay = (index: number) => {
    const menuItem = menuItemRefs.value[index];
    if (menuItem) {
        overlayLeft.value = menuItem.offsetLeft;
        overlayTop.value = menuItem.offsetTop;
        overlayWidth.value = menuItem.offsetWidth;
        overlayHeight.value = menuItem.offsetHeight;
    }

};
const outOverlay = () => {
    const menuItem = menuItemRefs.value[activeIndex.value];
    if (menuItem) {
        overlayLeft.value = menuItem.offsetLeft;
        overlayTop.value = menuItem.offsetTop;
        overlayWidth.value = menuItem.offsetWidth;
        overlayHeight.value = menuItem.offsetHeight;
    }
}
// 方法，激活菜单项
const activateMenuItem = (index: number) => {
    activeIndex.value = index;
    const menuItem = menuItemRefs.value[index];
    menuItemRefs.value.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // 获取菜单项的位置和尺寸
    if (menuItem) {
        overlayLeft.value = menuItem.offsetLeft;
        overlayTop.value = menuItem.offsetTop;
        overlayWidth.value = menuItem.offsetWidth;
        overlayHeight.value = menuItem.offsetHeight;
    }
    // JSON.stringify(localStorage.setItem('activeIndex', `${index}`))


};

// 在组件挂载时获取所有菜单项的引用
onMounted(() => {

    /* console.log(router) */
    menuItemRefs.value = [...menuItem.value];
    activateMenuItem(activeIndex.value)
    if (window.innerWidth > 992) {
        /* console.log(44) */
        subMenuDom.value.forEach((item) => {
            item.addEventListener('mouseenter', function () {
                menuenterfun(item)
            });
            item.addEventListener('mouseleave', function () {
                menuleavefun(item)
            });
        })
    }

});


//组件销毁
let menuenterfun = (item: HTMLDivElement) => {
    isHoverMenu.value = true;
    isClickMenu.value = 'up';
    (item.nextElementSibling as HTMLDivElement).style.display = 'block';
    item.querySelector('.arrow')?.classList.add('arrow-up');
    ((item.querySelector('.arrow') as HTMLDivElement).querySelector('box-icon') as Element).setAttribute('color', '#fff');
}

let menuleavefun = (item: HTMLDivElement) => {
    isHoverMenu.value = false;
    isClickMenu.value = 'down';
    (item.nextElementSibling as HTMLDivElement).style.display = 'none';
    item.querySelector('.arrow')?.classList.remove('arrow-up');
    (item.querySelector('.arrow') as HTMLDivElement).style.color = '#fff';
    ((item.querySelector('.arrow') as HTMLDivElement).querySelector('box-icon') as Element).setAttribute('color', '#fff');

}


</script>

<template>
    <div class="pujun-menu-list">
        <div v-for="(item, index) in menuItems" :key="index" class="menu-item" ref="menuItem"
            @mouseenter="showOverlay(index)" @mouseleave="outOverlay" @click="activateMenuItem(index)">
                <RouterLink :to="item.path">{{ item.name }}</RouterLink>
        </div>
        <div class="overlay"
            :style="{ top: overlayTop + 'px', left: overlayLeft + 'px', width: overlayWidth + 'px', height: overlayHeight + 'px' }">
        </div>
    </div>
</template>

<style scoped>
.menu-item-one {
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu-item {
    position: relative;
}

.arrow.arrow-up {
    transform: translateX(-10px) rotate(90deg);
}

.arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-10px) rotate(0deg);
    transition: transform 0.3s ease-in-out;
}

/* .header-right {
    height: 100%;
} */

ul.subMenu {
    position: absolute;
    top: 100%;
    left: 0;
    width: min(300px, 90vw);
    list-style: none;
    padding-left: 0;
    display: none;
    /*    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    pointer-events: none; */
    background: rgba(0, 0, 0, 0.5);
}



.pujun-menu-list {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: transparent;
}

.menu-item a {

    padding: 0 10px;
    cursor: pointer;
    line-height: 45px;
    background-color: transparent;
    color: #fff;
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.09em;
    transition: all .3s linear;


}

.menu-item:hover a {
    color: #EEEEEE;
}

.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 4px;
    width: 100%;
    pointer-events: none;
    border-radius: 3px;
    border-bottom: 3px solid #ffffff;
    transition: left 0.2s ease-in, width 0.2s ease-in;
}

.menu-item.active {
    color: #fff;
    border-radius: 3px;
    border-bottom: 3px solid #ffffff;
    transition: left 0.2s ease-in, width 0.2s ease-in;
}

@media screen and (max-width: 992px) {
    .pujun-menu-list {
        flex-direction: column;
    }

    .menu-item-one {
        justify-content: flex-start;
    }

}
</style>
