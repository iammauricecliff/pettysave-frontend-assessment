import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Explore from '../views/Explore.vue'
import ExploreDetails from '../views/ExploreDetails.vue'


const routes = [
  //home routes
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //posts route
  {
    path: '/exploreposts',
    name: 'Explore',
    component: Explore
  },
   //posts detail routes
  {
    path: '/exploreposts/:id',
    name: 'ExploreDetails',
    component: ExploreDetails,
    props: true

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
