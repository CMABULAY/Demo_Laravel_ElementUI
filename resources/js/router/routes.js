function page(path) {
    return () => import(/* webpackChunkName: '' */ `../pages/${path}`).then(m => m.default || m)
  }
  
  export default [
  
    { path: '*', name:'invalid-page', component: page('errors/page-not-found.vue') }, 
    // Login 
    // { path: '/', name: 'dashboard', component: page('auth/index.vue') },
    { path: '/cyrus', name: 'dashboard', component: page('auth/index.vue') },
    // { path: '/login', name: 'login', component: page('auth/login.vue') },
    // { path: '/register', name: 'register', component: page('auth/register.vue') },
    // { path: '/info', name: 'info', component: page('auth/info.vue') },
    // { path: '/products', name: 'products', component: page('products/index.vue') },
    // { path: '/orders', name: 'orders', component: page('orders/index.vue') },
    // { path: '/change-password', name: 'change-password', component: page('settings/password.vue') },


    // project C

    { path: '/',    component: page('projectC/index.vue') },
    { path: '/home', name: 'home', component: page('projectC/index.vue') },
    


    { path: '/projects', name: 'projects', component: page('projectC/Pages/index.vue') },
    
   
  ]