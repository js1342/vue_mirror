<template>
  <div>
    <cody-header/>
    <cody-body/>
  </div>
</template>

<script>
import CodyBody from './components/CodyBody.vue'
import CodyHeader from './components/CodyHeader.vue'

export default {
    name:'CodyShowPage',
    components:{
        CodyHeader,
        CodyBody
    }
}
</script>

<style>

</style>