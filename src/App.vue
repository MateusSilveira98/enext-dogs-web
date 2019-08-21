<template>
  <div id="app" :style="{color: settings.color, fontFamily: settings.font}">
    <Loading :show="loading" />
    <Notification
      @close="showNotification = $event"
      :open="showNotification"
      :type="messageClass"
      :duration="2500"
      :message="message"
    ></Notification>
    <router-view />
    <Settings
      @changeColor="changeFontColor"
      @changeFont="changeFontFamily"
      :color="settings.color"
      :font="settings.font"
    />
  </div>
</template>
<script>
import Loading from "@/components/Loading";
import Settings from "@/components/Settings";
import Notification from "@/components/Notification";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Loading,
    Settings,
    Notification
  },
  computed: mapState({
    loading: state => state.loading,
    settings: state => state.settings,
    toNotify: state => state.toNotify,
    message: state => state.message,
    messageClass: state => state.messageClass
  }),
  watch: {
    toNotify(newValue) {
      this.showNotification = !newValue;
    }
  },
  data() {
    return {
      showNotification: false
    }
  },
  methods: {
    ...mapActions(["changeFontColor", "changeFontFamily", "getStorageDatas"])
  },
  mounted() {
    this.getStorageDatas();
  }
};
</script>
<style lang="scss">
@import "@/App.scss";
</style>
