<script setup lang="ts">
import { ref, reactive, onBeforeMount } from "vue"
let inputdata = ref<HTMLFormElement>()
import button from "@/assets/buttomjs/buttom1";
let buttonhtml = button(0);
onBeforeMount(() => {

})
const formfun = (e: Event) => {
    /* 获取表单数据 */
    e.defaultPrevented;
    let data = new FormData(inputdata.value!)
    data.set('username', "pujun")
    console.log(Object.fromEntries(data.entries()), 99)
}
</script>

<template>
    <div class="ring-wapper">
        <div class="ring">
            <i style="--clr:#00ff0a;"></i>
            <i style="--clr:#ff0057;"></i>
            <i style="--clr:#fffd44;"></i>
            <div class="login">
                <h2>Login</h2>
                <form class="login-form inputBx" id="myForm" @submit.prevent="formfun" ref="inputdata">
                    <input type="text" placeholder="Username" name="username">
                    <input type="password" placeholder="Password" name="userpassword">
                    <button v-html="buttonhtml" class="submitbtn"></button>
                </form>
                <div class="links">
                    <a href="#">Forget Password</a>
                    <a href="#">Signup</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
button{
    background-color: #000000;
    outline: none;
    border: 0;
}
.submitbtn {
    display: flex;
    justify-content: center;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.ring-wapper {
    background-color: #000;
    height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ring {

    position: relative;
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ring i {
    position: absolute;
    inset: 0;
    border: 2px solid #fff;
    transition: 0.5s;
}

.ring i:nth-child(1) {
    border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
    animation: animate 6s linear infinite;
}

.ring i:nth-child(2) {
    border-radius: 41% 44% 56% 59%/38% 62% 63% 37%;
    animation: animate 4s linear infinite;
}

.ring i:nth-child(3) {
    border-radius: 41% 44% 56% 59%/38% 62% 63% 37%;
    animation: animate2 10s linear infinite;
}

.ring:hover i {
    border: 6px solid var(--clr);
    filter: drop-shadow(0 0 20px var(--clr));
}

@keyframes animate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes animate2 {
    0% {
        transform: rotate(360deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

.login {
    position: absolute;
    width: 300px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}

.login h2 {
    font-size: 2em;
    color: #fff;
}

.login .inputBx {
    position: relative;
    width: 100%;
}

.login .inputBx input {
    position: relative;
    width: 100%;
    height: 51px;
    padding: 12px 20px;
    background: transparent;
    border: 2px solid #fff;
    border-radius: 40px;
    font-size: 1.2em;
    color: #fff;
    box-shadow: none;
    outline: none;
}



.login .inputBx input::placeholder {
    color: rgba(255, 255, 255, 0.75);
}

.login .links {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
}

.login .links a {
    color: #fff;
    text-decoration: none;
}
</style>

