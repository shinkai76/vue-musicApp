import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/Recommend/Recommend'
import Singer from 'components/Singer/Singer'
import Rank from 'components/Rank/Rank'
import Search from 'components/Search/Search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend' // 打开时默认页面
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
