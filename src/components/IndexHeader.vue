<template>
  <div class="top-header">
    <div v-if="authState !== 'signedin'">You are signed out.
    <amplify-authenticator>
        <amplify-sign-in header-text="Sign In Page"></amplify-sign-in>

        <amplify-sign-out></amplify-sign-out>
    </amplify-authenticator>
    </div>
    <div v-if="authState === 'signedin' && user">
      <div>Hello, {{user.username}}</div>
    </div>
    <weather/>
  </div>
</template>

<script>
import Weather from './Weather.vue'
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
export default {
  name:'IndexHeader',
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