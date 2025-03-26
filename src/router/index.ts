import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useLoadingStore } from '@/stores/loading'
import { useMenuIsShowStore } from "@/stores/menuIsShow";
import { KeepAlive } from 'vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // 滚动到顶部
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      //redirect: '/2',url显示/2，组件渲染HomeView.vue
      meta: {
        title: '首页',
        index: 0,
      },
      component: () => import('@/views/HomeView.vue'),
      /*       children: [
              {
                path: '/2',
                name: 'home2',
                meta: {
                  title: '首页',
                  index: 0,
                },
                component: () => import('@/views/AboutMe.vue'),
              }
            ] */
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '关于我',
        index: 1,
      },
      component: () => import('@/views/AboutMe.vue'),
    },
    {
      path: '/her',
      name: 'her',
      meta: {
        title: '关于她',
        index: 1,
      },
      component: () => import('@/views/HerPage.vue'),
    },
    {
      path: '/TS',
      name: 'TS',
      meta: {
        title: 'TS',
        index: 1,
      },
      component: () => import('@/views/TS.vue'),
    },
    {
      path: '/resume',
      name: 'resume',
      meta: {
        title: '简历',
        index: 2,
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ResuMe.vue')
    },
    {
      path: '/blog/:id',
      name: 'blog',
      meta: {
        title: '笔记',
        index: 3,
      },
      component: () => import('@/views/BlogPage.vue'),
    },
    {
      path: '/PostDetail/:id',
      name: 'PostDetail',
      meta: {
        title: '笔记详情',
      },
      component: () => import('@/views/PostDetail.vue')
    },
    {
      path: '/PostPageList',
      name: 'PostPageList',
      meta: {
        title: '笔记列表页面',
        page: 'postPageList',
      },
      component: () => import('@/views/PostPageList.vue')
    },
    {
      path: '/picture',
      name: 'picture',
      meta: {
        title: '图库',
        index: 3,
      },
      component: () => import('@/views/Picture.vue'),
    },
    {
      path: '/other',
      name: 'other',
      meta: {
        title: '其他',
        index: 4,
      },
      component: () => import('@/views/OtherPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        title: '联系我',
        index: 5,
      },
      component: () => import('@/views/ContactPage.vue'),
    },
    {
      path: '/Test',
      name: 'Testuuu',
      meta: {
        title: '联系我',
        index: 5,
        KeepAlive: true,
      },
      component: () => import('@/views/Test/Test.vue'),
    },

    /* 404页面 */
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      meta: {
        title: '404'
      },
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  //路由切换隐藏menu
  let MenuIsShowStore = useMenuIsShowStore()
  MenuIsShowStore.menuIsShow?.classList.remove('show')
  //控制页面加载loading
  const { loading, setLoading } = useLoadingStore()
  window.document.title = (to.query.title ? to.query.title : to.meta.title) + '-PU JUN'
  if (to.path === '/') {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    next();
  } else {
    if (to.path !== from.path) {
      setLoading(true)
    }
    next();
  }



})

router.afterEach((to, from) => {
  const { loading, setLoading } = useLoadingStore()
  setTimeout(() => {
    setLoading(false)
  }, 1000)
})
export default router
