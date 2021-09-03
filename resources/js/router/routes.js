function page (path) {
    return () => import(/* webpackChunkName: '' */ `../pages/${path}`).then(m => m.default || m)
  }

export default{
    mode: 'history',
    routes:[ 
        { path:'*', component: page('errors/page-not-found.vue') }, 
        { path:'/',  component: page('screen1.vue') },  
        { path:'/screen1', name: 'screen1', component: page('screen1.vue') },    
        { path:'/screen2', name: 'screen2', component: page('screen2.vue') },    
        // { path:'/home',  name: 'home', component: page('home.vue') },  
        // { path:'/form', name: 'form', component: page('form.vue') },   
        // { path:'/list', name: 'list', component: page('list.vue') },    
        
    ]
}