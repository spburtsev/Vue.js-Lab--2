<template>
  <ul class="breeds-list">
    <li v-for="breed in breeds" v-bind:key="breed">
      {{ breed }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "SelectedBreeds",
  props: {
    breeds: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.breeds-list {
  list-style: none;
  display: block;
  text-align: left;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>