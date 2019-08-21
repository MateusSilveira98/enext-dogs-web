<template>
  <article class="home">
    <header class="has-text-centered header">
      <img src="../assets/logo.svg" alt="logo" class="logo" />
      <h1>ENEX DOGS</h1>
    </header>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="field">
              <label class="label" :style="{color: settings.color, fontFamily: settings.font}">Nome do cachorro</label>
              <div class="control">
                <input
                  class="input"
                  :style="{color: settings.color, fontFamily: settings.font}"
                  type="text"
                  placeholder="Nome do cachorro: Homer, Bilu, Rex"
                />
              </div>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </section>
  </article>
</template>
<script>
export default {
  computed: {
    settings() {
      return this.$store.state.settings;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>