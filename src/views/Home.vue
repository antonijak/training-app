<template>
  <div class="home">
    <h2 class="heading">Hello</h2>
    <time>{{ today }}</time>

    <ul class="workouts">
      <router-link to="/workout/legs" class="workout" role="list"
        ><i :class="'icon fas fa-check-double'"></i>Legs</router-link
      >
      <router-link to="/workout/ub" class="workout" role="list"
        ><i :class="'icon fas fa-hand-paper'"></i>Arms</router-link
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
   height: 90vh;

  time {
    color: rgb(65, 65, 71);
    text-align: center;
    margin-bottom: 3rem;
  }

  .workouts {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;

    .workout {
      list-style: none;
      text-decoration: none;
      padding: 1.5rem;
      width: 100%;
      text-align: left;
      color: white;
      font-size: 1.1rem;
      background-color: rgb(21, 21, 22);
      margin-bottom: 1px;
      height: 30%;
      display: flex;
      align-items: center;

      &:hover {
        cursor: pointer;
      }

      &:active {
        background: gray;
      }

      .icon {
        font-size: .9rem;
        margin-right: .75rem;
        opacity: .7;
      }
    }
  }
}
</style>
