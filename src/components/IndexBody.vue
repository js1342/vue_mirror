<template>
    <div class="container">
        <mir-button  @idSelect="getCategories" :info="btn"/>
        <div v-if="isSignIn">
            <div class="greeting">
                <h1>안녕하세요? {{userName}} 님</h1>
                <mir-button @idSelect="signOut" :info="btn"/>
            </div>
            <div class="mainbox">
                <vertical-menu @v-menu-selected="raiseEvent" :identifier="'mainMenu'" :btns="VMenu"/>
            </div> 
        </div>
        <div v-else class="greeting">
            <mir-button @idSelect="gLogin" :info="btn"/>
            <mir-button @idSelect="checkUser" :info="btn"/>
            
        </div>

    </div>
</template>

<script>
import MirButton from './MirButton.vue'
import VerticalMenu from './VerticalMenu.vue'
import { Auth } from 'aws-amplify'
import Axios from 'axios'
import { mapGetters } from 'vuex';

export default {
    name:"IndexBody",
    components:{
        VerticalMenu,
        MirButton
    },
    props:{
        userData:undefined,
        token:null
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
        getCategories(){
            Axios.get("https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/categories").then(res=>console.log(res))
            let reqHeader = { headers:{
                'Content-Type':'application/json',
                'Authorization': this.token
                }
            }
            console.log(reqHeader)
            Axios.get("https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/user",reqHeader).then(res=>console.log(res))
            //Axios.get("https://www.naver.com").then(res=>console.log(res))
        },
        async checkUser(){
            console.log('user: ', Auth.currentAuthenticatedUser())
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