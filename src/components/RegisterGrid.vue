<template>
  <div class="grid-img-container">
        <div class="lr"><font-awesome-icon icon="caret-left"/></div>
        <div class="grid-img" style="background-color:#dadada">
        </div>
        <div class="lr"><font-awesome-icon icon="caret-right"/></div>
    </div>
</template>

<script>
export default {
    name:"RegisterGrid",
    data(){
        return{
            imgNum:0
        }
    }
}
</script>

<style scoped>
.grid-img-container{
    width:100%;
    display:grid;
    margin-top:1rem;
    overflow:hidden;
    grid-template-columns:8% 84% 8%;
}
.lr{
    font-size:7rem;
    color: #dadada;
    display:flex;
    margin:0.5rem;
    border-radius:0.4rem;
    background-color: #101010;
    align-items: center;
    flex-direction: column;
    justify-content:center;
    vertical-align:middle;
}
.grid-img{
    width:640px;
    height:480px;
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content:center;
    vertical-align:middle;
    margin:0.5rem auto;
    color:#dadada;
    font-size:4rem;
    font-family:'NanumBarunGothic';
    border-radius: 0.5rem;
}
</style>