<template>
  <div class="top-header">
    <weather/>
  </div>
</template>

<script>
import Weather from './Weather.vue'

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