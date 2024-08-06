<script setup lang="ts">
import { ref, reactive } from "vue"
import PjCardNumber from '@/components/PjCardNumber/PjCardNumber.vue'
</script>

<template>
    <div class="main-container">
        <div class="container">
            <div class="row">
                <!-- <div class="main-slideLeft col-xl-3 col-lg-5 col-md-5 col-sm-12 col-xs-12">
                 
                </div> -->
                <div class="main-slideRight col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="main-slideRight-content">
                       <PjCardNumber title="React" :end="70"></PjCardNumber>
                       <PjCardNumber title="vue" :end="80"></PjCardNumber>
                       <PjCardNumber title="Html,Css,Js" :end="90"></PjCardNumber>
                       <PjCardNumber title="Drupal" :end="90"></PjCardNumber>
                       <PjCardNumber title="harmonyOs" :end="60"></PjCardNumber>
                       <PjCardNumber title="Uniapp" :end="80"></PjCardNumber>
                       <PjCardNumber title="Pixso" :end="80"></PjCardNumber>
                       <PjCardNumber title="Ps" :end="60"></PjCardNumber>
                       <PjCardNumber title="蓝湖、墨刀" :end="60"></PjCardNumber>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.banner-text {
    transform: translateX(-70%);
}


.main-slideRight-content {
    transform: translateY(-30px);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 100%;
}



.main-slideRight {
    position: relative;

}


</style>
