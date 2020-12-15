<template>
  <div id="app">
    <top-header/>
    <index-body @login="login" v-if="page === 0" :token="this.idToken" :userName="this.userInfo" :SigninState="LoggedUser !== null"/>
    <cody-body @menuSel="menuSelected" :selected="this.menu" v-else-if="page === 1"/>
    <camera-page @backHome="changePages" v-else-if="page === 2"/>
    <cody-register-page v-else-if="page === 3"/>
  </div>
</template>

<script>
import CameraPage from './CameraPage.vue'
import TopHeader from './components/TopHeader.vue';
import CodyBody from './components/CodyBody.vue';
import { EventBus } from "./components/util/event-bus"
import CodyRegisterPage from './CodyRegisterPage.vue';
import IndexBody from './components/IndexBody.vue';
import { Auth } from 'aws-amplify'
import Axios from 'axios'
//import { onAuthUIStateChange} from '@aws-amplify/ui-components'

export default {
  name: 'App',
  components: {
    CameraPage,
    TopHeader,
    CodyBody,
    CodyRegisterPage,
    IndexBody,
  },
  data(){
    return {
      LoggedUser:null,
      userInfo:null,
      page :0,
      menu: 0,
    }
  },
  
  methods:{
    changePages(num){
      this.page = num
    },
    menuSelected(id){
      console.log('menu selected')
      this.page = 1
      this.menu = id
    },
    menuChange(obj){
      console.log('selected3: ', obj)
      if(obj['name'] === 'mainMenu'){
        this.page = 1
        this.menu = obj['id']
      }
    },
    async login(user){
      console.log(user)
      this.checkLogin()

    },
    async getUserName(){
      let reqHeader = { headers:{
        'Content-Type':'application/json',
        'Authorization': this.idToken
        }
      }
      Axios.get("https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/user", reqHeader).then(res=>this.userInfo = res)
 
    },
   
    async checkLogin(){
      this.LoggedUser = await Auth.currentAuthenticatedUser() 
      this.getUserName()
    },
    
  },
  computed:{
    accessToken : function(){
      if(this.LoggedUser !== null)
        return this.LoggedUser.signInUserSession.accessToken.jwtToken
      
      return null
    },
    idToken: function(){
      if(this.LoggedUser !== null)
        return this.LoggedUser.signInUserSession.idToken.jwtToken
      
      return null
    }
  },
  created(){
      EventBus.$on('v-menu-selected', this.menuChange)
      
  },
  mounted(){
    this.checkLogin()
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0px;
  background-color: black;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, NanumBarunGothic;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3rem;
}
@font-face {
    font-family: 'NanumBarunGothic';
    font-style: normal;
    font-weight: 400;
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf') format('truetype');
   }
   
@font-face {
    font-family: 'NanumBarunGothic';
    font-style: normal;
    font-weight: 700;
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot');
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.ttf') format('truetype')
}

@font-face {
    font-family: 'NanumBarunGothic';
    font-style: normal;
    font-weight: 300;
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot');
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.ttf') format('truetype');
}

.nanumbarungothic * {
    font-family: 'NanumBarunGothic', sans-serif;
}
</style>
