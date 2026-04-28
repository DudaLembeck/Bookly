import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
   {
    path: '/livros/:id',
     component: () => import("../views/DetalheLivro.vue")
  },
  {
    path: '/login',
     component: () => import("../views/LoginPage.vue")
  },
  {
    path: '/cadastro',
     component: () => import("../views/CadastroPage.vue")
  },
  {
    path: '/recuperar',
     component: () => import("../views/RecuperarSenha.vue")
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
