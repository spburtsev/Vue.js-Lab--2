<template>
  <main-header />
  <main>
    <router-view />
  </main>
</template>

<script>
import MainHeader from "./components/Layout/MainHeader.vue";

export default {
  name: "App",
  components: {
    MainHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
main {
  margin-top: 40px;
  min-height: calc(100vh - 5rem);
}
</style>
