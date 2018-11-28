# weidemo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#### 把代码提交到github上

##### 1.首先初始化项目

`git init`

##### 2.然后参看状态 

`git status`

##### 3.把项目添加进入git管理

`git add .`

`git status`

##### 4.把项目提交到本地仓库

`git commit -m "init my project"`

`git status`

##### 5.采用免密码提交方式SSH

如果已经是origin方式(HTTPS)则选择SSH提交方式

如果是HTTPS报如下错误fatal: remote origin already exists.

移出origin方式：`git remote rm origin`

```
git remote add origin https://github.com/xxx/xxxx.git
```

```
git push -u origin master
```

6.axios 引入开发技巧

>安装Axios；

安装方法`cnpm install axios --save` 等待npm安装完毕

>在main.js中引入axios引入方法

```
import Axios from 'axios'
```

`Vue.prototype.$axios = Axios`  必须要这样引入才能使用

##### 全部的main.js方法如下

```
import Vue from 'vue'
import Axios from 'axios'
import './lib/css/mui.min.css'
import './lib/css/icons-extra.css'
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import router from './router'
import App from './App'
Vue.prototype.$axios = Axios
Vue.prototype.HOST = "/api"
Vue.config.productionTip = false
Vue.component(Header.name, Header)
/* eslint-disable no-new */
new Vue({
render: h => h(App),
router
}).$mount('#app');
```

>跨域问题处理;

>找到config目录下的index.js文件,然后找到proxyTable，进行修改，修改内容如下：

```
proxyTable: {
      '/api': {
        target: 'https://api.douban.com',//设置你调用的接口域名和端口号 别忘了加http
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替
        },
        changeOrigin:true
      }
    },
```

>需要修改main.js；在main.js中增加一行代码；

Vue.prototype.HOST = "/api"

>在其他模块中就可以直接调用了

- 如：获取电影Top250 第一页 2条数据：
  豆瓣API:<https://api.douban.com/v2/movie/top250?start=0&count=2>

> 然后可以在HomeContainer.vue中做如下代码：

```
<template>
    <div>
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in listarr" :key="item.alt">
            <img :src="item.images.large" alt=""/>
        </mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img class="menu-icon" src="../../images/menu1.png" alt="" />
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img class="menu-icon" src="../../images/menu2.png" alt="" />
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img class="menu-icon" src="../../images/menu3.png" alt="" />
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img class="menu-icon" src="../../images/menu4.png" alt="" />
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img class="menu-icon" src="../../images/menu5.png" alt="" />
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img class="menu-icon" src="../../images/menu6.png" alt="" />
                    <div class="mui-media-body">联系我们</div></a></li>
		</ul> 
    </div>
</template>
<script>
export default {
    data(){
        return {
            listarr:[],
        }
    },
    created(){
        this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            var url = this.HOST + "/v2/movie/in_theaters?city=广州&start=0&count=3"
        this.$axios.get(url)
        .then(response => {
            this.listarr = response.data.subjects
        })
        .catch(error => {
            console.log(error);
        });
        }
    }
}
</script>

<style scoped>
.mint-swipe{
    width: 100%;
    height: 200px;
}
img{
    width: 100%;
    height: 100%;
}
.mui-grid-view.mui-grid-9{
    background-color: white;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0px;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size: 13px;
}
.menu-icon{
    width: 60px;
    height: 60px;
}
</style>

```




## 注意如下几点：

##### main.js中文件的Axios的配置信息

import Axios from 'axios'

Vue.prototype.$axios = Axios
Vue.prototype.HOST = "/api"

>vue中使用跨域url请求则请求地址可以如下写法
`var url = this.HOST + "/v2/movie/in_theaters?city=广州&start=0&count=3"`

#### 注意使用axios中的写法

##### 一、不要使用下面这种方法【这时候你运行时会发现，数据可以请求到，但是会报错 TypeError: Cannot set property 'listgroup' of undefined 】

```
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

##### 二、使用这种方法

```
this.$axios.get(url)
        .then(response => {
            console.log(response.data.subjects);
            this.listarr = response.data.subjects
            console.log(this.listarr);   
        })
        .catch(error => {
            console.log(error);
        });
```