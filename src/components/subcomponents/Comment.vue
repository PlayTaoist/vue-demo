<template>
    <div>
        <h3 class="comment">发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容" maxlength="200" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="subComment">发表评论</mt-button>
        <div class="comment_text" v-for="(item, index) in comments" :key="item.id">
            <div class="comment_title">第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user.username}}&nbsp;&nbsp;发表时间:{{item.ctime | datetimeFormat}}</div>
            <div class="comment_body">{{item.content}}</div>
        </div>
        <mt-button type="danger" plain  size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
    data(){
        return{
            pageIndex : 1,//页码
            comments:[],
            msg:''//评论内容
        }
    },
    created(){
        this.getComments();
    },
    methods:{
        getMore(){
            this.pageIndex++
            this.getComments()
        },
        //提交评论
        subComment(){
            var url = this.HOST + "/v2/movie/subject/" + this.id 
            //校检时候为空
            if (this.msg.length === 0) {
                return Toast('评论内容不能为空！')
            }else{
                this.msg = ''
                return Toast('评论接口暂未实现！')
            }
            this.$axios({
                method: 'post',
                url: url,
                data: {
                    content: this.msg.trim()
                }
                })
                .then(result => {
                    console.log(result.data)
                    var cmt = {
                        user_name: "匿名用户",
                        add_time:Date.now(),
                        content:this.msg.trim()
                    }
                    this.comments.unshift(cmt)
                    this.msg = ''
                })
                .catch(error => {
                    Toast('获取信息失败');
                })
        },
        //暂时无获取评论接口
        getComments(){
            var url = "https://www.apiopen.top/satinCommentApi?id=27610708&page=" + this.pageIndex 
            this.$axios.get(url)
                .then(result => {
                    console.log(result.data.data)
                    if (result.data.code === 200) {
                        this.comments = this.comments.concat(result.data.data.normal.list);
                    }                   
                })
                .catch(error => {
                    Toast('获取信息失败');
                })
        }
    },
    props:["id"]
}
</script>

<style scoped>
.comment{
    font-size: 16px;
}
textarea{
    height: 120px;
    width: 100%;
    margin: 0;
    font-size: 14px;
}
.comment_text{
    margin: 5px 0;
}
.comment_title{
    font-size: 12px;
    background-color: #ccc;
    line-height: 30px;
    padding-left: 5px;
}
.comment_body{
    font-size: 12px;
    line-height: 30px;
    text-indent: 2rem;
}
</style>
