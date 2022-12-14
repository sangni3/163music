import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    component: ()=>import('../Views/DiscoverMusic.vue'),

  },
  {
    path: '/DiscoverMusic',
    name:'home',
    component: ()=>import('../Views/DiscoverMusic.vue'),
  },
  {
    path: '/RecommendedMusic',
    component: ()=>import('../Views/RecommendedMusic.vue'),
  },
  {
    path: '/LatestMusic',
    component: ()=>import('../Views/LatestMusic.vue'),
  },
  {
    path: '/LatestMV',
    component: ()=>import('../Views/LatestMV.vue'),
  },
  {
    path: '/PlayMusicList',
    component: ()=>import('../Views/PlayMusicList.vue'),
  },
  {
    path: '/PlayMusicMV',
    component: ()=>import('../Views/PlayMusicMV.vue'),
  },
  {
    path: '/searchMusic',
    component: ()=>import('../Views/searchMusic.vue'),
  },

]
const router = new VueRouter({
  routes,
  // linkActiveClass: 'active',
})
export default router
