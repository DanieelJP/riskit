import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import LoginView from '@/views/LoginView.vue';
import SignupView from '@/views/SignupView.vue';
import PrincipalPage from '@/views/PrincipalPage.vue';
import CasinoView from '@/views/CasinoView.vue';
import FutbolView from '@/views/FutbolView.vue';
import ProfileView from '@/views/ProfileView.vue';
import WalletView from '@/views/WalletView.vue';

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
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupView
  },
  {
    path: '/principal',
    name: 'Principal',
    component: PrincipalPage
  },
  {
    path: '/casino',
    name: 'Casino',
    component: CasinoView
  },
  {
    path: '/futbol',
    name: 'Futbol',
    component: FutbolView
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: WalletView
  },
  {
    path: '/basket',
    name: 'Basket',
    component: () => import('@/views/BasketView.vue')
  },
  {
    path: '/tenis',
    name: 'Tenis',
    component: () => import('@/views/TenisView.vue')
  },
  {
    path: '/pingpong',
    name: 'Pingpong',
    component: () => import('@/views/PingpongView.vue')
  },
  {
    path: '/esports',
    name: 'Esports',
    component: () => import('@/views/EsportsView.vue')
  },
  {
    path: '/champions-puig',
    name: 'ChampionsPuig',
    component: () => import('@/views/ChampionsPuigView.vue')
  },
  {
    path: '/pokemon-puig',
    name: 'PokemonPuig',
    component: () => import('@/views/PokemonPuigView.vue')
  },
  {
    path: '/pingpong-puig',
    name: 'PingPongPuig',
    component: () => import('@/views/PingPongPuigView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
