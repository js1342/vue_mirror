<template>
    <div class="grid-img-container">
        <div class="grid-img btn-base">1</div>
        <div class="grid-img btn-base">2</div>
        <div class="grid-img btn-base">3</div>
        <div class="grid-img btn-base">4</div>
        <div class="grid-img btn-base">5</div>
        <div class="grid-img btn-base">6</div>
        <div class="grid-img btn-base">7</div>
        <div class="grid-img btn-base">8</div>
        <div class="grid-img btn-base">9</div>
    </div>
</template>

<script>
export default {
    name:'CodyGrid'
}
</script>

<style>
.grid-img-container{
    width:100%;
    display:grid;
    margin-top:10rem;
    overflow:hidden;
    grid-template-columns:repeat(3,33%);
    grid-template-rows:repeat(3,30rem);
}
.grid-img{
    width:80%;
    height:80%;
    display:inline-flex;
    justify-content: center;
    margin:0 auto;
    color:#dadada;
    font-size:4rem;
    font-family:'NanumBarunGothic';
    padding:1rem;
    border-radius: 0.5rem;
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
    padding:auto;
    outline:none;
    box-shadow:0 0 1rem #e6e6e6; 
}
</style>