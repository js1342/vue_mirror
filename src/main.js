import Vue from 'vue';
import App from './App.vue';
import "../fontAwesomeIcon.js";
import '@aws-amplify/ui-vue'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import {Auth} from 'aws-amplify'
Vue.config.productionTip = false;

let oauth = {
    domain: 'js1342-dev.auth.us-east-2.amazoncognito.com',
    scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
    redirectSignIn: 'http://localhost:4200',
     redirectSignOut: 'http://localhost:4200',
     responseType: 'code',
    options: {
      AdvancedSecurityDataCollectionFlag : false
    }
};

Auth.configure({ 
  oauth: oauth
 })
Amplify.configure(awsconfig)
new Vue({
    el: "#app",
    render: h => h(App),
}).$mount('#app');

