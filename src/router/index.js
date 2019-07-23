import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/views/account/login'], resolve)
    },
    {
      path: '/reset',
      name: 'reset',
      component: resolve => require(['@/views/account/reset'], resolve)
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/views/account/register'], resolve)
    },
    { //企业中心
      path: '/personal',
      name:'personal',
      component: resolve => require(['@/views/personal/index'], resolve)
    },
    { //企业资料
      path: '/personal/info',
      name:'personalInfo',
      component: resolve => require(['@/views/personal/info'], resolve)
    },
    { //企业地址
      path: '/personal/area/:index',
      name:'personalArea',
      component: resolve => require(['@/views/personal/area'], resolve)
    },
    { //设置地址
      path: '/personal/area/setting/:area',
      name:'personalAreaSetting',
      component: resolve => require(['@/views/personal/areaSetting'], resolve)
    },
    { //采购统计
      path: '/personal/count',
      name:'personalCount',
      component: resolve => require(['@/views/personal/count'], resolve)
    },

    { //产品报价
      path: '/product/index/:type',
      name:'product',
      component: resolve => require(['@/views/product/index'], resolve)
    },
    { //选择产品
      path: '/product/select',
      name:'productSelect',
      component: resolve => require(['@/views/product/select'], resolve)
    },
    { //确认订单
      path: '/product/confirm',
      name:'productConfirm',
      component: resolve => require(['@/views/product/confirm'], resolve)
    },
    { //付款方式
      path: '/product/payment',
      name:'productPayment',
      component: resolve => require(['@/views/product/payment'], resolve)
    },
    { //提交成功
      path: '/product/submitFinish/:id',
      name:'productSubmit',
      component: resolve => require(['@/views/product/submitFinish'], resolve)
    },

    { //订单列表
      path: '/order/:index',
      name:'order',
      component: resolve => require(['@/views/order/index'], resolve)
    },
    { //物流信息
      path: '/order/logistics/:id',
      name:'orderLogistics',
      component: resolve => require(['@/views/order/logistics'], resolve)
    },
    { //订单详情
      path: '/order/details/:id',
      name:'orderDetails',
      component: resolve => require(['@/views/order/details'], resolve)
    }
  ]
})
