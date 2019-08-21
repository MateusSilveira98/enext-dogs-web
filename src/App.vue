<template>
  <div id="app" :style="{color: settings.color, fontFamily: settings.font}">
    <Loading :show="loading"/>
    <router-view/>
    <Settings @changeColor='changeFontColor' @changeFont='changeFontFamily' :color="settings.color" :font="settings.font"/>
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
    settings() {
      return this.$store.state.settings;
    }
  },
  methods: {
    changeFontColor(value) {
      this.$store.dispatch('changeFontColor', value)
    },
    changeFontFamily(value) {
      this.$store.dispatch('changeFontFamily', value)
    }
  }
}
</script>
<style lang="scss">
@import '@/App.scss';
</style>
