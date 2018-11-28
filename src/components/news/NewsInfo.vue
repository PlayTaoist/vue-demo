<template>
    <div class="newsinfo_container">
        <h3 class="news_title">{{ newsinfo.original_title }}</h3>
        <p class="new_subtitle">
            <span>电影名称：{{ newsinfo.title }}</span>
            <span>上映时间：{{ newsinfo.year }}</span>
        </p>
        <hr>
        <p class="new_subtitle2">
            <span>主演名：{{ casts }}</span>
        </p>
        <p class="new_subtitle2">
            <span>制片国家/地区：{{ countries }}</span>
        </p>
        <div class="news_content">{{ newsinfo.summary }}</div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import Comment from '../subcomponents/Comment.vue'

export default {
    data(){
        return{
            id:this.$route.params.id,
            newsinfo:{},
            countries:'',
            casts:''
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
            var url = this.HOST + "/v2/movie/subject/" + this.id
            this.$axios.get(url)
                .then(result => {
                    console.log(result.data)
                    this.newsinfo = result.data;
                    this.countries = result.data.countries.join("/");
                    var arr = result.data.casts.length
                    var array = result.data.casts;
                    for (var k = 0, length = array.length; k < length; k++) {
                        this.casts += array[k].name + "/"
                    }
                    console.log(this.casts)
                    
                })
                .catch(error => {
                    Toast('获取信息失败');
                })
        }
    },
    components:{
        "comment-box" : Comment
    }
}
</script>

<style scoped>
.newsinfo_container{
    padding: 0 20px;
}
.news_title{
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
}
.new_subtitle{
    font-size: 13px;
    color: #226af2;
    display: flex;
    justify-content: space-between;
}
.news_content{
    font-size: 13px;
    padding-bottom: 20px;
}
</style>
