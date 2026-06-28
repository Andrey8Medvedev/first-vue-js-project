import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/Home.vue'
import JokeView from '../views/Joke.vue'
import SaveJokeView from '../views/SaveJoke.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/joke', component: JokeView },
  { path: '/savejoke', component: SaveJokeView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router