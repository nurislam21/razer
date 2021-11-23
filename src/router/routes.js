import {ionMoon} from "@quasar/extras/ionicons-v5";

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
  {
    path:'/basket',
    component: () => import('components/Basket')
  },
  {
    path:'/pc',
    component: () => import('components/PC'),
  },
  {
    path:'/pc/mouses',
    component: () => import('components/Mouses')
  },
  {
    path:'/pc/headphones',
    component: () => import('components/Headphone')
  },
  {
    path:'/pc/keyboards',
    component: () => import('components/Keyboards')
  },
  {
    path:'/pc/mousepads',
    component: () => import('components/Mousepads')
  },
  {
    path:'/pc/gaming-chairs',
    component: () => import('components/Chairs')
  },
  {
    path:'/pc/gaming-cases',
    component: () => import('components/Cases')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes
