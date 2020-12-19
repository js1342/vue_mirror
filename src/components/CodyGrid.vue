<template>
    <div class="grid-img-container">
        <div class="lbutton lr" :style="{color:this.page===0? '#303030':'#dadada'}" v-on:click="pageMove(-1)"><font-awesome-icon icon="caret-left"/></div>
        <div class="rbutton lr" :style="{color:this.page >= limit? '#303030':'#dadada'}" v-on:click="pageMove(1)"><font-awesome-icon icon="caret-right"/></div>
        <!-- <div class="images" v-for="(item,idx) in this.imgs" :key="{idx}.idx">
            <cody-box :id=idx :imgUrl="item.url"/>
        </div> -->
        <div class="images" v-for="n in 4" :key="n">
            <cody-box :id="n" :imgUrl="fetchUrl(n)"/>
        </div>       
    </div>
</template>

<script>
/*<div class="images grid-img">{{index}}</div>
        <div class="images"><cody-box :id=1 :imgUrl="this.imgs[1].url"/></div>


        <div class="images"><cody-box :id=2 :imgUrl="this.imgs[2].url"/></div>
        <div class="images"><cody-box :id=3 :imgUrl="this.imgs[3].url"/></div> */
import CodyBox from './CodyBox.vue'


export default {
  components: { CodyBox },
    name:'CodyGrid',
    props:{
        index:Number,
        imgs:Array,
        limit:Number,
        page:Number,
    },
    data(){
        return{
            dat:0,
        }
    },
    methods:{
        pageMove:function(amount){
            this.$emit('page-move',amount)
        },
        fetchUrl(n){
            if(this.imgs!== null)
                if(this.imgs.length > n - 1)
                    return this.imgs[n - 1].url
            return null
        },
    }
}
</script>

<style scoped>
.grid-img-container{
    width:100%;
    height:100%;
    display:grid;
    margin-top:10rem;
    overflow:hidden;
    align-items: center;
    align-content: center;
    grid-template-columns:8% 42% 42% 8%;
    grid-template-rows:repeat(2,50%);
    grid-template-areas:
        "left-button image1 image2 right-button"
        "left-button image3 image4 right-button";
}
.images{
     grid-area:image1, image2, image3, image4;   
}

.rbutton{
    grid-area: right-button;
}
.lbutton{
    grid-area:left-button 
}
.lr{
    font-size:7rem;
    height:90%;
    color: #dadada;
    display:flex;
    margin:0.5rem;
    border-radius:0.4rem;
    background-color: #101010;
    align-items: center;
    flex-direction: column;
    justify-content:center;
    vertical-align:middle;
}
.grid-img{
    width:80%;
    height:80%;
    display:inline-flex;
    flex-direction: column;
    justify-content: center;
    margin:0 auto;
    background-color:#303030;
    color:#dadada;
    font-size:4rem;
    font-family:'NanumBarunGothic';
    padding:1rem;
    border-radius: 0.2rem;
}
.btn-base{
    display:inline-flex;
    text-align:center;  
    border-radius:0.7rem;
    border:0.2rem solid #dadada;
    justify-content: center;
    vertical-align: middle;
    color:#dadada;
    margin:2rem auto 0 auto; 
    padding:auto;
    outline:none;
    box-shadow:0 0 1rem #e6e6e6; 
}
</style>