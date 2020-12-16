import Vue from 'vue';
import App from './App.vue';
import "../fontAwesomeIcon.js";
import '@aws-amplify/ui-vue'
import Amplify from 'aws-amplify'
import awsmobile from './aws-exports'
import store from './store/store'


Vue.config.productionTip = false;
Amplify.configure(awsmobile);

new Vue({
    el: "#app",
    store,
    render: h => h(App),
}).$mount('#app');

