<template>
  <div class="container">
        <div class="mainbox">
            <div v-if="!showImg" >
                <menu-bar @menu-select="menuSelected" :menuItems="codyBar" :selected="this.selected"/>
                <cody-grid :index="this.selected"/>
            </div>
            <div v-else v-on:click="this.imageClick">yeah</div>
        </div> 
    </div>
</template>

<script>
import MenuBar from './MenuBar.vue'
import CodyGrid from './CodyGrid.vue'
import { EventBus }from './util/event-bus'
export default {
    name:"CodyBody",
    components:{
        MenuBar,
        CodyGrid
    },
    props:{
        selected:Number
    },
    data(){
        return {
            showImg:false,
            codyBar:[
                {
                    txt:'코디',
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
                    txt:'한벌',
                    type:'txt',
                    url:'./2',
                    icon:'None',
                },
                {
                    txt:'아우터',
                    type:'txt',
                    url:'./2',
                    icon:'None',
                },
                
            ],
        }
    },
    methods:{
        menuSelected(input){
            //this.selected=input
            this.$emit('menuSel',input)
        },
        imageClick(input){
            console.log("id:",input, " image has clicked")
            this.showImg=!this.showImg
        }
    },
    created(){
        EventBus.$on('imageClick', this.imageClick)
    },
    
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
    width:100%;
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