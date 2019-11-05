import Vue, { AsyncComponent } from "vue";
import Router from 'vue-router'
const index:AsyncComponent = ():any => import("../view/index.vue")

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
