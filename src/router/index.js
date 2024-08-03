import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ElectronicsCat from '@/views/ElectronicsCat.vue'
import JewleryCat from '@/views/JewleryCat.vue'
import MenClothing from '@/views/MenClothing.vue'
import WomenClothing from '@/views/WomenClothing.vue'
import ProductDetail from '@/components/cattegoriesPage/ProductDetail.vue'
import MyCart from '@/views/MyCart.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/electronics',
      name: 'electronics',
      component: ElectronicsCat,
      props:true
    },
    {
      path: '/jewlery',
      name: 'jewlery',
      component: JewleryCat
    },
    {
      path: '/menclothing',
      name: 'menclothing',
      component: MenClothing
    },
    {
      path: '/womenclothing',
      name: 'womenclothing',
      component: WomenClothing
    },
    {
      path: '/ProductDetail/:id',  //here we are passing through the router the (id) prop to the ProductDetail component
      name: 'ProductDetail',
      component: ProductDetail,
      props:true
    },
    {
      path: '/MyCart',
      name: 'MyCart',
      component: MyCart,
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
