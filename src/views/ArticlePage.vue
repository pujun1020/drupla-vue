<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeMount } from "vue"
import debounce from "@/assets/debounce";
import { useUtilsStore } from "@/stores/utils";
import { ArticleApi } from '@/utils/api/article/index'


import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common';
const currentSection = ref<string | null>();
let sectionparent = ref<HTMLElement | null>(null);
let articles = ref();
let activeSection = ref<string | null>(null);
let articleimage = ref();
let utilsStore = useUtilsStore();
const codeBlock = ref<HTMLElement | null>(null);
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




/* 监听滚动事件 */
onMounted(async () => {
  /* 滚动触发监听 */
  window.addEventListener("scroll", function (e) {
    e.defaultPrevented;
    debounceupdateScroll()
  });
  let debounceupdateScroll = debounce(function () {
    let sec = (sectionparent.value as HTMLElement).children;
    for (let index = 0; index < sec.length; index++) {
      const element = sec[index] as HTMLElement;
      let top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;;
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



/* 点击标题，对应高亮 */
const titleclick = function (idvalue: string, e: Event) {
  e.preventDefault();
  currentSection.value = idvalue;
  activeSection.value = idvalue;
  let target = e.target as HTMLElement;
  let id = target.getAttribute("href");
  let element: HTMLElement | null = document.querySelector(id as string);
  if (element) {
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
  console.log(targetPosition, '*******')
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

<template>
  <div class="article-page">
    <div class="sticky-parallax-header-bj-wrapper">
      <div id="sticky-parallax-header">Full-Height Cover Card to Fixed Header</div>
    </div>
    <div class="article page-content container">
      <div class="row">
        <nav class="subNavigation col-xl-3 col-lg-3 col-md-0 col-sm-0">
          <ul id="subNav">
            <li v-for="item in articles" :key="item.id"
              :class="{ active: item.attributes.field_biao_ti_id === currentSection }"
              @click="titleclick(item.attributes.field_biao_ti_id, $event)">
              <a :href="'#' + item.attributes.field_biao_ti_id">{{ item.attributes.title }}</a>
            </li>
          </ul>
        </nav>
        <div class="content col-xl-9 col-lg-9 col-md-12 col-sm-12" ref="sectionparent">
          <section v-for="(item, index) in articles" :key="item.id" :id="item.attributes.field_biao_ti_id">

            <h2 class="contents-title">{{ item.attributes.title }}</h2>
            <div class="contents-summary" v-show="item.attributes.title">{{ item.attributes.body.summary }}</div>
            <div class="image-wapper"
              v-if="item.relationships.field_image.data && item.relationships.field_image.data.id && articleimage.filter((items: any) => items.id === item.relationships.field_image.data.id)[0].id">
              <img
                :src="`http://8.134.37.43:5175${articleimage.filter((items: any) => items.id === item.relationships.field_image.data.id)[0].attributes.uri.url}`"
                alt="">
            </div>

            <highlightjs language='javascript' :code="funHtml(item)" />

          </section>
        </div>
        <div class="cc"></div>
      </div>
    </div>
  </div>

</template>
<!-- -->
<style scoped>


@keyframes sticky-parallax-header-move-and-size {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: 50% 100%;
    background-color: #0b1584;
    height: 10vh;
    font-size: 2em;
  }
}

.sticky-parallax-header-bj-wrapper {
  height: 100vh;
}

#sticky-parallax-header {
  position: fixed;
  top: 80px;
  animation: sticky-parallax-header-move-and-size linear forwards;
  animation-timeline: scroll();
  animation-range: 0vh 90vh;
}

#sticky-parallax-header {
  color: #fff;
  height: 100%;
  width: 100%;
  background-image: url(/free-images.jpg);
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: soft-light;
  display: grid;
  place-items: center;
  text-align: center;
  font-size: calc(4vw + 1em);
  z-index: 99;
}




.contents-body {
  padding: 20px;
  background-color: #292d3e;
  border-radius: 10px;
  margin: 20px 0;
}

.contents-summary {
  letter-spacing: .2px;
  font-size: 16px;
  line-height: 1.7;
  font-weight: 400;
  color: #0086fa;
  margin-bottom: 30px;
}




.image-wapper img {
  max-width: 100%;
  margin-top: 40px;
  width: 100%;
  height: 600px;
  object-fit: cover;
  margin: 24px 0;
  animation: reveal linear both;
  animation-timeline: view();
  animation-range: entry 0% cover 50%;

}

@keyframes reveal {
  from {
    opacity: 0;
    clip-path: inset(45% 20% 45% 20%);
  }

  to {
    opacity: 1;
    clip-path: inset(0% 0% 0% 0%);
  }
}

ul#subNav li a {
  text-transform: lowercase;
}
section:nth-child(1){
  margin-top: 70px;
}
section {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}


nav {
  box-shadow: 0 2px 6px -6px white;
}

ul#subNav {
  list-style: none;
  position: sticky;
  top: calc(80px + 12vh);
  padding-left: 0;
  margin-top: 5.8rem;
}

ul li {
  width: 80%;
  height: 30px;
  overflow: hidden;
  margin-top: 10px;
}

li>a {
  display: block;
  height: 100%;
  color: v-bind('utilsStore.siteTextColors');
  letter-spacing: 0.125rem;
  text-decoration: none;
  text-transform: capitalize !important;
  transition: all 0.3s ease-in-out;
  font-weight: 400;
  max-width: 100%;
  padding-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
}

li>a:hover {
  border-bottom: 2px solid v-bind('utilsStore.randomRGBColor()');
}

.active>a {
  color: v-bind('utilsStore.randomRGBColor()');
  border-bottom: 2px solid v-bind('utilsStore.randomRGBColor()');
}
</style>
