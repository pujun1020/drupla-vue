<script setup lang="ts">
import { computed } from 'vue'
import { useLoadingStore } from "../../stores/loading";

const loadingStore = useLoadingStore()
const loadingState = computed(() => {
    return loadingStore.loading
});



</script>

<template>
    <div id="loading" v-show="loadingState">
        <div class="pujun-loading"></div>
    </div>
</template>

<style scoped>
#loading {
    --color-primary: #f54325;
    --color-info: #b8c1c5;
    --color-success: #80b178;
    --color-warning: #d8c49a;
    --color-danger: #d1786b;
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #F9F9F9;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pujun-loading{
    position: relative;
    width: 50px;
    perspective: 200px;
}

.pujun-loading:before,
.pujun-loading:after {
    position: absolute;
    width: 20px;
    height: 20px;
    content: "";
    animation: jumping 0.5s infinite alternate;
    background: rgba(0, 0, 0, 0);
}

.pujun-loading:before {
    left: 0;
}

.pujun-loading:after {
    right: 0;
    animation-delay: 0.15s;
}

@keyframes jumping {
    0% {
        transform: scale(1) translateY(0px) rotateX(0deg);
        box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }

    100% {
        transform: scale(1.2) translateY(-25px) rotateX(45deg);
        background: var(--color-primary);
        /* Replace with your actual variable or color */
        box-shadow: 0 25px 40px var(--color-primary);
        /* Replace with your actual variable or color */
    }
}
</style>
