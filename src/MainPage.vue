<template>
  <div id="main-page">
    <index-header/>
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
        IndexBody
    }
}
</script>

<style>

</style>