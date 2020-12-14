<template>
  <div class="weather">
    <div class="weather-icon">
      <font-awesome-icon icon="sun"/>
    </div>
    <div class="weather-text">
        {{temperature}}℃
    </div>
  </div>
</template>

<script>

export default {
  name: 'Weather',
  data:function(){
    return {
      temperature:36.5
    }
  }
}
</script>

<style scoped>
.weather {
    margin-top:2rem;
    width:15rem;
    height:6rem;
    margin-right:0;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color:#dadada;
}
.weather-icon{
    font-size:5rem;
}
.weather-text{
    text-align: center;
    font-size:3rem;
    height:inherit;
    display:block;
}
</style>
