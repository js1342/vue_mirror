<template>
  <div class="container">
        <div class="mainbox">
            <div v-if="!showImg" >
                <menu-bar @menu-select="menuSelected" :menuItems="codyBar" :selected="this.selected"/>
                <cody-grid  @page-move="pageMove" :limit="this.limit" :page="this.page" :index="this.selected" :imgs="this.categories"/>
            </div>
            <div v-else v-on:click="this.imageClick">
                <div v-if="!this.showCody" class="big-img-box">
                    <div class="one-image">
                       <img :src="showImgUrl"/>
                    </div>
                </div>
                <div v-else-if="this.showCody" class="big-img-box">
                    <div class="register-grid">
                    <div class="register-grid-cell">
                        <img v-if="'top' in showImgData" :src="showImgData['top'].url">
                        <img v-else /> 
                        <img v-if="'bottom' in showImgData" :src="showImgData['bottom'].url">
                        <img v-else /> 
                    </div>
                    <div class="register-grid-cell">
                        <img v-if="'outer' in showImgData" :src="showImgData['outer'].url">
                        <img v-else /> 
                    </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import MenuBar from './MenuBar.vue'
import CodyGrid from './CodyGrid.vue'
import { EventBus }from './util/event-bus'
import { mapGetters } from 'vuex'
import Axios from 'axios'
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
            cody:null,
            categories:null,
            showImg:false,
            showImgId:0,
            showCody:false,
            showImgData:null,
            limit:0,
            page:0,
            codyBar:[
                {
                    txt:'코디',
                    type:'txt',
                    url:'./2',
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
                    txt:'한벌옷',
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
    computed:{
        ...mapGetters({
            getCategoriesFrom:'clothes/getCategories',
            getPaginatedCategories:'clothes/getPaginatedCategories',
            idToken:'account/idToken'
        }),
        showImgUrl(){
            if(!this.showCody)
                return this.showImgData.url
            else{
                return this.showImgData
            }
        }
    },
    methods:{
        async pageMove(input){
            if(this.page > 0 && input === -1)
                --this.page   
            if(this.page < this.limit && input === 1)
                ++this.page
            await this.getCategories(this.codyBar[this.selected].txt)
        },
        menuSelected(input){
            this.$emit('menuSel',input-1)
            if (input != 0){
                this.page = 0
                this.getCategories(this.codyBar[input].txt)
            }
            else{
               this.getCody()
            }
        },
        async getCody(){
            let reqheader={
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': await this.idToken             
                }
            }
            let res = await Axios.get('https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/outfit',reqheader)
            if('data' in res){
                this.cody = res.data
                this.categories = res.data.slice(this.page, this.page + 4)
                this.limit = (res.data.length % 4 === 0) ? res.data.length / 4 - 1 : Math.floor(res.data.length / 4)
            }
            
        },
        async load(){
            await this.getCategories(this.codyBar[this.selected].txt)
        },
        imageClick(input){
            this.showImg=!this.showImg
            this.showImgId = input.imgId
            this.showCody = input.isCody
            this.showImgData = input.clothData
            
        },
        async updateClothes(){
            await this.$store.dispatch('clothes/LoadClothes')
        },
        async getCategories(cat){
            let obj = await this.getPaginatedCategories(cat,this.page,4)
            this.categories = obj.categories
            this.limit = obj.limit
        },
        
        
    },
    created(){
        EventBus.$on('imageClick', this.imageClick)
    },

    mounted: async function(){
        await this.updateClothes()
        this.load()
    }
    
}
</script>

<style scoped>
.register-grid{
    width:100%;
    display:grid;
    margin-top:20rem;

    grid-template-columns:50% 50%;
}
.register-grid-cell{
    height:50rem;
    
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content:center;
}
.register-grid-cell img{
    margin:10% 0;
    width:60%;
    height:40%;
}
.one-image img{
    margin-top:20rem;
    width:80%;
    height:50rem;
}
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
    height:60%;
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