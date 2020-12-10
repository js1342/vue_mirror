import Vue from 'vue';
import App from './App.vue';
import "../fontAwesomeIcon.js";
import '@aws-amplify/ui-vue'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

Vue.config.productionTip = false;

new Vue({
    el: "#app",
    render: h => h(App),
}).$mount('#app');

