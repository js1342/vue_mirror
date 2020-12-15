<template>
    <div class="grid-img-container">
        <div class="lbutton lr"><font-awesome-icon icon="caret-left"/></div>

        <div class="images grid-img">{{index}}</div>
        <div class="images"><cody-box :id=2 /></div>

        <div class="rbutton lr"><font-awesome-icon icon="caret-right"/></div>
        <div class="images"><cody-box :id=3 /></div>
        <div class="images"><cody-box :id=4 /></div>
    </div>
</template>

<script>
import CodyBox from './CodyBox.vue'

export default {
  components: { CodyBox },
    name:'CodyGrid',
    props:{
        index:Number
    },
    data(){
        return{
            dat:0,
        }
    }
}
</script>

<style scoped>
.grid-img-container{
    width:100%;
    display:grid;
    margin-top:10rem;
    overflow:hidden;
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