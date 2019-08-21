<template>
  <article class="home">
    <header class="has-text-centered header">
      <img :src="require('@/assets/logo.svg')" alt="logo" class="logo" />
      <h1>ENEX DOGS</h1>
    </header>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="field">
              <label
                class="label"
                :style="{color: settings.color, fontFamily: settings.font}"
              >Raça do cachorro</label>
              <div class="control select is-fullwidth">
                <select v-model="selectedDog.type" @change="getDogByType(selectedDog.type)">
                  <option :value="dog" v-for="dog in allDogs" :key="dog">{{dog}}</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label
                class="label"
                :style="{color: settings.color, fontFamily: settings.font}"
              >Nome do cachorro</label>
              <div class="control">
                <input
                  class="input"
                  :style="{color: settings.color, fontFamily: settings.font}"
                  type="text"
                  v-model="selectedDog.name"
                  placeholder="Nome do cachorro: Homer, Bilu, Rex"
                />
              </div>
            </div>
            <div class="field">
              <label
                class="label"
                :style="{color: settings.color, fontFamily: settings.font}"
              >Seu cachorro</label>
              <div class="control">
                <figure class="dog-info">
                  <img class="rounded" :alt="selectedDog.breed" :src="selectedDog.image || require('@/assets/dog.jpg')" />
                  <figcaption
                    class="preview_text"
                    :style="{ color: settings.color, 'font-family': settings.font }"
                  >{{ selectedDog.name || 'Nome do cachorro' }}</figcaption>
                </figure>
              </div>
            </div>
            <button class="button is-info is-fullwidth" :disabled='!selectedDog.image' @click="saveDog(selectedDog); selectedDog = {}">Salvar</button>
          </div>
          <div class="column">
            <figure class="saved-dog" v-for="dog in savedDogs" :key="dog.id">
              <img class="rounded" :src="dog.image" :alt="dog.type" />
              <figcaption :style="{ color: settings.color, 'font-family': settings.font }">
                <p> {{ dog.name }} </p>
                <p class="has-text-grey"> {{ new Date(dog.date).toLocaleString() }} </p>
              </figcaption>
              <a class="button is-danger" @click="deleteDog(dog.id)">Excluir</a>
            </figure>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: mapState({
    settings: state => state.settings,
    allDogs: state => state.allDogs,
    savedDogs: state => state.savedDogs,
    dogImage: state => state.dogImage
  }),
  watch: {
    dogImage(value) {
      this.selectedDog.image = value;
    }
  },
  data() {
    return {
      selectedDog: {}
    };
  },
  methods: {
    ...mapActions(["getAllDogs", "getDogByType", "saveDog", "deleteDog"])
  },
  async mounted() {
    await this.getAllDogs();
  }
};
</script>
<style lang="scss" scoped>
.dog-info, .saved-dog {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1em;
}
.saved-dog, .dog-info {
  img, figcaption {
    margin-right: 1em;
  }
}
.rounded {
  border-radius: 10em;
  width: 100px;
  height: 100px;
}
</style>