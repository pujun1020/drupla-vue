
<script lang="ts">
export default {
  name: 'Testuuu'
}
</script>
<script setup lang="ts">

import { onActivated, onDeactivated } from 'vue'

onActivated(() => {
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
  console.log("🚀 ~ onActivated ~ 调用时机为首次挂载8-----888:")
})


onDeactivated(() => {
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
  console.log("🚀 ~ onDeactivated ~ DOM:")
})
 
</script>
<template>
    <input type="text" style="margin-top: 300px;">
</template>