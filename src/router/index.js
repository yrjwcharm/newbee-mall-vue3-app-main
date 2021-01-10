import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Category from '../views/Category.vue'
import Login from '../views/Login.vue'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Cart from '../views/Cart.vue'
import CreateOrder from '../views/CreateOrder.vue'
import User from '../views/User.vue'
import Setting from '../views/Setting.vue'
import Address from '../views/Address.vue'
import AddressEdit from '../views/AddressEdit.vue'
import Order from '../views/Order.vue'
import OrderDetail from '../views/OrderDetail.vue'

//新页面
import AddEnterprise from '../views/AddEnterprise'
import CreateEnterprise from '../views/CreateEnterprise'
import SelectIndustry from '../views/SelectIndustry'
import EnterpriseInfo from '../views/EnterpriseInfo'
import EnterpriseVerify from '../views/EnterpriseVerify'
import NameVerify from '../views/NameVerify'
import UploadIncumbencyCertification from '../views/UploadIncumbencyCertification'
import WriteEnterpriseInfo from '../views/WriteEnterpriseInfo'
import VerifyStatus from '../views/VerifyStatus'
import AddMember from '../views/AddMember'
import ShareTeamCode from '../views/ShareTeamCode'
import JoinEnterprise from '../views/JoinEnterprise'
import TeamCodeJoin from '../views/TeamCodeJoin'
import SubmitApply from '../views/SubmitApply'
import ApplyStatus from '../views/ApplyStatus'




const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    // {
    //   path: '/',
    //   redirect: '/home'
    // },
    {
      path:'/',
      redirect:'/add-enterprise'
    },
    {
      path:'/add-enterprise',
      name:'add-enterprise',
      component:AddEnterprise,
    },
    {
      path:'/share-team-code',
      name:'share-team-code',
      component:ShareTeamCode
    },
    {
      path:'/join-enterprise-organization-team',
      name:'join',
      component:JoinEnterprise

    },
    {
      path:'/create',
      name:'create',
      component:CreateEnterprise,

    },
    {
      path:'/selectIndustry',
      name:'selectIndustry',
      component:SelectIndustry
    },

    {
      path:'/enterpriseInfo',
      name:'info',
      component:EnterpriseInfo
    } ,
    {
      path:'/verify',
      name:'verify',
      component:EnterpriseVerify
    },
    {
      path:'/name-verify',
      name:'name-verify',
      component:NameVerify
    },
    {
      path:'/upload-incumbency-certification',
      name:'upload-incumbency-certification',
      component:UploadIncumbencyCertification
    },
    {
      path:'/write-enterprise-info',
      name:'write',
      component:WriteEnterpriseInfo
    },
    {
      path:'/verify-status',
      name:'status',
      component:VerifyStatus
    },
    {
      path:'/add-member',
      name:'add',
      component:AddMember
    },
    {
      path:'/team-code-join',
      name:'team-code-join',
      component:TeamCodeJoin
    },
    {
      path:'/submit-apply',
      name:'submit-apply',
      component:SubmitApply
    },
    {
      path:'/apply-status',
      name:'apply-status',
      component:ApplyStatus
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        index: 1
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        index: 1
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        index: 2
      }
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
      meta: {
        index: 1
      }
    },
    {
      path: '/product-list',
      name: 'product-list',
      meta: {
        index: 2
      },
      component: ProductList
    },
    {
      path: '/product/:id',
      name: 'product',
      meta: {
        index: 3
      },
      component: ProductDetail
    },
    {
      path: '/cart',
      name: 'cart',
      meta: {
        index: 1
      },
      component: Cart
    },
    {
      path: '/create-order',
      name: 'create-order',
      meta: {
        index: 2
      },
      component: CreateOrder
    },
    {
      path: '/order',
      name: 'order',
      meta: {
        index: 2
      },
      component: Order
    },
    {
      path: '/order-detail',
      name: 'order-detail',
      meta: {
        index: 3
      },
      component: OrderDetail
    },
    {
      path: '/user',
      name: 'user',
      meta: {
        index: 1
      },
      component: User
    },
    {
      path: '/setting',
      name: 'setting',
      meta: {
        index: 2
      },
      component: Setting
    },
    {
      path: '/address',
      name: 'address',
      meta: {
        index: 2
      },
      component: Address
    },
    {
      path: '/address-edit',
      name: 'address-edit',
      meta: {
        index: 3
      },
      component: AddressEdit
    },
  ]
})

export default router
