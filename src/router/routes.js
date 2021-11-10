
const routes = [
  {
    path:'/',
    component: () => import('pages/Main')
  },
  {
    path:'/mouse',
    component: () => import('components/Mouse')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes
