/**
 * The router file, resposible for the routing in the file
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import UserInfo from '@/views/UserInfo'
import SkiStyle from '@/views/SkiStyle'
import Result from '@/views/Result'
import store from '@/store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserInfo',
    component: UserInfo
  },
  {
    path: '/ski-style',
    name: 'SkiStyle',
    component: SkiStyle,
    /**Before entering the the the ski style the data is fetched from the database and
     * based on this, the user it either routed to this route or one of the two other routes  */
    async beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('loading/toggleLoading')
      await store
        .dispatch('ski/fetchSkiInfo')
        .then(() => {
          if (
            routeFrom.name === 'UserInfo' &&
            store.state.ski.skiInfo.length > 1
          ) {
            next()
          } else if (
            routeFrom.name === 'UserInfo' &&
            store.state.ski.skiInfo.length == 1
          ) {
            router.push({ name: 'Result' })
          } else if (
            routeFrom.name === 'Result' &&
            store.state.ski.skiInfo.length > 1
          ) {
            next()
          } else {
            router.push({ name: 'UserInfo' })
          }
          store.dispatch('loading/toggleLoading')
        })
        .catch(error => {
          store.dispatch('loading/toggleLoading')
          alert(
            'There was a problem with fetching the ski info ' + error.message
          )
        })
    }
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  },
  {
    path: '*',
    redirect: {
      name: 'UserInfo'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/**To avoid navigating to a page that does not contain data, if data dose not
 * exists the user will be routed to the start page  */
router.beforeEach((toRoute, fromRoute, next) => {
  if (toRoute.name == 'UserInfo') {
    next()
  } else {
    if (Object.keys(store.state.ski.userInfo).length == 0) {
      router.push({ name: 'UserInfo' })
    } else {
      next()
    }
  }
})

export default router
