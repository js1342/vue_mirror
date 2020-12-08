<template>
  <div class="grid-menubar">
    <div class="grid-menubox grid-seperate">
        <div class="grid-menuitem">코디 보기</div>
    </div>
    <div class="grid-menubox grid-seperate">  
        <div class="grid-menuitem">상의</div>
    </div>
    <div class="grid-menubox grid-seperate">
        <div class="grid-menuitem">하의</div>
    </div>
    <div class="grid-menubox">
        <div class="grid-menuitem">악세사리</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Menubar',
}
</script>

<style scoped>
.grid-menubar{
    width:100%;
    display:grid;
    margin-top:100px;
    grid-template-columns:repeat(4,25%);
}
.grid-menubox{
    display:inline-flex;
    margin:5px;
    justify-content: center;
    padding:0 1rem;
}
.grid-menuitem{
    width:90%;
    height:100%;
    display:inline-flex;
    justify-content: center;
    margin:0 auto;
    color:#dadada;
    font-size:3rem;
    font-family:'NanumBarunGothic';
    padding:1rem;
    border-radius: 0.5rem;
}
.grid-seperate{
    border-right:4px solid #dadada;
}
.grid-menuitem:hover{
    display:inline-flex;
    text-align:center;
    background-color: #111;
}
</style>
