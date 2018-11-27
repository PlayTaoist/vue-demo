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

把代码提交到github上

1.首先初始化项目

git init

2.然后参看状态 

git status

3.把项目添加进入git管理

git add .

git status

4.把项目提交到本地仓库

git commit -m "init my project"

git status

5.采用免密码提交方式SSH

如果已经是origin方式(HTTPS)则选择SSH提交方式

如果是HTTPS报如下错误fatal: remote origin already exists.

移出origin方式：git remote rm origin

```
git remote add origin https://github.com/xxx/xxxx.git
```

```
git push -u origin master
```

