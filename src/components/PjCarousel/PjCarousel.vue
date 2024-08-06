<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
let carouselitem = ref<HTMLElement>()
let leftbtn = ref<HTMLElement>()
let rightbtn = ref<HTMLElement>()
interface NumberArray {
    [index:number]: number;
}

let fibonacci: NumberArray = [1, 1, 2, 3, 5];
// 定义一个接口，表示一个用户的对象
type X={
    C:string
}
interface User extends X{
    age?:number,
    [propName:string]:string | number | undefined//出现可选类型和任意类型时，任意类型必须包含undefined
}
let a: User = {
    C:'123'
}



onMounted(() => {
    /* console.log(fibonacci,888) */
    const carouselchildrens = Array.from(carouselitem.value?.children as HTMLCollection);
    const filteredChildren = carouselchildrens.filter(child => child.classList.contains('carousel-item'));
    const total = filteredChildren.length;
    let current = 0;

    // 初始化时只应该有一个活跃的元素
    if (filteredChildren.length > 0) {
        filteredChildren[current].classList.add('active');
    }
    /* console.log(9 % 5); */
    // 注册点击事件
    leftbtn.value?.addEventListener('click', function () {
        const prev = current;
        current = (current - 1 + total) % total;// 确保循环回到最后一个元素

        setslide(prev, current);
    });

    rightbtn.value?.addEventListener('click', function () {
        const next = current;
        current = (current + 1) % total; // 确保循环到第一个元素
        setslide(next, current);
    });

    function setslide(prev: number, next: number) {
        // 更改当前幻灯片的激活状态
        filteredChildren[prev].classList.remove('active');
        filteredChildren[next].classList.add('active');

      /*   console.log('current ' + current);
        console.log('prev ' + prev); */
    }
});
</script>

<template>
    <div class="carousel" ref="carouselitem">
        <div class="carousel__nav">
            <div id="moveleft" class="carousel__arrow" ref="leftbtn">
                <div class="carousel__icon gg-sidebar-right"></div>
            </div>
            <div id="moveright" class="carousel__arrow" ref="rightbtn">
                <div class="carousel__icon gg-sidebar"></div>
            </div>
        </div>
        <div class="carousel-item carousel-item--1">
            <div class="carousel-item__image"></div>
            <div class="carousel-item__info">
                <div class="carousel-item__container">
                    <h2 class="carousel-item__subtitle">the grand moment </h2>
                    <h1 class="carousel-item__title">le tour</h1>
                    <p class="carousel-item__description">sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam.</p>
                    <a href="#" class="carousel-item__btn">explore the tour</a>
                </div>
            </div>
        </div>
        <div class="carousel-item carousel-item--2">
            <div class="carousel-item__image"></div>
            <div class="carousel-item__info">
                <div class="carousel-item__container">
                    <h2 class="carousel-item__subtitle">the big window </h2>
                    <h1 class="carousel-item__title">minimal window</h1>
                    <p class="carousel-item__description">clear glass window with brown and white wooden frame iste natus
                        error sit voluptatem accusantium doloremque laudantium.</p>
                    <a href="#" class="carousel-item__btn">read the article</a>
                </div>
            </div>
        </div>
        <div class="carousel-item carousel-item--3">
            <div class="carousel-item__image"></div>
            <div class="carousel-item__info">
                <div class="carousel-item__container">
                    <h2 class="carousel-item__subtitle">tropical palms </h2>
                    <h1 class="carousel-item__title">palms</h1>
                    <p class="carousel-item__description">sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam.</p>
                    <a href="#" class="carousel-item__btn">explore the palms</a>
                </div>
            </div>
        </div>

        <div class="carousel-item carousel-item--4">
            <div class="carousel-item__image"></div>
            <div class="carousel-item__info">
                <div class="carousel-item__container">
                    <h2 class="carousel-item__subtitle">beach </h2>
                    <h1 class="carousel-item__title">the beach </h1>
                    <p class="carousel-item__description">sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam.</p>
                    <a href="#" class="carousel-item__btn">explore the beach</a>
                </div>
            </div>
        </div>

        <div class="carousel-item carousel-item--5">
            <div class="carousel-item__image"></div>
            <div class="carousel-item__info">
                <div class="carousel-item__container">
                    <h2 class="carousel-item__subtitle">the white building </h2>
                    <h1 class="carousel-item__title">white building</h1>
                    <p class="carousel-item__description">sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam.</p>
                    <a href="#" class="carousel-item__btn">read the article</a>
                </div>
            </div>
        </div>

    </div>
    <div class=""></div>
</template>

<style scoped>
.gg-sidebar,
.gg-sidebar::before {
    display: block;
    box-sizing: border-box;
    height: 16px;
}

.gg-sidebar {
    border-left: 2px solid;
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 18px;
}

