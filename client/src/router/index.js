import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import PackageView from '../views/PackageView.vue'
import SettingsView from '../views/SettingsView'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/package',
    name: 'package',
    component: PackageView
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView
  }
]

const router = new VueRouter({
  routes
})

export default router
