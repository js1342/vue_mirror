<template>
    <div class="grid-content" v-on:click="clickGrid" :class="{'grid-pad':!ifCody, 'cody-pad':ifCody}">
        <div class="img-box" v-if="!ifCody">
            <div class="content"><img v-if="this.isActive" :src="this.imgUrl" />
                <div v-if="this.isActive" class="text">{{this.category + "/" + this.color}}</div>
            </div>
        </div>
        <div class="img-box" v-else-if="ifCody">
            <div class="register-grid">
            <div class="register-grid-cell">
                <img v-if="'top' in clothData" :src="clothData['top'].url">
                <img v-else /> 
                <img v-if="'bottom' in clothData" :src="clothData['bottom'].url">
                <img v-else /> 
            </div>
            <div class="register-grid-cell">
                <img v-if="'outer' in clothData" :src="clothData['outer'].url">
                <img v-else /> 
            </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { EventBus } from "./util/event-bus"

export default {
    name:'CodyBox',
    props:{
        id:Number,
        ifCody:Boolean,
        clothData:Object
    },
    computed:{
        isActive(){
            return this.clothData !== null
        },
        imgUrl(){
            if(this.isActive)
                return this.clothData.url
            else return null
        },
        category(){
            if(this.isActive)
                return this.clothData.category
            else return null
        },
        color(){
            if(this.isActive)
                return this.clothData.color
            else return null
        }
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
.register-grid{
    width:100%;
    height:100%;
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display:grid;
    overflow:hidden;
    grid-template-columns:50% 50%;
}
.register-grid-cell{
    height:100%;
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content:center;
    padding:0 5%;

}
.register-grid-cell img{
    width:80%;
    height:40%;
    margin:10% 10%;
    object-fit:fill;
}
.text{
    font-size:2rem;
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
.content img {
    margin-top:auto;
    width:90%;
    height:70%;
    object-fit:fill;
}

.img-box{
    width:90%;

    padding-top: 110%;
    position:relative;

    background-color:#303030;
}
.grid-pad{
    padding-top:10%;
}
.cody-pad{
    padding:5% 0;
}
.grid-content{
    width:80%;
    height:80%;
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