.gg-sidebar::before {
    content: "";
    position: absolute;
    width: 14px;
    border: 2px solid;
    top: 0;
    left: 2px;
}

.gg-sidebar-right {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 16px;
    border-right: 2px solid;
}

.gg-sidebar-right::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 14px;
    height: 16px;
    border: 2px solid;
    top: 0;
    right: 2px;
}











.carousel {
    width: 100%;
    display: flex;
    max-width: 900px;
    max-height: 550px;
    height: 600px;
    overflow: hidden;
    position: relative;
}

.carousel-item {
    visibility: visible;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    -webkit-align-items: center;
    -webkit-justify-content: flex-end;
    position: relative;
    background-color: #fff;
    flex-shrink: 0;
    -webkit-flex-shrink: 0;
    position: absolute;
    z-index: 0;
    transition: 0.6s all linear;
}

.carousel-item__info {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    display: -webkit-flex;
    -webkit-justify-content: center;
    -webkit-flex-direction: column;

    order: 1;
    left: 0;
    margin: auto;
    padding: 0 40px;
    width: 40%;

}

.carousel-item__image {
    width: 60%;
    height: 100%;
    order: 2;
    align-self: flex-end;
    flex-basis: 60%;
    -webkit-order: 2;
    -webkit-align-self: flex-end;
    -webkit-flex-basis: 60%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    transform: translatex(100%);
    transition: 0.6s all ease-in-out;
}

.carousel-item__subtitle {
    font-family: 'open sans', sans-serif;
    letter-spacing: 3px;
    font-size: 10px;
    text-transform: uppercase;
    margin: 0;
    color: #7e7e7e;
    font-weight: 700;
    transform: translatey(25%);
    opacity: 0;
    visibility: hidden;
    transition: 0.4s all ease-in-out;
}

.carousel-item__title {
    margin: 15px 0 0 0;
    font-family: 'playfair display', serif;
    font-size: 44px;
    line-height: 45px;
    letter-spacing: 3px;
    font-weight: 700;
    color: #2c2c2c;
    transform: translatey(25%);
    opacity: 0;
    visibility: hidden;
    transition: 0.6s all ease-in-out;
}

.carousel-item__description {
    transform: translatey(25%);
    opacity: 0;
    visibility: hidden;
    transition: 0.6s all ease-in-out;
    margin-top: 35px;
    font-family: 'open sans', sans-serif;
    font-size: 13px;
    color: #7e7e7e;
    line-height: 22px;
    margin-bottom: 35px;
}

.carousel-item--1 .carousel-item__image {
    background-image: url('https://images.pexels.com/photos/991012/pexels-photo-991012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
}


.carousel-item--2 .carousel-item__image {
    background-image: url('https://images.pexels.com/photos/921294/pexels-photo-921294.png?auto=compress&cs=tinysrgb&h=750&w=1260');
}

.carousel-item--3 .carousel-item__image {
    background-image: url('https://images.pexels.com/photos/92733/pexels-photo-92733.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
}

.carousel-item--4 .carousel-item__image {
    background-image: url('https://images.pexels.com/photos/1008732/pexels-photo-1008732.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
}

.carousel-item--5 .carousel-item__image {
    background-image: url('https://images.pexels.com/photos/1029614/pexels-photo-1029614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
}

.carousel-item__btn {
    width: 35%;
    color: #2c2c2c;
    font-family: 'open sans', sans-serif;
    letter-spacing: 3px;
    font-size: 11px;
    text-transform: uppercase;
    margin: 0;
    width: 35%;
    font-weight: 700;
    text-decoration: none;
    transform: translatey(25%);
    opacity: 0;
    visibility: hidden;
    transition: 0.6s all ease-in-out;
}

.carousel__nav {
    position: absolute;
    right: 0;
    z-index: 2;
    background-color: #fff;
    bottom: 0;
}

.carousel__icon {
    display: inline-block;
    vertical-align: middle;
    width: 16px;
    fill: #5d5d5d;
}

.carousel__arrow {
    cursor: pointer;
    display: inline-block;
    padding: 11px 15px;
    position: relative;
}

.carousel__arrow:nth-child(1):after {
    content: '';
    right: -3px;
    position: absolute;
    width: 1px;
    background-color: #b0b0b0;
    height: 14px;
    top: 50%;
    margin-top: -7px;
}

.active {
    z-index: 1;
    display: flex;
    visibility: visible;
}

.active .carousel-item__subtitle,
.active .carousel-item__title,
.active .carousel-item__description,
.active .carousel-item__btn {
    transform: translatey(0);
    opacity: 1;
    transition: 0.6s all ease-in-out;
    visibility: visible;
}

.active .carousel-item__image {
    transition: 0.6s all ease-in-out;
    transform: translatex(0);
}
</style>

