<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="https://img10.360buyimg.com/n1/s450x450_jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg" alt="">
            <h1 class="title">Apple iPhone X (A1865) 64GB 银色 移动联通电信4G手机</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥6899</span>
                    <span class="old">￥6999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="http://img14.360buyimg.com/n1/s450x450_jfs/t19780/222/1897536104/310145/ffa04ad5/5add75c8N45d76e9a.jpg" alt="">
            <h1 class="title">索尼（SONY）ILCE-7RM2 全画幅微单相机 单机身（约4240万有效像素 4K视频 5轴防抖 A7RM2/a7r2）</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥9899</span>
                    <span class="old">￥9999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://img10.360buyimg.com/n1/s450x450_jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg" alt="">
            <h1 class="title">Apple iPhone X (A1865) 64GB 银色 移动联通电信4G手机</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥6899</span>
                    <span class="old">￥6999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    justify-content: space-between;
}
.goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 5px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 170px;
}
img{
    width: 100%;
}
.title{
    font-size: 14px;
}
.info{
    background-color: #eeeeee;
}
p{
    margin: 0;
    padding: 5px;
}
.price{

}
.now{
    color: red;
    font-weight: bold;
    font-size: 16px;
}
.old{
    text-decoration: line-through;
    font-size: 12px;
    margin-left: 10px;
}
.sell{
    display: flex;
    justify-content: space-between;
}
</style>
