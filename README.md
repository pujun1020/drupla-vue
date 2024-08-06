# vue-drupal-site

# animation-range
---
[cover]表示元素上边界开始进入到下边界完全离开
[entry]表示元素上边界开始进入到下边界完全进入
[exit]表示元素上边界开始离开到下边界完全离开
[entry-crossing]表示元素上边界开始进入到下边界完全进入之间
[exit-crossing]表示元素上边界开始离开到下边界完全离开之间
[contain]表示元素完全在滚动区域之中下边界与滚动区域下边界重合到上边界与滚动区域上边界重合
---


/* 发送fetch请求 */
interface fetchData {
  data: [
    {
      attributes: {
        field_biao_ti_id: string
      }
    }],
  included: [],
}
/* await fetch("http://8.134.37.43:5175/jsonapi/node/article?include=field_image")
  .then(response => response.json())
  .then(data => {
    currentSection.value = data.data[0].attributes.field_biao_ti_id
    articles.value = data.data
    articleimage.value = data.included
    console.log(data)
  })
  .catch(err => console.log(err.message)) */

/* async function ArticleApifun<T>(url:string):Promise<T> {
  
  //fetch请求成功的
  const result=await fetch(url)
  const data=await result.json()
  return data
} */
/* await (ArticleApi("http://8.134.37.43:5175/jsonapi/node/article?include=field_image") as Promise<any>).then(res=> {
  currentSection.value = res.data[0].attributes.field_biao_ti_id
  articles.value = res.data
  articleimage.value = res.included
}) */
async function ArticleApifun<T>(url: string): Promise<T> {
  const result = await ArticleApi(url).then(res => {
    return JSON.parse(JSON.stringify(res))
  })
  return result
}

const result = await ArticleApifun<fetchData>("http://8.134.37.43:5175/jsonapi/node/article?include=field_image")
currentSection.value = result.data[0].attributes.field_biao_ti_id
articles.value = result.data
articleimage.value = result.included
console.log(result)




#
Async 异步函数能将 Promise 的链式调用的形式，改为同步的形式，对于编写和阅读代码都非常友好，在setup语法糖中使用顶层await，await等待的是一个promise，这个组件将自动变为异步组件
需要使用suspense标签包裹，suspense标签包裹的必须是异步组件，否则会出现问题，比如A页面是异步组件，B页面是同步组件，，A页面是异步组件，需要三秒才能加载完成，B页面不是异步组件，当使用suspense的时候首次加载会显示suspense中的加载效果，当跳转到B页面，再跳转到A页面不是立马跳转，会等待三秒，就算B页面的子组件是异步组件也会出现这样问题

#
<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeMount } from "vue"
import debounce from "@/assets/debounce";
import { useUtilsStore } from "@/stores/utils";
import { ArticleApi } from '@/utils/api/article/index'
import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common';
import { onBeforeRouteLeave } from "vue-router";
const currentSection = ref<string | null>();
let sectionparent = ref<HTMLElement | null>(null);
let articles = ref();
let activeSection = ref<string | null>(null);
let articleimage = ref();
let utilsStore = useUtilsStore();
/* 发送fetch请求 */
interface fetchData {
  data: [
    {
      attributes: {
        field_biao_ti_id: string
      }
    }],
  included: [],
}

async function ArticleApifun<T>(url: string): Promise<T> {
  const result = await ArticleApi(url).then(res => {
    return JSON.parse(JSON.stringify(res))
  })
  return result
}
const result = await ArticleApifun<fetchData>("http://8.134.37.43:5175/jsonapi/node/article?include=field_image")
currentSection.value = result.data[0].attributes.field_biao_ti_id
articles.value = result.data
articleimage.value = result.included
console.log(result)
let windowscroll: { (e: Event): void;}
/* 监听滚动事件 */
onMounted(() => {
  windowscroll = (e: Event) => {
    e.defaultPrevented;
    debounceupdateScroll()
  }
  /* 滚动触发监听 */
  window.addEventListener("scroll",windowscroll);
  let debounceupdateScroll = debounce(function () {
    let sec = (sectionparent.value as HTMLElement).children;
    for (let index = 0; index < sec.length; index++) {
      const element = sec[index] as HTMLElement;
      let top = document.documentElement.scrollTop || window.scrollY || document.body.scrollTop;;
      let offset = element.offsetTop;
      let height = element.offsetHeight;
      let id = element.getAttribute("id");
      if (top >= offset && top < offset + height) {
        currentSection.value = id;
        if (activeSection.value === id) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      }
    }
  }, 100);
})
//路由离开注销scroll事件，不然其他页面拿不到当前页面scroll事件中的值
onBeforeRouteLeave(() => {
  window.removeEventListener("scroll", windowscroll);
})

/* 点击标题，对应高亮 */
const titleclick = function (idvalue: string, e: Event) {
  e.preventDefault();
  currentSection.value = idvalue;
  activeSection.value = idvalue;
  let target = e.target as HTMLElement;
  let id = target.getAttribute("href");
  let element: HTMLElement | null = document.querySelector(id as string);
  if (element) {
    console.log(element)
    smoothScrollToElement(element)
  }
};
function cleanHtmlString(htmlString: string): string {
  // 替换HTML实体字符，将 &nbsp; 替换为空格，将 &amp; 替换为 &
  const cleanString = htmlString.replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, ' & ')
    .replace(/<[^>]*>/g, '');
  return cleanString;
}
function smoothScrollToElement(element: HTMLElement) {
  /* const targetPosition = element.offserTop */
  const targetPosition = element.getBoundingClientRect().top + document.documentElement.scrollTop - 190;
  console.log(targetPosition, '*******',document.documentElement.scrollTop,element.getBoundingClientRect().top)
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}
let funHtml = (item: {
  attributes: {
    body: {
      processed: string
    }
  }
}) => {
  return cleanHtmlString(item.attributes.body.processed)
}
</script>


#
<script>
    <div class="site-content">
    <RouterView v-slot="{ Component, route }">
      <template v-if="route.fullPath == '/article'">
        <Suspense>
          <component :is="Component"></component>
          <template #fallback>
            <loading></loading>
          </template>
        </Suspense>
      </template>
      <template v-else>
        <component :is="Component"></component>
      </template>
    </RouterView>
    col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12
  </div>
</script>
#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#
