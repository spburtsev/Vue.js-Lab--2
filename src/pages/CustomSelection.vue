<template>
  <section class="list-selection-wrapper">
    <custom-multi-select
      class="selection"
      :options="selectionOptions"
      :onOptionSelect="onBreedSelect"
    />
    <selected-breeds class="selected-list" :breeds="getSelected()" />
  </section>
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
      selectionOptions: [],
    };
  },
  methods: {
    async loadBreeds() {
      this.breeds = await fetchBreeds();
    },
    onBreedSelect(index) {
      this.selectionOptions[index].selected =
        !this.selectionOptions[index].selected;
    },
    getSelected() {
      return this.selectionOptions
        .filter((option) => option.selected)
        .map((option) => option.value);
    },
  },
  created() {
    this.loadBreeds();
  },
  watch: {
    breeds: {
      handler(newBreeds) {
        this.selectionOptions = newBreeds.map((breed) => {
          return {
            value: breed,
            selected: false,
          };
        });
      },
      deep: true,
    },
  },
  components: {
    SelectedBreeds,
    CustomMultiSelect,
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

.selection {
  grid-area: breeds-selection;
  padding: 4rem;
  margin: 4rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.selected-list {
  grid-area: selected-breeds;
  padding: 4rem;
  margin: 4rem;
}
</style>