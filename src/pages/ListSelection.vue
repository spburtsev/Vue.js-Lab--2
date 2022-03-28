<template>
  <div>List Selection page</div>
  <!-- TODO: populate the selection with fetched breeds -->
  <select />
  <selected-breeds :breeds="selectedBreeds" />
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
  },
  components: {
    SelectedBreeds,
  },
  created() {
    this.loadBreeds();
  },
};
</script>

<style>
</style>