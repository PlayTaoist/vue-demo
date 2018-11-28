
import Vue from 'vue'

import VueRouter from 'vue-router'
import HomeContainer from './components/lib/HomeContainer.vue'
import MemberContainer from './components/lib/MemberContainer.vue'
import ShopcarContainer from './components/lib/ShopcarContainer.vue'
import SearchContainer from './components/lib/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

Vue.use(VueRouter)

var router = new VueRouter({
    routes:[
        {path:'/', redirect:'/home'},
        {path:'/home', name: "home", component: HomeContainer},
        {path:'/member', name: "member", component: MemberContainer},
        {path:'/shopcar', name: "shopcar", component: ShopcarContainer},
        {path:'/search', name: "search", component: SearchContainer},
        {path:'/home/newslist', name: "newslist", component: NewsList},
        {path:'/home/newsInfo/:id', name: "newsInfo", component: NewsInfo}
    ],
    linkActiveClass:'mui-active'
})

export default router