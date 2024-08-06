<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import observeAndAnimate from "@/utils/JsUtil/util.viewportObserve";
onMounted(() => {
   /*  console.log(22) */
    observeAndAnimate('.homebanner-inner', (element: HTMLDivElement) => {
        // 自定义动画效果
        (element.firstElementChild as HTMLDivElement).style.opacity = '1';
        (element.firstElementChild as HTMLDivElement).style.transform = 'translateY(0%)';
    });
})
</script>

<template>
    <div class="homebanner-container">
        <div class="banner-content">
            <div class="container">
                <div class="row">
                    <div class="row-col-lef homebanner-inner col-xl-4 col-lg-4 col-md-5 col-sm-12 col-xs-12">
                        <div class="sidebar">
                            <div class="sidebar-card">
                                <div class="sidebar-avatar">
                                    
                                    <img class="avatar-img lazy-image"
                                        data-src="pujun-card.jpg"
                                        src="">
                                </div>
                                <div class="sidebar-name">PU JUN</div>
                                <div class="sidebar-label">" Hi !,这是我的个人名片。 👋 "</div>
                                <div data-v-a45bec14="" class="c-divider"></div>
                                <ul class="sidebar-other">
                                    <li class="other-item"><span class="item-label">城市：</span><span
                                            class="item-label-light">云南·昭通</span></li>
                                    <li>
                                    <li class="other-item"><span class="item-label">微信/QQ：</span></li>
                                    </li>

                                    <li></li>
                                </ul>
                                <div class="social">
                                    <img class="lazy-image" src="" data-src="QR-wx.png" alt="">
                                    <img class="lazy-image" src="" data-src="QR-qq.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row-col-right homebanner-inner col-xl-8 col-lg-8 col-md-7 col-sm-12 col-xs-12">
                        <div class="banner-text">
                            <p class="text-tip">Hi! I'm PU JUN</p>
                            <p class="text-main">Welcome To My Personal Homepage! Let's Go!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.social {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.social img {
    border: 2px solid #eee;
    padding: 2px;
    border-radius: 5px;
    margin-right: 8px;
    display: inline-block;
    max-width: 80px;
}

li.other-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.item-label {
    font-weight: 700;
    letter-spacing: 2px;
    color: #00283a;
}

ul.sidebar-other {
    list-style-type: none;
    padding-left: 0;
}

.sidebar-label {
    text-align: center;
}

.sidebar-card {
    width: 100%;
}

img.avatar-img.lazy-image {
    border: solid 3px #FCFCFE;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    display: block;
}

.sidebar-name {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0px;
    margin-top: 10px;
}

.sidebar {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 20px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 2px 4px -2px #0000004d;
    background-color: #fff;
    background-image: url(bg-map-9bef45bb.png);
    background-position: center center;
    transform: translateY(100%);
    transition: transform 1s cubic-bezier(0, 0, .2, 1);
    box-sizing: border-box;
}

.banner-text {
    transform: translateX(-70%);
    transition: transform 1s cubic-bezier(0, 0, .2, 1);
}

.homebanner-container {
    width: 100%;
    height: 560px;
    position: relative;
    overflow: hidden;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 2px 20px #0000001a;
    transition: all .4s linear;
    background-image: url(pujun-bg.jpg);
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
}

.banner-content {
    padding-top: 80px;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background-image: linear-gradient(to bottom, #000, transparent, transparent);
}



.row-col-left {
    background-color: rgb(35, 175, 170);
}


.text-main {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    text-shadow: 0 1px 10px rgba(255, 255, 255, .2);
    background: url(grunge_bg_1.png);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}

.text-tip {
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
}
.sidebar::after {
    content: "";
    position: absolute;
    left: 30px;
    top: -8px;
    height: 8px;
    width: calc(100% - 60px);
    background-color: #fcfcfe;
    border-radius: 5px 5px 0 0;
    opacity: .3;
}
@media screen and (max-width:992px) {
    .text-main[data-v-45514c85] {
        font-size: 2.5rem;
    }
}
@media screen and (max-width: 768px) {
    .banner-content {
        padding-bottom: 80px;
        position: static;
    }

    .homebanner-container {
        height: auto;
    }

    .banner-text {
        margin-top: 40px;
    }

    .text-tip[data-v-45514c85] {
        margin-bottom: 0;
    }


}
</style>
