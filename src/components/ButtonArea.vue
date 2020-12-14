<template>
  <div class="button-area" v-if="btns.length">
    <mir-button v-for="(btn,idx) in btns" :key="{idx}.idx" :info="{btn}"/>
  </div>
</template>

<script>
import MirButton from './MirButton.vue'

export default {
  name: 'ButtonArea',
  props:{
    btns: {type: Array, default:()=>[] }
  },
  components: {
    MirButton
  },

}
</script>

<style scoped>
.button-area{
    display: flex;
    margin-top:2rem;
    padding-top:3rem;
    justify-content: center;
    align-items: center;
}

</style>
