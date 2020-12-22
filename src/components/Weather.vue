<template>
  <div class="weather">
    <div class="weather-icon">
      <font-awesome-icon icon="sun"/>
    </div>
    <div class="weather-text">
        {{temperature}}℃<br>
        {{this.wlog}}
        {{this.skyState.sky}}/
        {{this.skyState.cloud}}
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
      temperature:-1,
      token:"Rair%2Fre56eda6xixemOcvSp0bqkhfyaYyKHyrXGoLQFwuHVJKj2ILq4JKc1Ms9wgAxBg0u1W006zWtOZ3uI6Kw%3D%3D",
      api:"http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=",
      weatherData:null,
      wlog:'',
    }
  },
  computed:{
    skyState(){
      let sky_state = {sky:'없음', cloud:'없음'}
      if(this.weatherData){
        for(var i=0;i<this.weatherData.length;i++){
          if(this.weatherData[i].category === "PTY"){
            if(this.weatherData[i].fcstValue === 0)
              sky_state.sky = '맑음'
            else if(this.weatherData[i].fcstValue === 1)
              sky_state.sky = '비'
            else if(this.weatherData[i].fcstValue === 2)
              sky_state.sky = '비/눈'
            else if(this.weatherData[i].fcstValue === 3)
              sky_state.sky = '눈'
            else if(this.weatherData[i].fcstValue === 4)
              sky_state.sky = '소나기'
            else
              sky_state.sky = '비2'
          }
          else if(this.weatherData[i].category === "SKY"){
            if(this.weatherData[i].fcstValue === 1)
              sky_state.cloud = '맑음'
            else if(this.weatherData[i].fcstValue === 3)
              sky_state.cloud = '구름많음'
            else if(this.weatherData[i].fcstValue === 4)
              sky_state.cloud = '흐림'
            else
              sky_state.cloud = '오류'
          }
        }

      }
      return sky_state
    }
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
          numOfRows:10,
          dataType:'JSON',
          base_date:this.getFullDate(),
          base_time:this.getFullTime(),
          nx:61,    //sac 아트홀, 서울 강남구 삼성동
          ny:125
        }
      }
      let res = await Axios.get(this.api + this.token, reqheader).catch(err=>console.log(err))
      console.log(res)
      this.wlog = res
      this.weatherData='response' in res ? res.response.body.items.item : res.body.items.item
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
    getFullTime(){
      var d = new Date(),
      hour = (d.getHours() + 1),
      minute = '' + d.getMinutes();

      if (hour.length < 2) 
          hour = '0' + hour;
      if (minute.length < 2) 
          minute = '0' + minute;

      return [hour,minute].join('');
    }
  },
  mounted(){
    this.getWeather()
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
