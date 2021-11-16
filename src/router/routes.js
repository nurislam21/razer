
const routes = [
  {
    path:'/',
    component: () => import('pages/Main'),
    // children:{
    //
    // }
  },
  {
    path:'/mouse',
    params: true,
    component: () => import('components/Mouse')
  },
  {
    path:'/keyboard',
    component: () => import('components/Keyboard')
  },
  {
    path:'/headphones',
    component: () => import('components/Headphones')
  },
  {
    path:'/hammer',
    component: () => import('components/Hammerhead')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes
