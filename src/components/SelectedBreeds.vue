<template>
  <div class="breeds-list-wrapper">
    <h1 v-if="title">{{ title }}</h1>
    <ul :class="classes">
      <li v-for="breed in breeds" v-bind:key="breed">
        {{ breed }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SelectedBreeds",
  props: {
    breeds: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    classes: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style scoped>
.breeds-list-wrapper {
  display: block;
  text-align: left;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.breeds-list-wrapper ul {
  list-style: none;
}
.breeds-list-wrapper h1 {
  margin-top: -2rem;
  margin-left: -2rem;
}
</style>