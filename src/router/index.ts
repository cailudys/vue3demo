import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormatAttr from '../views/DatePicker/FormatAttr.vue'
import PosterDesign from '../views/design/PosterDesign.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/datepicker/format',
      name: 'datepicker',
      component: FormatAttr
    },
    {
      path: '/design/poster',
      name: 'posterdesign',
      component: PosterDesign
    }
  ]
})

export default router
