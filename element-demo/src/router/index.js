import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Home from '@/components/Home.vue'
import News from '@/components/News.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children:[
        {path:'/home',component:Home},
        {path:'/news',component:News}
      ]
    }
  ]
})
