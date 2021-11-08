<template>
  <div id="app">
      <main-menu></main-menu>
    <main>
      <router-view :key="$route.fullpath" />
    </main>

  
  </div>
</template>

<script>
import MainMenu from "./components/MainMenu.vue";
export default {
  name: "App",
  components: {
    MainMenu,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
}
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@100;400;500;700&display=swap');

#app {
  font-family: Urbanist, Open Sans, Arial, sans-serif;

  color: $primary-text;
  margin: 0;
  background-color: white;
  min-height: 100vh;
  overflow: hidden;

  main {
    min-height: calc(100vh - 4rem);

    .heading {
      padding: 1.5rem;
      text-align: center;
    }
  }
}
</style>
