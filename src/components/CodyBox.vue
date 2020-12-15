<template>
    <div class="grid-content">
        <div class="img-box"><img src="https://via.placeholder.com/300x200" /></div>
        <div class="text">{{category}}ss</div>
    </div>
</template>

<script>
export default {
    name:'CodyBox',
    props:{
        ifCody:Boolean,
        imgUrl:null,
        category:null,
    },
    data(){
        return{
            state:0
        }
    }
}
</script>

<style scoped>
.text{
    font-size:3rem;
    margin-top:1rem;
    color:#dadada;
    font-family:'NanumBarunGothic'
}
img {
    width:100%;
    height:80%;
    object-fit:fill;
}
.img-box{
    width:80%;

    height:300px;
    background-color:#8a8a8a;
}
.grid-content{
    width:80%;
    height:80%;
    display:inline-flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;
    background-color:#303030;
    margin:0 auto;
    color:#dadada;
    font-size:4rem;
    font-family:'NanumBarunGothic';
    padding:1rem;
    border-radius: 0.5rem;
}
</style>