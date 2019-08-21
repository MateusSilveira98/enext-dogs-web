<template>
  <div class="settings">
    <div class="box cursor pointer config-box" @click="show = !show">
      <i class="fa fa-cog"></i>
    </div>
    <div
      class="columns box font-config animated faster"
      :class="show ? 'fadeInUp' : 'fadeOutDown' "
    >
      <div class="column">
        <h1>Cor da fonte:</h1>
        <hr />
        <Swatches :value="color" @input="changeColor" />
      </div>
      <div class="column">
        <h1>Tipo da fonte:</h1>
        <hr />
        <div class="select">
          <select :value="font" @input="changeFont($event.target.value)">
            <option value disabled selected>Selecione o tipo da fonte</option>
            <option value="Arial">Arial</option>
            <option value="Roboto">Roboto</option>
            <option value="Courier New">Courier New</option>
            <option value="Times New Roman">Times New Roman</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swatches } from "vue-color";

export default {
  props: {
    color: { type: String, default: "#000000" },
    font: { type: String, default: "Arial" }
  },
  components: {
    Swatches
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    changeColor(value) {
      this.show = !this.show;
      this.$emit("changeColor", value.hex);
    },
    changeFont(value) {
      this.show = !this.show;
      this.$emit("changeFont", value);
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
  .font-config {
    width: max-content;
    position: fixed;
    top: 10em;
    left: 5em;
    z-index: 10;
    .select {
      font-size: 1.2rem;
    }
  }
}
@media (max-width: 480px) {
  .settings {
    .config-box,
    .font-config {
      left: 0;
    }
    .font-config {
      top: 0;
    }
  }
}

@media (max-width: 767px) {
  .config-box,
  .font-config {
    left: 0;
  }
  .font-config {
    top: 0;
  }
}
</style>
