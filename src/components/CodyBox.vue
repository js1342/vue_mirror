<template>
    <div class="grid-content" v-on:click="clickGrid">
        <div class="img-box"><div class="content"><img v-if="this.isActive" :src="this.imgUrl" /></div></div>
        <div class="text">{{category}}</div>
    </div>
</template>

<script>
import { EventBus } from "./util/event-bus"

export default {
    name:'CodyBox',
    props:{
        id:Number,
        ifCody:Boolean,
        imgUrl:null,
        category:null,
    },
    computed:{
        isActive(){
            return this.imgUrl !== null
        },

    },
    data(){
        return{
            state:0
        }
    },
    methods:{
        clickGrid(){
            EventBus.$emit('imageClick',this.id)
        }
    },
}
</script>

<style scoped>
.text{
    font-size:3rem;
    margin-top:1rem;
    color:#dadada;
    font-family:'NanumBarunGothic'
}
.content{
    width:100%;
    height:100%;
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
img {
    margin-top:auto;
    width:90%;
    height:90%;
    object-fit:fill;
}
.img-box{
    width:80%;

    padding-top: 110%;
    position:relative;

    background-color:#303030;
}
.grid-content{
    width:80%;
    height:80%;
    padding-top:10%;
    display:inline-flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;
    background-color:#303030;
    margin:10% auto;
    color:#dadada;
    font-size:4rem;
    font-family:'NanumBarunGothic';
    border-radius: 0.5rem;
}
</style>