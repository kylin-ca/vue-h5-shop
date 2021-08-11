/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/pages/index'),
    meta: { title: '首页', keepAlive: false }
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import('@/views/pages/details'),
    meta: { title: '商品详情', keepAlive: false }
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: () => import('@/views/pages/confirm'),
    meta: { title: '确认订单', keepAlive: false }
  },
  {
    path: '/orderList',
    name: 'OrderList',
    component: () => import('@/views/pages/orderList'), 
    meta: { title: '订单详情', keepAlive: false }
  },
  {
    path: '/addAddress',
    name: 'AddAddress',
    component: () => import('@/views/pages/addAddress'),
    meta: { title: '地址编辑', keepAlive: false }
  },
  {
    path: '/addressList',
    name: 'AddressList',
    component: () => import('@/views/pages/addressList'),
    meta: { title: '地址列表', keepAlive: false }
  }
]
