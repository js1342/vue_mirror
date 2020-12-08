<template>
    <div class="account-info">
        <div class="btn-base btn-round">
            <font-awesome-icon class="mir-icon" icon='user'/>
        </div>
        <div class="text-h3">{{accessID}}</div>
    </div>
</template>

<script>
export default {
    name:'Account',
    data(){
        return {
            accessID:'thisisID',
            accessToken:'pw'
        }
    },
    methods:{
        login:()=>{}
    }
    
}
</script>

<style scoped>
.account-info {
    margin-left:5rem;
    font-size:3rem;
    float:left;
    display: flex;
    flex-direction: column;
    vertical-align: middle;
    justify-content: center;
    color:#dadada;
    margin-right:2rem;
}
.text-h3{
    font-size:3rem;
    font-family: inherit;
    text-align: center;
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
.mir-icon{
    margin:auto;
}
.btn-round {       
    font-family: 'NanumBarunGothic';
    width:9rem;
    height:9rem;
    border-radius:100%;
    font-size:6rem;
}
</style>