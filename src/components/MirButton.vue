<template>
  <div v-if="info.btn.type === 'mir'" class="btn-base btn-mir">
    {{info.btn.txt}}
  </div>
  <div v-else-if="info.btn.type === 'round'" class="btn-text">
    <div class="btn-base btn-round mir-icon">
      <font-awesome-icon class="mir-icon" :icon="info.btn.icon"/>
    </div>
    {{info.btn.txt}}
  </div>
  <div v-else-if="info.btn.type === 'icon'" class="mir-icon btn-base btn-round">
    <font-awesome-icon :icon="info.btn.icon"/>
  </div>
  <div v-else>
  </div>
</template>

<script>
export default {
  name: 'mir-button',
  props:{
    info:Object,
  },
  
  methods:{
      click(){}
  }
}
</script>

<style scoped>
.mir-icon{
    font-size:6rem;
    justify-content: center;
    text-align: center;
    margin:auto;
}
.btn-mir {           
    font-family: 'NanumBarunGothic';
    width:16rem;
    height:9rem;
    display:inline-flex;
    flex-direction: column;
    font-size:3rem;
    font-weight:bold;
    padding:0.5rem;
    margin:1rem 3rem 0;
    padding:1.5rem;
}
.btn-text {
    font-family:'NanumBarunGothic';
    font-size:3rem;
    margin:1rem 4rem 0;
    text-align:center;  
    display:inline-flex;
    color:#dadada;
    padding:0.5rem;
    flex-direction: column;
    justify-content: center;
    vertical-align: middle;
    outline:none;
}
.btn-base{
    display:inline-flex;
    text-align:center;  
    border-radius:0.7rem;
    border:0.2rem solid #dadada;
    justify-content: center;
    vertical-align: middle;
    color:#dadada;
    margin:1rem auto 1rem auto; 
    padding:2rem;
    outline:none;
    box-shadow:0 0 1rem #e6e6e6; 
}
.btn-round {       
    font-family: 'NanumBarunGothic';
    width:9rem;
    height:9rem;
    border-radius:100%;
    font-size:6rem;
}
</style>
