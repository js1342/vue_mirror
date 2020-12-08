<template>
  <div class="top-header">
    <account/>
    <weather/>
  </div>
</template>

<script>
import Weather from './Weather.vue'
import Account from './Account.vue'

export default {
  name:'CodyHeader',
  components:{
    Weather,
    Account
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