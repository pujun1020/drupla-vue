<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue"
import PjBanner from '@/components/PjPageBanner/PjPageBanner.vue'
</script>

<template>
    <div class="pujun-her-page">
        <div class="pujun-her-page-banner">
            <PjBanner current="关于她" title="关于她" sub-title="About Her">
            </PjBanner>
        </div>
    </div>
</template>

<style scoped></style>
