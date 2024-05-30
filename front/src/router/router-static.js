import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import huiyuanka from '@/views/modules/huiyuanka/list'
    import huiyuanchongzhi from '@/views/modules/huiyuanchongzhi/list'
    import chanpinruku from '@/views/modules/chanpinruku/list'
    import yuechaxun from '@/views/modules/yuechaxun/list'
    import xiangmuyuding from '@/views/modules/xiangmuyuding/list'
    import xiangmuleixing from '@/views/modules/xiangmuleixing/list'
    import chanpinleixing from '@/views/modules/chanpinleixing/list'
    import yonghu from '@/views/modules/yonghu/list'
    import discusschanpinkucun from '@/views/modules/discusschanpinkucun/list'
    import chanpinkucun from '@/views/modules/chanpinkucun/list'
    import chanpingoumai from '@/views/modules/chanpingoumai/list'
    import meirongxiangmu from '@/views/modules/meirongxiangmu/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/huiyuanka',
        name: '会员卡',
        component: huiyuanka
      }
      ,{
	path: '/huiyuanchongzhi',
        name: '会员充值',
        component: huiyuanchongzhi
      }
      ,{
	path: '/chanpinruku',
        name: '产品入库',
        component: chanpinruku
      }
      ,{
	path: '/yuechaxun',
        name: '余额查询',
        component: yuechaxun
      }
      ,{
	path: '/xiangmuyuding',
        name: '项目预定',
        component: xiangmuyuding
      }
      ,{
	path: '/xiangmuleixing',
        name: '项目类型',
        component: xiangmuleixing
      }
      ,{
	path: '/chanpinleixing',
        name: '产品类型',
        component: chanpinleixing
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/discusschanpinkucun',
        name: '产品库存评论',
        component: discusschanpinkucun
      }
      ,{
	path: '/chanpinkucun',
        name: '产品库存',
        component: chanpinkucun
      }
      ,{
	path: '/chanpingoumai',
        name: '产品购买',
        component: chanpingoumai
      }
      ,{
	path: '/meirongxiangmu',
        name: '美容项目',
        component: meirongxiangmu
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
