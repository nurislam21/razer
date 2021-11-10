
const routes = [
  {
    path:'/',
    component: () => import('pages/Main')
  },
  {
    path:'/carusel',
    component: () => import('components/Carusel')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes
