<script setup lang="ts">
import { ref, reactive } from "vue"
import PjBanner from '@/components/PjPageBanner/PjPageBanner.vue'
import PjServiceCard from '@/components/PjServiceCard/PjServiceCard.vue'
</script>

<template>
  <div class="">
    <PjBanner current="相册" title="相册" sub-title="有趣的人记录有趣的事。">
    </PjBanner>
    <PjServiceCard></PjServiceCard>
  </div>
</template>

<style scoped></style>
