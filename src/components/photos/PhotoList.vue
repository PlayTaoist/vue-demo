<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id==0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id" @click="getPhotoListByCategoryId(item.id)">
                        {{ item.title }}
                    </a>
                </div>
            </div>
		</div>

        <ul class="photo-list">
        <router-link v-for="item in list" :key="item.createdAt" tag="li" :to="'/home/photoinfo/' + item.createdAt">
            <img v-lazy="item.url">
            <div class="info">
                <h1 class="info-title">{{item.type}}</h1>
                <div class="info-body">{{item.createdAt | datetimeFormat }}</div>
            </div>
        </router-link>
        </ul>
    </div>
</template>

<script>
//导入mui的js
import mui from '../../lib/js/mui.min.js'

export default {
    data(){
        return {
            cates:[],
            list:[]//图片列表的数组
        }
    },
    created(){
        this.getAllCategory();
        this.getPhotoListByCategoryId(0);
    },
    //mui的scroll配置(变成可滑动)
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
        getAllCategory(){
            this.cates=[{title:"全部", id:0}
            ,{title:"家居生活", id:1}
            ,{title:"摄影设计", id:2}
            ,{title:"明星美女", id:3}
            ,{title:"摄影学习", id:4}
            ,{title:"摄影器材", id:5}
            ,{title:"明星写真", id:6}
            ,{title:"清纯甜美", id:7}
            ,{title:"古典美女", id:8}]
            //暂时无结构
            // var url = this.HOST + '/v2/movie/subject/'
            // this.$axios.get(url)
            //     .then(result => {
            //         result.body.message.unshift({title:'全部', id:0})
            //         this.cates = result.body.message
            //     })
            //     .catch(error => {
            //         console.log(error.message)
            //     })
        },
        getPhotoListByCategoryId(cateId){
            //暂时无结构
            var url = 'https://www.apiopen.top/meituApi?page=' + cateId
            this.$axios.get(url)
                .then(result => {
                    if (result.data.code===200) {
                       this.list = result.data.data
                    }                   
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
    }
}
</script>

<style scoped>
*{
    touch-action: pan-y;
    transform: translate3d(0px, 0px, 0px) translateZ(0px);
}
.photo-list{
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
}
li{
    background-color: #ccc;
    list-style: none;
    margin-bottom: 10px;
    padding: 0;
    text-align: center;
    box-shadow: 0 0 10px #999;
    position: relative;
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
img{
    width: 100%;
    vertical-align: middle;
}
.info{
    color:white;
    text-align: left;
    position: absolute;
    bottom: 0px;
    padding-left: 5px;
    background-color: rgb(0, 0, 0, 0.4);
    width: 100%;
    
}
.info-title{
    font-size: 14px;
}
.info-body{
    font-size: 13px;
}
</style>
