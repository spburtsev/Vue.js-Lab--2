<template>
  <div v-for="option in options" :key="option.className">
    <input
      type="checkbox"
      :id="option.className"
      :value="option.className"
      v-model="option.selected"
    />
    <label :for="option.className">{{ option.name }}</label>
  </div>
</template>

<script>
export default {
  name: "ListStyleEditor",
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.style-editor {
  width: 100%;
  height: 100%;
  font-family: monospace;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 4rem;
  margin: 4rem;
}
</style>