<template>
  <div class="container">
        <div class="mainbox">
            <div v-if="!showImg" >
                <menu-bar @menu-select="menuSelected" :menuItems="codyBar" :selected="this.selected"/>
                <cody-grid @page-move="pageMove" :limit="this.limit" :page="this.page" :index="this.selected" :imgs="this.categories"/>
            </div>
            <div v-else v-on:click="this.imageClick">yeah</div>
        </div> 
    </div>
</template>

<script>
import MenuBar from './MenuBar.vue'
import CodyGrid from './CodyGrid.vue'
import { EventBus }from './util/event-bus'
import { mapGetters } from 'vuex'
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
            categories:null,
            showImg:false,
            limit:0,
            page:0,
            codyBar:[
                
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
    computed:{
        ...mapGetters({
            getCategoriesFrom:'clothes/getCategories',
            getPaginatedCategories:'clothes/getPaginatedCategories',
        }),
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
            this.$emit('menuSel',input)
            if (input!=0)
                this.page = 0
                this.getCategories(this.codyBar[input].txt)
        },
        imageClick(input){
            console.log("id:",input, " image has clicked")
            this.showImg=!this.showImg
        },
        updateClothes(){
            this.$store.dispatch('clothes/LoadClothes')
        },
        async getCategories(cat){
            let obj = await this.getPaginatedCategories(cat,this.page,4)
            this.categories = obj.categories
            this.limit = obj.limit
        }
    },
    created(){
        EventBus.$on('imageClick', this.imageClick)
    },

    mounted(){
        this.updateClothes()
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