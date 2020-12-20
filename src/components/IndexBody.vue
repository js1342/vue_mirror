<template>
    <div class="container">
        <div v-if="isSignIn">
            <div class="greeting">
                <h1>안녕하세요? {{userName}} 님</h1>
                <br>
                <mir-button class="signout" @idSelect="signOut" :info="signOutBtn"/>
            </div>
            <div class="mainbox">
                <vertical-menu style="margin-top:1rem;" @v-menu-selected="raiseEvent" :identifier="'mainMenu'" :btns="VMenu"/>
            </div> 
        </div>
        <div v-else class="greeting">
            <mir-button @idSelect="gLogin" :info="btn"/>           
        </div>
    </div>
</template>

<script>
import MirButton from './MirButton.vue'
import VerticalMenu from './VerticalMenu.vue'
import { Auth } from 'aws-amplify'
import { mapGetters } from 'vuex';

export default {
    name:"IndexBody",
    components:{
        VerticalMenu,
        MirButton
    },
    methods:{
        async gLogin(){
            await Auth.federatedSignIn({ provider: 'Google' })
            .then(res => {
                console.log(res);
                this.$emit("login",Auth.currentAuthenticatedUser());
                this.$store.commit('Account/userSignInDone',Auth.currentAuthenticatedUser())
            })
        },
        raiseEvent(num){
            this.$emit('menuSel', num)
        },
        async signOut(){
            await Auth.signOut()
        }
    },
    computed:{
        ...mapGetters({
            userName:'account/userName',
            isSignIn:'account/isSignIn'
        })
    },
    data(){
        return {
            btn:{
                txt:'',
                icon:['fab','google'],
                type:'mir-icon',
                width:10,
                height:6,
                fontSize:5,
            },
            registerBtn:{
                txt:'',
                icon:['fab','google'],
                type:'mir-icon',
                width:4,
                height:4,
                fontSize:2,
            },
            signOutBtn:{
                txt:'로그아웃',
                type:'mir',
                icon:['fab','google'],
                ifBorder:false,
                width:11,
                height:4,
                fontSize:3,
            },
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
                
            ],
        }
    },
}
</script>

<style scoped>
.signout{
    margin:0;
    padding:0;
}
.bottom{
    display:flex;
    margin-top:auto;
    margin-bottom: 4rem;
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
#fixedbutton{
    position:fixed;
    bottom:10%;
    left:10%;
}
</style>