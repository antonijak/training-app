<template>
  <div class="home">
    <h2 class="heading">Hello</h2>
    <time>{{ today }}</time>

    <ul class="workouts">
      <router-link to="/workout/legs" class="workout" role="list"
        ><i :class="'icon fas fa-socks'"></i>Legs</router-link
      >
      <router-link to="/workout/ub" class="workout" role="list"
        ><i :class="'icon fas fa-hand-rock'"></i>Arms</router-link
      >
      <router-link to="/workout/cardio" class="workout" role="list">
        <i :class="'icon fas fa-walking'"></i> Cardio</router-link
      >
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    today() {
      //  return new Date().getUTCDate() + "." + new Date().getUTCMonth() + "." + new Date().getUTCFullYear()
      return new Date().toDateString();
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: 4.5rem;

  time {
    color: rgb(65, 65, 71);
    text-align: center;
    margin-bottom: 3rem;
  }

  .workouts {
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 4rem;

    .workout {
      list-style: none;
      text-decoration: none;
      padding: 1.5rem;
      width: 100%;
      text-align: left;
      font-weight: 500;
      color: white;
      font-size: 1.1rem;
      background-color: rgb(21, 21, 22);
      margin-bottom: 1px;
      height: 4.5rem;

      &:hover {
        cursor: pointer;
      }

      &:active {
        background: gray;
      }

      .icon {
        font-size: 1.25rem;
        margin-right: 1.5rem;
      }
    }
  }
}
</style>
