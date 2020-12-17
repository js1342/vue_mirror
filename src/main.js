import Vue from 'vue';
import App from './App.vue';
import "../fontAwesomeIcon.js";
import '@aws-amplify/ui-vue'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import store from './store/store'


Vue.config.productionTip = false;
Amplify.configure(awsconfig);

new Vue({
    el: "#app",
    store,
    render: h => h(App),
}).$mount('#app');

