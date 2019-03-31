import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/register'
import NotFound from '@/components/404'
import Login from '@/components/login'
import MyTest from '@/views/index'
import Home from '@/views/home'
import InfoShow from '@/views/infoShow'
import Fundlist from '@/views/fundlist'

Vue.use(Router)

let router = new Router({
  routes: [{
      path: '/',
      redirect: '/index'
    }, {
      path: '/index',
      name: 'indexLink',
      redirect:'/index/home',
      component: MyTest,
      children:[
        {
          path:'home',
          component:Home
        },
        {
          path:'infoShow',
          name:'infoshowLink',
          component:InfoShow
        },
        {
          path:'/fundlist',
          name:'fundlistLink',
          component:Fundlist
        }
      ]
    }, {
      path: '/login',
      name: 'loginLink',
      component: Login
    },
    {
      path: '/register',
      name: 'registerLink',
      component: Register
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ],
  mode: 'history'
})


router.beforeEach((to, from, next) => {
  // ${//to and from are Route Object,next() must be called to resolve the hook}

  let isLogin = localStorage.getItem('eleToken') ? true : false
  
  if(to.path == '/login' || to.path == '/register'){
    next()
  }else{

    isLogin ? next() : next('/login')

  }


})


export default  router