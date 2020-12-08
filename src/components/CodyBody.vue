<template>
  <div class="container">
        <div class="mainbox">
            <menu-bar/>
            <cody-grid/>
        </div> 
    </div>
</template>

<script>
import MenuBar from './MenuBar.vue'
import CodyGrid from './CodyGrid.vue'

export default {
    name:"CodyBody",
    components:{
        MenuBar,
        CodyGrid
    },
    data(){
        return {
            codyBar:[
                {
                    txt:'코디 보기',
                    type:'txt',
                    url:'./1',
                    icon:'None',
                },
                {
                    txt:'상의',
                    type:'txt',
                    url:'./2',
                    icon:'None',
                },
                 {
                    txt:'하의',
                    type:'txt',
                    url:'./2',
                    icon:'None',
                },
                 {
                    txt:'악세사리',
                    type:'txt',
                    url:'./2',
                    icon:'None',
                },
            ],
            grids:[
                [
                    'img_url1',
                    'img_url2',
                    'img_url3'
                ],
                [
                    'img_url4',
                    'img_url5',
                    'img_url6'
                ],
                [
                    'img_url7',
                    'img_url8',
                    'img_url9'
                ]
            ]
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