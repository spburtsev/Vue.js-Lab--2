<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Default Selection</router-link></li>
        <li><router-link to="/custom">Custom Selection</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  box-shadow: #e9e8e8 0px 4px 4px;
}

nav {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration: none;
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active {
  color: rgb(0, 45, 247);
  border-color: #e9e8e8;
  border-radius: 4px;
  background-color: #e9e8e8;
}
a.router-link-active {
  color: rgb(0, 45, 247);
}
</style>