<template>
   <div class="container">
        <div class="mainbox">
            <div class="grid-img-container">
                <div class="lr"><font-awesome-icon icon="caret-left"/></div>
                <div>
                     <carousel @page-change="setTopPage"
                        :perPage="1" 
                        :paginationEnabled="false" 
                        style="color:white;">
                    <slide id='0' :key="0" class="grid-image">
                        지정하지 않음
                    </slide>
                    <slide v-for="(topItem,idx) in clothesData.top" :key="{idx}.idx + 1" class="grid-image">
                        <img :src="topItem.url" />
                    </slide>
                </carousel>
                </div>
                <div class="lr"><font-awesome-icon icon="caret-right"/></div>
            </div>
            <div class="grid-img-container">
                <div class="lr"><font-awesome-icon icon="caret-left"/></div>
                <div>
                     <carousel @page-change="setBotPage"
                        :perPage="1" 
                        :paginationEnabled="false" 
                        style="color:white;">
                     <slide id='0' :key="0" class="grid-image">
                        지정하지 않음
                    </slide>
                    <slide v-for="(botItem,idx) in clothesData.bottom" :key="{idx}.idx + 1" class="grid-image">
                        <img :src="botItem.url" />
                    </slide>
                </carousel>
                </div>
                <div class="lr"><font-awesome-icon icon="caret-right"/></div>
            </div>
            <div class="grid-img-container">
                <div class="lr"><font-awesome-icon icon="caret-left"/></div>
                <div>
                     <carousel @page-change="setOuterPage"
                        :perPage="1" 
                        :paginationEnabled="false" 
                        style="color:white;">
                    <slide id='0' :key="0" class="grid-image">
                        지정하지 않음
                    </slide>
                    <slide v-for="(outItem,idx) in clothesData.outer" :key="{idx}.idx + 1" class="grid-image">
                        <img :src="outItem.url" />
                    </slide>
                </carousel>
                </div>
                <div class="lr"><font-awesome-icon icon="caret-right"/></div>
            </div>
    </div>
</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import { mapGetters } from 'vuex'
  // optional style for arrows & dots


export default {
    components: { 
        Slide,
        Carousel,
    },
    props:{
        topImages:Array,
        bottomImages:Array,
    },
    name:'CodyRegisterPage',
    data(){
        return{
            clothesData:{top:null, bottom:null,outer:null},
            topPage:0,
            botPage:0,
            outerPage:0,
            state:0,
        }
    },
    methods:{
        setTopPage(num){
            this.topPage = num
        },
        setBotPage(num){
            this.botPage = num
        },
        setOuterPage(num){
            this.outerPage = num
        },
        updateClothes(){
            this.$store.dispatch('clothes/LoadClothes')
        },
    },
    computed:{
        ...mapGetters({
            getClothes:'clothes/getCategories'
        })
    },
    mounted:function(){
        this.updateClothes()
        let typeArr = ["상의","하의","아우터"]
        this.clothesData.top = this.getClothes(typeArr[0])
        this.clothesData.bottom = this.getClothes(typeArr[1])
        this.clothesData.outer = this.getClothes(typeArr[2])
    },
}
</script>

<style scoped>
img {
    margin-top:auto;
    width:90%;
    height:90%;
    object-fit:fill;
}
.grid-img-container{
    width:100%;
    display:grid;
    margin-top:1rem;
    overflow:hidden;
    grid-template-columns:8% 84% 8%;
}
.lr{
    padding:0 0.5rem;
    font-size:7rem;
    color: #dadada;
    display:flex;
    margin:0.5rem;
    border-radius:0.2rem;
    background-color: #070707;
    align-items: center;
    flex-direction: column;
    justify-content:center;
    vertical-align:middle;
}
.grid-image{
    width:640px;
    height:480px;
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content:center;
    vertical-align:middle;
    border: 3px 3px solid #dadada;
    margin:0.5rem auto;
    color:#dadada;
    font-size:4rem;
    font-family:'NanumBarunGothic';
    border-radius: 0.5rem;
}

.container{
    display:flex;
    width:100%;
    margin:0 auto;
    position:relative;
    justify-content: center;
    flex-direction: column;
}

.mainbox{
    width:100%;
    margin-top:1rem;
    display:flex;
    flex-direction: column;
}

</style>