<template>
  <ul>
    <li v-for="breed in breeds" v-bind:key="breed.name">
      {{ breed.name }}
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

<style>
</style>