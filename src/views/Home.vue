<template>
  <div class="home">
    <h2 class="heading">Hello</h2>
    <time>{{ today }}</time>

    <div class="home__image">
      <ul class="workouts">
        <router-link to="/workout/legs" class="workout" role="list">
          <i :class="'icon fas fa-check-double'"></i>
          Legs
        </router-link>

        <router-link to="/workout/ub" class="workout" role="list">
          <i :class="'icon fas fa-hand-paper'"></i>
          Arms
        </router-link>

        <router-link to="/workout/cardio" class="workout" role="list">
          <i :class="'icon fas fa-walking'"></i>
          Cardio
        </router-link>
      </ul>
    </div>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: 4.5rem;
  height: 90vh;

  @media (min-width: 768px) {
    margin-bottom: 0;
    min-height: 100vh;
    justify-content: space-between;
    background-image: url("../assets/shoulder.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .heading {
      display: none;
      margin-top: 3rem;
    }
  }

  &__image {
    @media (min-width: 768px) {
      height: 95vh;
      width: 100%;
      background-size: cover;
      padding-top: 3rem;
    }
  }

  time {
    color: rgb(65, 65, 71);
    text-align: center;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
      margin-top: 3rem;
    //  background: rgba(255, 255, 255, 0.912);
      padding: 3rem 1.5rem;
      margin-top: 0;
    }
  }

  .workouts {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;

    @media (min-width: 768px) {
      height: fit-content;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .workout {
      list-style: none;
      text-decoration: none;
      padding: 1.5rem;
      width: 100%;
      text-align: left;
      color: $primary-text;
      font-size: 1.1rem;
      border-bottom: 1px solid $main-border;
      margin-bottom: 1px;
      height: 30%;
      display: flex;
      align-items: center;
      transition: all 0.2s linear;

      @media (min-width: 768px) {
        width: fit-content;
        height: fit-content;
        border: 1px solid $main-border;
        padding: 1.5rem 2rem;
        border-radius: 5px;
        margin-left: 1.5rem;
        min-width: 10rem;
        justify-content: center;
        color: white;
      background: rgba(255, 255, 255, 0.132);
      }

      &:first-child {
        border-top: 1px solid $main-border;
        @media (min-width: 768px) {
          margin-left: 0;
        }
      }

      &:hover {
        cursor: pointer;
        color: gray;
        transform: scale(1.1);
        background-color: white;
      }

      &:active {
        background: gray;
      }

      .icon {
        font-size: 0.9rem;
        margin-right: 0.75rem;
        opacity: 0.7;
      }
    }
  }
}
</style>
