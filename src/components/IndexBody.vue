<template>
    <div class="container">
     
        <div class="greeting">
            <h1>안녕하세요? 홍길동 님</h1>
        </div>
        <div class="mainbox">
            <vertical-menu @v-menu-selected="raiseEvent" :btns="VMenu"/>
        </div> 
    </div>
</template>

<script>
import VerticalMenu from './VerticalMenu.vue'


export default {
    name:"IndexBody",
    components:{
        VerticalMenu
    },
    methods:{
        raiseEvent(num){
            this.$emit('menuSel', num)
        },
    },
    data(){
        return {
            VMenu:[
                {
                    txt:'상의',
                    type:'round',
                    width:8,
                    height:8,
                    iconSize:8,
                    fontSize:2,
                    ifBorder:false,
                    url:'./1',
                    icon:'tshirt',
                },
                {
                    txt:'하의',
                    type:'round',
                    width:8,
                    height:8,
                    iconSize:8,
                    fontSize:2,
                    ifBorder:false,
                    url:'./1',
                    icon:'columns',
                },
                {
                    txt:'아우터',
                    type:'round',
                    width:8,
                    height:8,
                    iconSize:8,
                    fontSize:2,
                    ifBorder:false,
                    url:'./1',
                    icon:'columns',
                },
                {
                    txt:'한벌',
                    type:'round',
                    width:8,
                    height:8,
                    iconSize:8,
                    fontSize:2,
                    ifBorder:false,
                    url:'./1',
                    icon:'ring',
                },
            ],
        }
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
    width:94%;
    padding-top:1rem;
    text-align:left; 
    display:block;
    color:#dadada;
    font-family: 'NanumBarunGothic';
    margin:1rem auto;
}
h1 {
    margin:1rem auto;
    font-size:5rem;
    font-style:normal;
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