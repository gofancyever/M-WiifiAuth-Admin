import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Interface from '@/components/InterfaceManage.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Router)
Vue.use(ElementUI)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children:[
        { path:'interface',name:'Interface',component:Interface },
      ]
    }
  ]
})
