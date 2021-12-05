export default [
  {
    path: '/',
    component: () => import('@/views/NonMember'),
    children: [
      {
        name: 'Top',
        path: '',
        component: () => import('@/views/Top')
      },
      {
        name: 'SignIn',
        path: '/signin',
        component: () => import('@/views/SignIn')
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/views/Member'),
    meta: { requireAuth: true },
    children: [
      {
        name: 'Dashboard',
        path: '',
        component: () => import('@/views/Dashboard')
      }
    ]
  }
];