<template>
    <div class="v-box">
        <h3>내 옷장</h3>
        <div class="v-menu" v-if="btns.length">
            <mir-button @idSelect="menuClick(idx)" v-for="(btn,idx) in btns" :key="{idx}.idx" :info="btn" />
        </div>
    </div>
</template>

<script>
import MirButton from './MirButton.vue'
import {EventBus} from './util/event-bus'
export default {
    name:'VerticalMenu',
    components:{
        MirButton
    },
    props:{
        btns:{type:Array, default:()=>[]},
        identifier:{type:String, required:true}
    },
    methods:{
        menuClick(id){
            console.log('v-menu select')
            EventBus.$emit("v-menu-selected", {name:this.identifier, id:id})      
        }
    }
}
</script>

<style scoped>
h3 {
    font-size:2rem;
}
.v-box{
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top:4rem;
    width:15rem;
    margin-right:2rem;
    margin-bottom: 10rem;
    align-self: flex-end;
    display: flex;
    color:#dadada;
}
.v-box > .v-menu{
    border:solid #dadada;
    border-width:0.3rem 0;
    width:100%;
    flex-direction: column;
    justify-content: center;
}
</style>