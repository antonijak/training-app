<template>
  <div id="app">
    <main-menu></main-menu>
    <main>
      <router-view :key="$route.fullpath" />
    </main>

    <p v-if="$route.name === 'Home'" class="copyright">
      Copyright ©2021 Antonija Kasum
    </p>
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
@import url("https://fonts.googleapis.com/css2?family=Urbanist:wght@100;400;500;700&display=swap");

#app {
  font-family: Urbanist, Open Sans, Arial, sans-serif;
  color: $primary-text;
  margin: 0;
  background-color: white;
  min-height: 100vh;
  overflow: hidden;
  padding-bottom: 4rem;

  main {
    min-height: calc(100vh - 4rem);
    @media (min-width: 768px) {
      min-height: 100vh;
    }

    .heading {
      padding: 1.5rem;
      text-align: center;
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 0.5px;
      margin-bottom: -1.5rem;
      color: $primary-text;
      font-size: 0.9rem;
      padding: 0.5rem 1.5rem;
      color: white;
      margin-bottom: 1.5rem;
      background-color: rgb(43, 42, 42);

      @media (min-width: 768px) {
        text-align: left;
      }
    }
  }

  .copyright {
    display: block;
    width: 100%;
    color: white;
    position: fixed;
    bottom: 0;
    font-size: 0.8rem;
    padding: 0.5rem;
    text-align: center;
    background: rgba(0, 0, 0, 0.043);
  }
}
</style>
