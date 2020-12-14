<template>
  <div id="main-page">

    <index-header v-if="state === 1"/>
    <index-body/>
    
  </div>
</template>

<script>
import IndexBody from './components/IndexBody.vue'
import IndexHeader from './components/IndexHeader.vue'

export default {
    name:'MainPage',
    components:{
        IndexHeader,
        IndexBody,
    },
    data(){
      return{
        state:0
      }
    },
}
</script>

<style>

</style>