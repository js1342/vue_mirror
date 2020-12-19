<template>
    <div class="bottom">
        <menu-bar style="margin:1rem 0" @menu-select="bottomMenuSelected" :focusSelected="false" :menuItems="bottomBar" :selected="this.selected"/>
    </div>
</template>

<script>

import { Auth } from 'aws-amplify'
import { mapGetters } from 'vuex';
import MenuBar from './MenuBar.vue';
//<mir-button class="signout" @idSelect="signOut" :info="signOutBtn"/>
export default {
    name:"BottomBody",
    components: { 
        MenuBar,
    },
    data(){
        return{
            selected:0,
            signOutBtn:{
                txt:'로그아웃',
                type:'mir',        
                ifBorder:false,
                width:11,
                height:4,
                fontSize:3,
            },
            bottomBar:[
                {
                    txt:'홈',
                    type:'icon',
                    url:'./1',
                    icon:'home',
                },
                {
                    txt:'카메라',
                    type:'icon',
                    url:'./1',
                    icon:'camera',
                },
                {
                    txt:'',
                    type:'icon',
                    url:'./1',
                    icon:'plus',
                },
            ],
            
        }
    },
    computed:{
        ...mapGetters({
            ifSignIn:'account/ifSignIn'
        })
    },
    methods:{
        signOut(){
            Auth.signOut()
        },
        bottomMenuSelected(num){
            this.selected = num
            console.log(num)
            let target = num + 1
            if(num == 0)
                target = 0
            
            this.$emit('b-menu',target)
        }
    }

}


</script>

<style scoped>
.bottom{
    overflow: hidden;
    position:fixed;
    bottom:0;

    background-color:#040404;
    width:100%;
    display:flex;
    margin-top:auto;
    justify-content: flex-start;
    flex-direction: row;
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
.text-h3{
    font-size:3rem;
    font-family: inherit;
    text-align: center;
}
#fixedbutton{
    position:fixed;
    bottom:10%;
    left:10%;
}
</style>