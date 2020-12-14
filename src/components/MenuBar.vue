<template>
    <div class="grid-menubar" :style="gridStyle">
        <div class="grid-menubox" v-for="(menuItem, idx) in menuItems" :key="{idx}.idx" :class="{ 'grid-seperate' : idx + 1 !== menuSize }">
            <div class="grid-menuitem" v-on:mouseenter="hoverAction(idx)" v-on:mouseleave="hoverAction(idx)" v-on:click="clickAction(idx)"
            :class="{ 
                'grid-hover' : hovered[idx]? hovered[idx].hover : false, 
                'selected' : idx === selected}">{{menuItem.txt}}</div>
        </div>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
function fillArrayWithNumbers(n) {
    var arr = Array.apply(null, Array(n));
    return arr.map(function (x, i) { return i });
}
function ArrayWithFalse(n) {
    return Array.apply(null, Array(n)).map(function(){return {'hover':false}});
}
export default {
  name: 'Menubar',
  props:{
    selected:{type:Number, default:0},
    menuItems:{type:Array, default:()=>[]}
  },
  computed:{
    menuSize:function(){
        return this.menuItems.length
    },
    gridStyle(){
        return {
            gridTemplateColumns:`repeat(${this.menuSize}, ${Math.floor(100/this.menuSize)}%)`}
        }
     },
    data(){
    return {
        hovered:Array,
    }
    },
  mounted(){
    this.hovered = ArrayWithFalse(this.menuSize);
  },
  methods:{
        hoverAction:function(k){
            this.hovered[k].hover = !this.hovered[k].hover
            //console.log("hovered["+k+"] : " + this.hovered[k])
        },
        clickAction(id){
            this.selected = id;
            this.$emit("menu-select", this.selected)      
        }
  }
}
</script>

<style scoped>
.grid-menubar{
    width:100%;
    display:grid;
    margin-top:100px;

}
.grid-menubox{
    display:inline-flex;
    margin:5px;
    justify-content: center;
    padding:0 1rem;
}
.grid-menuitem{
    width:90%;
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
.grid-hover{
    display:inline-flex;
    text-align:center;
    background-color: #222;
}
.selected{
    display:inline-flex;
    text-align:center;
    background-color: #222;
}
</style>
