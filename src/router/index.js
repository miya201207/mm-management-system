import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import news from '@/components/news'

import menu from '@/components/menu/menu'
import food from '@/components/food/food'
import finance from '@/components/finance/finance'
import member from '@/components/member/member'
import setting from '@/components/setting/setting'



// 菜单
import dailyMenu from '@/components/menu/dailyMenu'
import settingMenu from '@/components/menu/settingMenu'

// 菜品
import allFood from '@/components/food/allFood'
import addFood from '@/components/food/addFood'

// 财务
import allReports from '@/components/finance/allReports'
import financialBoard from '@/components/finance/financialBoard'
import orderList from '@/components/finance/orderList'



// 会员
import billing_record from '@/components/member/billing_record'
import expenses_record from '@/components/member/expenses_record'
import member_management from '@/components/member/member_management'
import recharge_record from '@/components/member/recharge_record'

// 设置
import basicInfo from '@/components/setting/basicInfo'
import otherSetting from '@/components/setting/otherSetting'
import personalManagement from '@/components/setting/personalManagement'






Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    // 菜单
    {
      path: '/menu',
      name: 'menu',
      component:menu,
      children: [
        {
          path: '/menu',
          name: 'dailyMenu',
          redirect: "/menu/dailyMenu",   //默认走第一个路由的第一个
          component: dailyMenu
        },
        {
          path: '/menu/dailyMenu',
          name: 'dailyMenu',
          component: dailyMenu
        },
        {
          path: '/menu/settingMenu',
          name: 'settingMenu',
          component: settingMenu
        },
      ]
    },
      // 菜品
    {
      path: '/food',
      name: 'food',
      component: food,
      children: [
        {
          path: '/food',
          name: 'allFood',
          redirect: "/food/allFood",
          component: allFood
        },
        {
          path: '/food/allFood',
          name: 'allFood',
          component: allFood
        },
        {
          path: '/food/addFood',
          name: 'addFood',
          component: addFood
        },
      ]

    },
// 财务
    {
      path: '/finance',
      name: 'finance',
      component: finance,
      children: [
        {
          path: '/finance',
          name: 'financialBoard',
          redirect: "/finace/financialBoard",
          component: financialBoard
        },
        {
          path: '/finance/financialBoard',
          name: 'financialBoard',
          component: financialBoard
        },
        {
          path: '/finace/orderList',
          name: 'orderList',
          component: orderList
        },
        {
          path: '/finace/allReports',
          name: 'allReports',
          component: allReports
        },
      ]
    },
  
   // 会员
  
   {
    path: '/member',
    name: 'member',
    component: member,
    children: [
      {
        path: '/member',
        name: 'member_management',
        redirect: "/member/member_management",
        component: member_management
      },
      {
        path: '/member/expenses_record',
        name: 'expenses_record',
        component: expenses_record
      },
      {
        path: '/member/recharge_record',
        name: 'recharge_record',
        component: recharge_record
      },
      {
        path: '/member/billing_record',
        name: 'billing_record',
        component: billing_record
      },
    ]
  },
 
  // 设置
  {
    path: '/setting',
    name: 'setting',
    component: setting,
    children: [
      {
        path: '/setting',
        name: 'basicInfo',
        redirect: "/setting/basicInfo",
        component: basicInfo
      },
      {
        path: '/setting/basicInfo',
        name: 'basicInfo',
        component: basicInfo
      },
      {
        path: '/setting/otherSetting',
        name: 'otherSetting',
        component: otherSetting
      },
      {
        path: '/setting/personalManagement',
        name: 'personalManagement',
        component: personalManagement
      },
    ]
  },  

  ]
})
