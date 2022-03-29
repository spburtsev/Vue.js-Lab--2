<template>
  <custom-multi-select :options="breeds" />
  <selected-breeds :breeds="breeds" />
</template>

<script>
import { fetchBreeds } from "@/lib/breeds";
import SelectedBreeds from "@/components/SelectedBreeds.vue";
import CustomMultiSelect from "@/components/CustomMultiSelect.vue";

export default {
  name: "CustomSelection",
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
    CustomMultiSelect,
  },
  created() {
    this.loadBreeds();
  },
};
</script>

<style scoped>
</style>