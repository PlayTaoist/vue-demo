<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in listarr" :key="item.id">
                <router-link :to="'/home/newsInfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.images.small">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>上映年份：{{item.year}}</span>
                            <span>电影评分：{{item.rating.average}}分</span>
                        </p>
                    </div>
                </router-link>
            </li>
			</ul>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
    data(){
        return {
            listarr:[]
        }
    },
    created(){
        this.getNewsList();
    },
    methods:{
        getNewsList(){
        var url = this.HOST + "/v2/movie/in_theaters?city=广州&start=0&count=10"
        this.$axios.get(url)
        .then(response => {
            this.listarr = response.data.subjects
        })
        .catch(error => {
            Toast('获取信息失败');
        });
        }
    }
}
</script>

<style scoped>
.mui-media-body h1{
    font-size: 14px;
}
.mui-ellipsis{
    display: flex;
    justify-content: space-between;
}
.mui-ellipsis span{
    font-size: 12px;
    color: #226aff;
}
</style>

