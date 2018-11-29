
import Vue from 'vue'

import VueRouter from 'vue-router'
import HomeContainer from './components/lib/HomeContainer.vue'
import MemberContainer from './components/lib/MemberContainer.vue'
import ShopcarContainer from './components/lib/ShopcarContainer.vue'
import SearchContainer from './components/lib/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import GoodsList from './components/goods/GoodsList.vue'
import Comment from './components/subcomponents/Comment.vue'

Vue.use(VueRouter)

var router = new VueRouter({
    routes:[
        {path:'/', redirect:'/home'},
        {path:'/home', name: "home", component: HomeContainer},
        {path:'/member', name: "member", component: MemberContainer},
        {path:'/shopcar', name: "shopcar", component: ShopcarContainer},
        {path:'/search', name: "search", component: SearchContainer},
        {path:'/home/newslist', name: "newslist", component: NewsList},
        {path:'/home/newsInfo/:id', name: "newsInfo", component: NewsInfo},
        {path:'/home/photolist', name: "photolist", component: PhotoList},
        {path:'/home/goodslist', name: "goodslist", component: GoodsList},
        {path:'/home/comment', name: "comment", component: Comment}
    ],
    linkActiveClass:'mui-active'
})

export default router