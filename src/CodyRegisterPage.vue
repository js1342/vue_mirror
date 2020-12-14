<template>
   <div class="container">
        <div class="mainbox">
            <menu-bar @menu-select="menuSelected" :menuItems="codyBar"/>
            <register-grid style="margin-top:10rem;"/>
            <register-grid/>
        </div> 
    </div>

</template>

<script>
import MenuBar from './components/MenuBar.vue'
import RegisterGrid from './components/RegisterGrid.vue'

export default {
    components: { 
      MenuBar,
        RegisterGrid,
    },
    name:'CodyRegisterPage',
    data(){
        return{
            state:0,
            codyBar:[
                {
                    txt:'오늘의 코디',
                    type:'txt',
                    url:'./1',
                    icon:'None',
                },
                {
                    txt:'저장하기',
                    type:'txt',
                    url:'./2',
                    icon:'None',
                },
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