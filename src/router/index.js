import Rooms from '../views/RoomsView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Room from '../views/RoomView.vue'

const routes = [

  {
    path: '/rooms/',
    name: 'rooms',
    component: Rooms,
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: `/find/:Rid`,
    name: 'room',
    component: Room,
    props: true
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
