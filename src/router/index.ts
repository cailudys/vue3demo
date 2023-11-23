import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormatAttr from '../views/DatePicker/FormatAttr.vue'
import PosterDesign from '../views/design/PosterDesign.vue'
import DraggableDesign from '../views/draggable/DraggableDesign.vue'
import ImgMove from '../views/ImgMove.vue'
import ImgChange from '../views/ImgChange.vue'

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
    },
    {
      path: '/draggable',
      name: 'draggable',
      component: DraggableDesign
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
    }
  ]
})

export default router
