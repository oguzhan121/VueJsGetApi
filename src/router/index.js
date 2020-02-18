import Vue from 'vue'
import Router from 'vue-router'
import MainContent from "../components/MainContent";
import Cart from "../components/Cart";
import Complete from "../components/Complete";
import Login from "../components/Login";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainContent',
      component: MainContent
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/Complete',
      name: 'Complete',
      component: Complete
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
  ]
})
