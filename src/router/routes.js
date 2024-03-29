
const routes = [
  {
    name: "home",
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: "explore", path: '', component: () => import('src/pages/Explore.page.vue') },
      { name: "keyboards", path: '/keyboards', component: () => import('src/pages/Keyboards.page.vue') },
      { name: "keycaps", path: '/keycaps', component: () => import('src/pages/Keycaps.page.vue') },
      { name: "keycaps-details", path: '/keycaps/:id', component: () => import('src/pages/KeycapDetails.page.vue') },
      { name: "login", path: '/login', component: () => import('src/pages/Login.page.vue') },
      { name: "register", path: '/register', component: () => import('src/pages/Register.page.vue') },
      { name: "private", path : '/private', component: () => import('src/pages/private/Private.page.vue'), meta: { requiresAuth: true }},
      { name: "favorite-keycaps", path : '/favorite-keycaps', component: () => import('src/pages/private/FavoritesKeycaps.page.vue'), meta: { requiresAuth: true }}
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/Error404.page.vue')
  }
]

export default routes
