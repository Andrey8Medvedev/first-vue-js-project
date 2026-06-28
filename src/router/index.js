import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/Home.vue'
import SaveJokeView from '../views/Joke.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/joke', component: SaveJokeView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router