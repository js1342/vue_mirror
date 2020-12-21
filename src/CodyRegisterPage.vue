<template>
   <div class="container">
        <div class="mainbox column-space">
            <menu-bar @menu-select="menuSelected" :menuItems="codyBar" :selected="this.selected"/>
            <div v-if="this.page === 0 " class="carousel-div">        
                <div class="grid-img-container">
                    <div class="lr"><font-awesome-icon icon="caret-left"/></div>
                    <div>
                        <carousel @page-change="setTopPage"
                            :navigateTo="[topPage,false]"
                            :perPage="1" 
                            :paginationEnabled="false" 
                            style="color:white;">
                        <slide id='0' :key="0" class="grid-image">
                            지정하지 않음
                        </slide>
                        <slide v-for="(topItem,idx) in clothesData.top" :key="{idx}.idx + 1" class="grid-image">
                            <img :src="topItem.cropped" />
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
                            :navigateTo="[botPage,false]" 
                            :paginationEnabled="false" 
                            style="color:white;">
                        <slide id='0' :key="0" class="grid-image">
                            지정하지 않음
                        </slide>
                        <slide v-for="(botItem,idx) in clothesData.bottom" :key="{idx}.idx + 1" class="grid-image">
                            <img :src="botItem.cropped" />
                        </slide>
                    </carousel>
                    </div>
                    <div class="lr"><font-awesome-icon icon="caret-right"/></div>
                </div>
                
            </div>
            <div v-else-if="this.page === 1" class="carousel-div">
                <div class="grid-img-container">
                    <div class="lr"><font-awesome-icon icon="caret-left"/></div>
                    <div>
                        <carousel @page-change="setOuterPage"
                            :navigateTo="[outerPage,false]"
                            :perPage="1" 
                            :paginationEnabled="false" 
                            style="color:white;">
                        <slide id='0' :key="0" class="grid-image">
                            지정하지 않음
                        </slide>
                        <slide v-for="(outItem,idx) in clothesData.outer" :key="{idx}.idx + 1" class="grid-image">
                            <img :src="outItem.cropped" />
                        </slide>
                    </carousel>
                    </div>
                    <div class="lr"><font-awesome-icon icon="caret-right"/></div>
                </div>
            </div>
            <div v-else-if="this.page === 2" class="carousel-div">
                <div class="register-grid">
                    <div class="register-grid-cell">
                    <img v-if="topPage !== 0 && clothesData.top !== null" :src="clothesData.top[topPage - 1].cropped"/>
                    <img v-else />
                    <img v-if="botPage !== 0 && clothesData.botom !== null" :src="clothesData.bottom[botPage - 1].cropped"/>
                    <img v-else />
                    <span class="text">상/하의</span>      
                    </div>
                    <div class="register-grid-cell">
                    <img v-if="outerPage !== 0 && clothesData.outer !== null" :src="clothesData.outer[outerPage - 1].cropped"/>
                    <img v-else />
                    <span class="text">아우터</span>
                    </div>             
                </div>
                <mir-button style="margin-top:6rem;" @idSelect="registerCody" :info="regBtn"/> 
            </div>
            
    </div>
</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import { mapGetters } from 'vuex'
import MenuBar from './components/MenuBar.vue'
import MirButton from './components/MirButton.vue'
import Axios from 'axios'
  // optional style for arrows & dots

/** 
                    <img v-if="botPage !== 0 && botImages !== null" :src="botImages[botPage].cropped"/> */
export default {
    components: { 
        Slide,
        Carousel,
        MenuBar,
        MirButton,
    },
  
  
    props:{
        topImages:Array,
        bottomImages:Array,
    },
    name:'CodyRegisterPage',
    data(){
        return{
            clothesData:{top:null, bottom:null,outer:null},
            page:0,
            topPage:0,
            botPage:0,
            outerPage:0,
            state:0,
            selected:0,
            regBtn:
            {   
                txt:'등록',
                type:'mir',        
                width:11,
                height:4,
                fontSize:3,
            },
            codyBar:[
                {
                    txt:'상/하의',
                    type:'txt',
                    url:'./1',
                    icon:'None',
                },
                 {
                    txt:'아우터',
                    type:'txt',
                    url:'./2',
                    icon:'None',
                },
                {
                    txt:'등록',
                    type:'txt',
                    url:'./2',
                    icon:'None',
                },
            ]
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
        menuSelected(num){
            this.selected = num
            this.page = num
        },
        registerCody(){
            let reqheader = {
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': this.idToken             
                }
            }
            let reqObj = {}
            
            if(this.topPage !== 0){
                reqObj["top"] = this.clothesData.top[this.topPage - 1].clothes_id
            }
            if(this.botPage !== 0){
                reqObj["bottom"] = this.clothesData.bottom[this.botPage - 1].clothes_id
            }
            if(this.outerPage !== 0){
                reqObj["outer"] = this.clothesData.outer[this.outerPage - 1].clothes_id
            }
            Axios.post('https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/outfit',reqObj,reqheader)
            .then(res=>{
                console.log(res)
                alert('upload success')
                this.$emit('backHome',0)
             } 
            )
        }
    },
    computed:{
        ...mapGetters({
            getClothes:'clothes/getCategories',
            idToken:'account/idToken',
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
    margin:auto 0;
    width:90%;
    height:90%;
    object-fit:fill;
}
.grid-img-container{
    width:100%;
    display:grid;
    margin-top:5rem;
    overflow:hidden;
    grid-template-columns:8% 84% 8%;
}
.register-grid{
    width:100%;
    display:grid;
    margin-top:5rem;
    overflow:hidden;
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
    width:60%;
    height:40%;
}
.lr{
    padding:0 0.5rem;
    font-size:7rem;
    color: #dadada;
    
    margin:0.5rem;
    border-radius:0.2rem;
    background-color: #070707;
    display:flex;
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
.column-space{
    align-content: center;

}
.carousel-div{
    margin-top: 3rem;
}
.text{
    font-family: 'NanumBarunGothic';
    font-size:2rem;
    display:flex;
    color:#dadada;
}
.mainbox{
    width:100%;
    height:80%;
    margin-top:1rem;
    display:flex;
    flex-direction: column;
}

</style>