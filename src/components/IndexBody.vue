<template>
  <div class="container">
     
        <div class="greeting">
            <h1>안녕하세요?</h1>
            <h1>땡땡떙 님</h1>
        </div>
        <div class="mainbox">
            <button-area :btns="baseMenu"/>
            <button-area :btns="codyMenu"/>
            <div class="bottom">
                <div class="bottom-txt">오늘의 추천</div>
                <button-area style="margin-top:5rem;padding:0;" :btns="bottomMenu"/>
            </div>
        </div> 
    </div>
</template>

<script>
import ButtonArea from './ButtonArea.vue'

export default {
    name:"IndexBody",
    components:{
        ButtonArea
    },
    data(){
        return {
            baseMenu:[
                {
                    txt:'내 옷장 보기',
                    type:'mir',
                    url:'./1',
                    icon:'None',
                },
                {
                    txt:'내 코디 보기',
                    type:'mir',
                    url:'./2',
                    icon:'None',
                },
            ],
            codyMenu:[
                {
                    txt:'상의',
                    type:'round',
                    url:'./1',
                    icon:'tshirt',
                },
                {
                    txt:'하의',
                    type:'round',
                    url:'./2',
                    icon:'columns',
                },
                {
                    txt:'악세사리',
                    type:'round',
                    url:'./2',
                    icon:'ring',
                }
            ],
            bottomMenu:[
                {
                    txt:'1',
                    type:'mir',
                    url:'./1',
                    icon:'None',
                },
                 {
                    txt:'2',
                    type:'mir',
                    url:'./1',
                    icon:'None',
                },
                 {
                    txt:'3',
                    type:'mir',
                    url:'./1',
                    icon:'None',
                } 
            ],
        }
    }
}
</script>

<style scoped>
.bottom{
    display:flex;
    margin-top:auto;
    margin-bottom: 4rem;
    justify-content: center;
    flex-direction: column;
}
.bottom-txt{
    font-family: 'NanumBarunGothic';
    font-size:3rem;
    display:flex;
    padding-left:5rem;
    padding-right:auto;
    margin-top:4rem;
    padding-top:4rem;
    color:#dadada;
}
.container{
    display:flex;
    width:90%;
    margin:0 auto;
    position:relative;
    justify-content: center;
    flex-direction: column;
}
.greeting{
    width:90%;
    padding-top:1rem;
    text-align:center; 
    display:block;
    color:#dadada;
    font-family: 'NanumBarunGothic';
    margin:1rem auto;
}
h1 {
    margin:1rem auto;
    font-size:5rem;
}
.mainbox{
    width:100%;
    margin-top:1rem;
    display:flex;
    flex-direction: column;
}
.text-h3{
    font-size:3rem;
    font-family: inherit;
    text-align: center;
}
</style>