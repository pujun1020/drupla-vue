<script setup lang="ts">
import { ref, onMounted, reactive, onBeforeMount } from 'vue'
import type { userData } from "@/types/Interface/index";
/* const userData= ref(await loadUserData() as userData)  */
let userData = reactive({
    name: '',
    pic: '',
    bio: ''
} as userData)
const loadUserData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'Matt Maribojoc 蒲俊',
                pic: 'https://zxuqian.cn/img/logo.webp',
                bio: 'I run a VueJS community over at, develop web sites, and post whatever I find cool on the Internet.',
            })
        }, 2000)
    })
}

let a=()=>{
    console.log('5555555555555')
}
let b=()=>{
    console.log(1)
}
const pJfun = (fun:Function) => {
    return new Promise((resolve) => {
        fun()
        resolve('')
    })
}
await pJfun(a)
await pJfun(b)










let apiuserData = await loadUserData() as userData
userData={...userData,...apiuserData}
/* 如果使用 <script setup>，那么顶层 await 表达式会自动让该组件成为一个异步依赖：如果在生命周期钩子中完成， await 表达式就是非顶层了，Suspense就会失效*/
/* 还需要熟读reactive，不能直接替换整个对象，操作Object.assign(param,param1) 直接进行赋值改变。是实现方式之一 */
</script>

<template>
    <div class="profile-card">
        <div class="profile-image">
            <img class="profile-image__img" :src="userData.pic" />
        </div>
        <div class="profile-info">
            <span> Hello! 👋🏾 We’re the </span>
            <h3>{{ userData.name }}</h3>
            <p>{{ userData.bio }}</p>
        </div>
    </div>
</template>

<style scoped>
/* @keyframes pulse-bg {
  0% {
    background-color: #ddd;
  }
  50% {
    background-color: #d0d0d0;
  }
  100% {
    background-color: #ddd;
  }
} */
.profile-card {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: #fff;
    overflow: hidden;
    position: relative;
    min-height: 150px;
}

.profile-card .profile-image__img {
    width: 10%;
    height: auto;
    border-radius: 50%;
    position: absolute;
    top: 30px;
    left: 30px;
}

.profile-card .profile-image__border {
    width: calc(10% + 20px);
    height: auto;
    position: absolute;
    top: 20px;
    left: 20px;
}

.profile-info {
    width: 85%;
    float: right;
    padding-left: 10px;
    box-sizing: border-box;
}

.profile-info span {
    text-transform: uppercase;
    color: #666;
    letter-spacing: 3px;
}

.profile-info h3 {
    margin: 10px 0;
    font-weight: 700;
    font-size: 1.5em;
    color: #222;
}

.profile-info p {
    line-height: 140%;
    color: #666;
}
</style>
