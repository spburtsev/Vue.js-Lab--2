<template>
  <section class="list-selection-wrapper">
    <select
      id="breedsSelection"
      multiple="true"
      v-bind:size="breeds.length"
      @change="onBreedSelect"
    >
      <option v-for="breed in breeds" v-bind:key="breed" :value="breed">
        {{ breed }}
      </option>
    </select>
    <selected-breeds :breeds="selectedBreeds" />
  </section>
</template>

<script>
import { fetchBreeds } from "../lib/breeds";
import SelectedBreeds from "../components/SelectedBreeds.vue";

export default {
  name: "ListSelection",
  data() {
    return {
      breeds: [],
      selectedBreeds: [],
    };
  },
  methods: {
    async loadBreeds() {
      this.breeds = await fetchBreeds();
    },
    onBreedSelect(event) {
      this.selectedBreeds = [...event.target.options]
        .filter((option) => option.selected)
        .map((option) => option.value);
    },
  },
  components: {
    SelectedBreeds,
  },
  created() {
    this.loadBreeds();
  },
};
</script>

<style scoped>
.list-selection-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  grid-template-areas: "breeds-selection selected-breeds";
}

.list-selection-wrapper select {
  grid-area: breeds-selection;
  padding: 4rem;
  margin: 4rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.list-selection-wrapper ul {
  grid-area: selected-breeds;
  padding: 4rem;
  margin: 4rem;
}
</style>