<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue"
import { useUtilsStore } from "@/stores/utils";
let utilsStore = useUtilsStore();
const mousebox = ref<HTMLDivElement | null>(null);

function updateMousePosition(e: MouseEvent) {
    if ((e.target as HTMLDivElement).classList.contains("mouselink")) {
        (mousebox.value as HTMLDivElement).style.width = '30px';
        (mousebox.value as HTMLDivElement).style.height = '30px';
    }else{
        (mousebox.value as HTMLDivElement).style.width = '60px';
        (mousebox.value as HTMLDivElement).style.height = '60px';
    }

    (mousebox.value as HTMLDivElement).style.border = `1px solid ${utilsStore.randomColor}`;
    (mousebox.value as HTMLDivElement).style.top = (e.pageY - (mousebox.value as HTMLDivElement).offsetHeight / 2) + 'px';
    (mousebox.value as HTMLDivElement).style.left = (e.pageX - (mousebox.value as HTMLDivElement).offsetWidth / 2) + 'px';
}
function updatemouseleavePosition(e: MouseEvent) {
    (mousebox.value as HTMLDivElement).style.width = '0px';
    (mousebox.value as HTMLDivElement).style.height = '0px';
    (mousebox.value as HTMLDivElement).style.border = `0px solid ${utilsStore.randomColor}`;
}

let updatescrollleavePosition=(e:Event)=>{
    (mousebox.value as HTMLDivElement).style.top = ((e as WheelEvent).pageY - (mousebox.value as HTMLDivElement).offsetHeight / 2) + 'px';
    (mousebox.value as HTMLDivElement).style.left = ((e as WheelEvent).pageX - (mousebox.value as HTMLDivElement).offsetWidth / 2) + 'px';
}

onMounted(() => {
    if (document.body) {
        document.body.addEventListener('mousemove', updateMousePosition);
        document.body.addEventListener('mouseleave', updatemouseleavePosition);
        return true
    }
    document.documentElement.addEventListener('mousemove', updateMousePosition);
    document.documentElement.addEventListener('mouseleave', updatemouseleavePosition);
    window.addEventListener('scroll', updatescrollleavePosition);

});



onUnmounted(() => {
    if (document.body) {
        document.body.removeEventListener('mousemove', updateMousePosition);
        document.body.removeEventListener('mouseleave', updatemouseleavePosition);
        return true
    }
    document.documentElement.removeEventListener('mousemove', updateMousePosition);
    document.documentElement.removeEventListener('mouseleave', updatemouseleavePosition);
    window.removeEventListener('scroll', updatescrollleavePosition);
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
    border: 0px solid v-bind('utilsStore.randomColor');
    font-size: 20px;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    transition: width 0.5s, height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 9999;
    pointer-events: none;
}
</style>
