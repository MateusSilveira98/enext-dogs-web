<template>
  <div id="app" :style="{color: fontColor}">
    <Loading :show="loading"/>
    <router-view/>
    <Settings @changeColor='changeFontColor'/>
  </div>
</template>
<script>
import Loading from '@/components/Loading';
import Settings from "@/components/Settings";

export default {
  components: {
    Loading,
    Settings
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    fontColor() {
      return this.$store.state.fontColor;
    }
  },
  methods: {
    changeFontColor(value) {
      this.$store.dispatch('changeFontColor', value)
    }
  }
}
</script>
<style lang="scss">
@import '@/App.scss';
#app {
  .home,
  .settings {}
}
</style>
