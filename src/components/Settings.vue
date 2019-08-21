<template>
  <div class="settings">
    <div class="box cursor pointer config-box" @click="showColor = !showColor">
      <i class="fa fa-cog"></i>
    </div>
    <div class="box select-color animated faster" :class="showColor ? 'fadeInUp' : 'fadeOutDown' ">
      <h1>Cor da fonte:</h1>
      <hr />
      <Swatches :value="color" @input="changeColor" />
    </div>
  </div>
</template>

<script>
import { Swatches } from "vue-color";

export default {
  props: {
    color: { type: String, default: "#000000" }
  },
  components: {
    Swatches
  },
  data() {
    return {
      showColor: false
    };
  },
  methods: {
    changeColor(value) {
      this.showColor = !this.showColor;
      this.$emit("changeColor", value.hex);
    }
  }
};
</script>

<style scoped lang='scss'>
.settings {
  .config-box {
    width: max-content;
    font-size: 1.5rem;
    position: fixed;
    bottom: 0;
    left: 1em;
  }
  .select-color {
    width: max-content;
    position: fixed;
    top: 10em;
    left: 5em;
  }
}
</style>
