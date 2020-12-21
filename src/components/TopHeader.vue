<template>
  <div class="top-header">
    <div class="date">
        <div class="datebox">{{sDate}}</div>
        <div class="times">{{sTime}}</div>
    </div>
    <!-- <weather/> -->
  </div>
</template>

<script>
//import Weather from './Weather.vue';


export default {
    name:'TopHeader',
    components:{
       // Weather
    },
    created() {
        setInterval(this.getNow, 1000);
    },
    methods: {
        getNow: function() {
            const today = new Date();
            const Numday = Object.freeze({
                0:'Sunday', 
                1:'Monday',
                2:'Tuesday',
                3:'Wednesday',
                4:'Thursday',
                5:'Friday',
                6:'Saturday'})
            const NumMonth = Object.freeze({
                1:'January', 
                2:'February',
                3:'March',
                4:'April',
                5:'May',
                6:'June',
                7:'July',
                8:'August',
                9:'September',
                10:'October',
                11:'November',
                12:'December',})
            this.sDate = Numday[today.getDay()]+' '+NumMonth[today.getMonth() + 1]+' '+today.getDate()

            var hour = today.getHours()
            let ampm
            if(hour >= 12){
                if(hour !== 12)
                    hour -= 12
                ampm = "PM"
            }
            else
                ampm = "AM"
            hour = hour < 10 ? "0" + hour : hour
            let minute = today.getMinutes() < 10? "0" + today.getMinutes() : today.getMinutes()

            this.sTime = hour+':'+minute +' '+ampm
        }
    },
    data(){
        return{
            sDate:"",
            sTime:"",
            time:Number
        }
    }
}
</script>

<style scoped>
.top-header {
    width:95%;
    overflow:visible;
    display:flex;
    padding-left:3rem;
    margin-right:0;
    margin-top:1rem;
}
.date{
    color:#dadada;
    padding-left:2rm;
    display:flex;
    align-items: flex-start;
    flex-direction: column;
    font-family: 'NanumBarunGothic';
}
.datebox{
    padding-left:0.5rem;
    color:inherit;
    font-size:3rem;
    font-family: inherit;
}
.times{

    font-size:8rem;
    color:inherit;
    font-family: inherit;
}
</style>