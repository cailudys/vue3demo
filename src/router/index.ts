import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImgMove from '../views/ImgMove.vue'
import ImgChange from '../views/ImgChange.vue'
import Html2Canvas from '../views/Html2Canvas.vue'
import WateFall from '../views/WateFall.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/imgmove',
      name: 'imgmove',
      component: ImgMove
    },
    {
      path: '/imgchange',
      name: 'imgchange',
      component: ImgChange
    },
    {
      path: '/shot',
      name: 'shot',
      component: Html2Canvas
    },
    {
      path: '/waterfall',
      name: 'waterfall',
      component: WateFall
    }
  ]
})

export default router
