<script setup lang="ts">
import { layer } from "@layui/layui-vue";
import { ref, reactive, onMounted, onBeforeUpdate } from "vue"
import { onBeforeRouteLeave, useRoute, useRouter } from "vue-router";
let notfindheight = ref(0)
let route = useRoute()
let router = useRouter()
let windowHeight=ref(window.innerHeight)
onMounted(async () => {
 /*  console.log(windowHeight.value) */
  if (localStorage.getItem("fresh") == "true") {
    layer.msg("刷新成功", { icon: 1, time: 1000 })
    localStorage.setItem("fresh", "false")
  }
  notfindheight.value = window.innerHeight - 80
  if (route.meta.title == 404) {
    document.body.style.overflowY = "hidden"
  }

})
//onBeforeRouteEnter语法糖没有这个函数
onBeforeRouteLeave((to, from, next) => {
  document.body.style.overflowY = "auto"
  next()
})

let fresh = () => {
  router.go(0)
  localStorage.setItem("fresh", "true")
}

</script>

<template>
  <div class="not-find-wrapper">
    <div class="not-find container-1920">
      <div class="not-find-innner">
        <lay-exception status="401" title="401" describe="身份认证失败">
          <template #extra>
            <lay-button @click="fresh">刷新</lay-button>
            <lay-button type="primary" @click="router.go(-1)">返回</lay-button>
          </template>
        </lay-exception>
      </div>
    </div>
  </div>
</template>



<style scoped>
/* Design Inspired by one of Stefan Devai's Design on Dribble */

.not-find {
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
}

.not-find-wrapper {
  height: v-bind(windowHeight + 'px');
  background-color: #222425;
}

body {
  overflow: hidden;
}
</style>
