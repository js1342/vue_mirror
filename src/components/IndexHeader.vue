<template>
  <div class="top-header">
    <div>
      <button v-on:click="gLogin">google login</button>
      <button v-on:click="checkUser">check</button>
      <button v-on:click="testAxios">axios</button>
      <amplify-sign-out></amplify-sign-out>
    </div>
    <div v-if="authState !== 'signedin'">You are signed out.
      <amplify-authenticator>  
          <amplify-sign-out></amplify-sign-out>
      </amplify-authenticator>
      </div>
    <div v-if="authState === 'signedin' && user">
      <div>Hello, {{user.username}}</div>
      <amplify-sign-out></amplify-sign-out>
    </div>
    <weather/>
  </div>
</template>

<script>
//<amplify-sign-in header-text="Sign In Page">google</amplify-sign-in>
    
import Weather from './Weather.vue'
import { onAuthUIStateChange, AuthState } from '@aws-amplify/ui-components'
import { Auth } from 'aws-amplify'
import Axios from 'axios'
// eslint-disable-next-line no-unused-vars


export default {
  name:'IndexHeader',
  created() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
      if(authState === AuthState.VerifyContact){
        console.log('verifying!')
      }
    })
  },
  data() {
    return {
      user: undefined,
      authState: undefined
    }
  },
  beforeDestroy() {
    return onAuthUIStateChange;
  },
  methods:{
    async gLogin(){
      const res = await Auth.federatedSignIn({ provider: 'Google' })
      console.log(res)
    },
    async checkUser(){
      const user = await Auth.currentAuthenticatedUser()
      console.log('user: ', user)
    },
    testAxios(){
      this.user.signInUserSession
     
      Axios.get('https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/categories')
        .then( res =>{
          console.log( res)
        })
      console.log('finished')
    }
  },
  components:{
    Weather
  }
}
</script>

<style scoped>
.top-header {
    width:100%;
    overflow:visible;
    display:flex;
    margin-top:1rem;
    margin-right:2rem;
}
</style>