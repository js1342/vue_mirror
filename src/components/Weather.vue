<template>
  <div class="weather">
    <div class="weather-icon">
      <font-awesome-icon :icon="this.skyState.icon"/>
    </div>
    <div class="weather-text">
        {{this.computedTemp}}℃
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Axios from 'axios'
export default {
  name: 'Weather',
  data:function(){
    return {
      temperature:-11.4,
      token:"Rair%2Fre56eda6xixemOcvSp0bqkhfyaYyKHyrXGoLQFwuHVJKj2ILq4JKc1Ms9wgAxBg0u1W006zWtOZ3uI6Kw%3D%3D",
      api:"http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtNcst?serviceKey=",
      weatherData:null,
      wlog:'',
      icon:'sun',
    }
  },
  computed:{
    weatherSky(){
      return this.weatherData[0].obsrValue
    },
    skyState(){
      let sky_state = {sky:'없음',icon:'sun'}
      if(this.weatherData){
        for(var i=0;i<this.weatherData.length;i++){
          if(this.weatherData[i].category === "PTY"){
            if(this.weatherData[i].obsrValue == 0){
              sky_state.sky = '맑음'
              sky_state.icon='sun'
            }
            else if(this.weatherData[i].obsrValue == 1){
              sky_state.sky = '비'
               sky_state.icon='cloud-showers-heavy'
            }
            else if(this.weatherData[i].obsrValue == 2){
              sky_state.sky = '비&눈'
               sky_state.icon='cloud-rain'
            }
            else if(this.weatherData[i].obsrValue == 3){
              sky_state.sky = '눈'
              sky_state.icon='snowflake'
            }
            else if(this.weatherData[i].obsrValue == 4){
              sky_state.sky = '소나기'
              sky_state.icon='cloud-showers-heavy'
            }
            else{
              sky_state.sky = '빗방울'
              sky_state.icon='cloud-rain'
            }
          }          
        }

      }
      return sky_state
    },
    computedTemp(){
      if(this.weatherData !== null){
        console.log('no')
          for(var i=0;i<this.weatherData.length;i++){
            if(this.weatherData[i].category === "T1H"){
              return this.weatherData[i].obsrValue
            }
          }
      }
      return 0
    },
    getFullTime(){
      var d = new Date(),
      hour = d.getHours(),
      minute = '' + d.getMinutes();
      if (hour >= 1)
        --hour;
      if (hour.length < 2) 
          hour = '0' + hour;
      if (minute.length < 2) 
          minute = '0' + minute
      let base_times = hour + '00'
      return base_times
    },
    getFullDate(){
      var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;

      return [year, month, day].join('');
    },
    
  },
  
  methods:{
    async getWeather(){
      // eslint-disable-next-line no-unused-vars
      let url1="http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=Rair%2Fre56eda6xixemOcvSp0bqkhfyaYyKHyrXGoLQFwuHVJKj2ILq4JKc1Ms9wgAxBg0u1W006zWtOZ3uI6Kw%3D%3D&pageNo=1&numOfRows=10&dataType=XML&base_date=20151201&base_time=0500&nx=1&ny=1"
      // eslint-disable-next-line no-unused-vars
      let url2="http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=Rair%2Fre56eda6xixemOcvSp0bqkhfyaYyKHyrXGoLQFwuHVJKj2ILq4JKc1Ms9wgAxBg0u1W006zWtOZ3uI6Kw%3D%3D&pageNo=1&numOfRows=10&dataType=XML&base_date=20151201&base_time=0500&nx=1&ny=1"
      // eslint-disable-next-line no-unused-vars
      let reqheader = {
        params:{
          pageNo:1,
          numOfRows:20,
          dataType:'JSON',
          base_date:this.getFullDate,
          base_time:this.getFullTime,
          nx:61,    //sac 아트홀, 서울 강남구 삼성동
          ny:125
        }
      }
      let res = await Axios.get(this.api + this.token, reqheader).catch(err=>console.log(err))
      this.wlog = res
      if(res)
        this.weatherData=res.data.response.body.items.item
    },
    
    
  },
  mounted(){
    this.getWeather()
  }
}
</script>

<style scoped>
.weather {
    margin-top:4rem;
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
