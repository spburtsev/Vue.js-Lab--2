<template>
  <div class="container">
    <div
      v-for="(option, index) in options"
      :key="option.value"
      :class="option.selected && 'selected-option'"
      @click="onOptionSelect(index)"
    >
      {{ option.value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomMultiSelect",
  props: {
    options: {
      type: Array,
      required: true,
    },
    onOptionSelect: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 2rem;
}
.selected-option {
  background-color: rgb(0, 99, 247);
  color: white;
}
.container div {
  border: 1px solid transparent;
}
.container div:hover {
  cursor: pointer;
  border: 1px solid rgb(113, 198, 255);
}
</style>