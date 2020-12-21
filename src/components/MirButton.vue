<template>
  <div
    v-if="this.type === 'mir' || this.type === 'mir-icon'"
    class="btn-base btn-mir"
    :style="{
      width: this.width + 'rem',
      height: this.height + 'rem',
      'font-size': this.fontSize + 'rem',
      border: ifBorder ? '0.2rem solid #dadada' : '0',
      'box-shadow': ifBorder ? '0 0 1rem #e6e6e6' : '0 0 0 0',
    }"
    v-on:click="this.clickEvent"
  >
  <span v-if="this.type === 'mir-icon'">
    <font-awesome-icon :icon="info.icon"/>
  </span>
  <span v-else>
    {{this.txt }}
  </span>
  </div>
  <div
    v-else-if="this.type === 'round'"
    class="btn-text"
    :style="{ 'font-size': this.fontSize + 'rem' }"
  >
    <div
      class="btn-base btn-round mir-icon"
      :style="{
        width: this.width + 'rem',
        height: this.height + 'rem',
        'font-size': this.iconSize + 'rem',
        border: ifBorder ? '0.2rem solid #dadada' : '0',
        'box-shadow': ifBorder ? '0 0 1rem #e6e6e6' : '0',
      }"
      v-on:click="this.clickEvent"
    >
      <font-awesome-icon class="mir-icon" :icon="info.icon" />
    </div>
    {{ this.txt }}
  </div>
  <div v-else />
</template>

<script>
/*<div v-if="info.btn.type === 'mir'" class="btn-base btn-mir">
    {{info.btn.txt}}
  </div>
  <div v-else-if="info.btn.type === 'round'" class="btn-text">
    <div class="btn-base btn-round mir-icon">
      <font-awesome-icon class="mir-icon" :icon="info.btn.icon"/>
    </div>
    {{info.btn.txt}}
  </div>
  <div v-else-if="info.btn.type === 'icon'" class="mir-icon btn-base btn-round">
    <font-awesome-icon :icon="info.btn.icon"/>
  </div>
  <div v-else>
  </div>*/
export default {
  name: "mir-button",
  mounted() {
    if (this.info !== undefined) {
      if ("type" in this.info) this.type = this.info.type;
      if ("width" in this.info) this.width = this.info.width;
      if ("height" in this.info) this.height = this.info.height;
      if ("fontSize" in this.info) this.fontSize = this.info.fontSize;
      if ("ifBorder" in this.info) this.ifBorder = this.info.ifBorder;
      this.txt = this.info.txt;
    }
  },
  props: {
    info: Object,
  },
  data() {
    return {
      txt: String,
      type: "mir",
      width: 16,
      height: 9,
      fontSize: 3,
      iconSize: 8,
      ifBorder: true,
    };
  },
  methods: {
    clickEvent(){
      this.$emit('idSelect',this.$vnode.key)
    },
    setStyle() {
      return "";
    },
  },
};
</script>

<style scoped>
.mir-icon {
  font-size: 6rem;
  justify-content: center;
  text-align: center;
  margin: auto;
}
.btn-mir {
  font-family: "NanumBarunGothic";
  display: inline-flex;
  flex-direction: column;
  font-weight: bold;
  padding: 0.5rem;
  margin: 1rem 3rem 0;
  padding: 1.5rem;
}
.btn-text {
  font-family: "NanumBarunGothic";

  text-align: center;
  display: inline-flex;
  color: #dadada;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;
  outline: none;
}
.btn-base {
  display: inline-flex;
  text-align: center;
  border-radius: 0.7rem;
  justify-content: center;
  vertical-align: middle;
  color: #dadada;
  margin: 1rem auto 1rem auto;
  padding: 2rem;
  outline: none;
}
.btn-round {
  font-family: "NanumBarunGothic";
  border-radius: 100%;
}
</style>
