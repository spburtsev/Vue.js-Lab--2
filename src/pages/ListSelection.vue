<template>
  <list-style-editor :options="listStyleOptions" />
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
    <selected-breeds
      :breeds="selectedBreeds"
      :title="'Selected items'"
      :classes="listClasses"
    />
  </section>
</template>

<script>
import { fetchBreeds } from "../lib/breeds";
import SelectedBreeds from "../components/SelectedBreeds.vue";
import ListStyleEditor from "../components/ListStyleEditor.vue";

export default {
  name: "ListSelection",
  data() {
    return {
      breeds: [],
      selectedBreeds: [],
      listStyleOptions: [
        {
          name: "Style #1",
          className: "list-style-one",
          selected: true,
        },
        {
          name: "Style #2",
          className: "list-style-two",
          selected: false,
        },
        {
          name: "Style #3",
          className: "list-style-three",
          selected: false,
        },
      ],
    };
  },
  computed: {
    listClasses() {
      return this.listStyleOptions
        .filter((style) => style.selected)
        .reduce((obj, style) => {
          obj[style.className] = true;
          return obj;
        }, {});
    },
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
    ListStyleEditor,
    SelectedBreeds,
  },
  created() {
    this.loadBreeds();
    console.log(this.listClasses);
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
.list-selection-wrapper div {
  grid-area: selected-breeds;
  padding: 4rem;
  margin: 4rem;
}
</style>

<style>
.list-style-one {
  list-style-type: disc;
  background-color: lightblue;
}
.list-style-two {
  font-size: 2rem;
  color: black;
  font-weight: bold;
}
.list-style-three {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 2rem;
}
</style>