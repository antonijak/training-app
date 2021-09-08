/* eslint-disable prettier/prettier */
<template>
  <div class="main-menu">
    <ul class="links">
      <router-link
        v-for="item in links"
        :to="item.link"
        role="list"
        :key="item.link"
        class="link"
      >
        <i :class="'icon fas fa-' + item.icon"></i>

        <span class="title">{{ item.title }}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  data() {
    return {
      links: [
        {
          title: "Home",
          link: "/",
          icon: "dumbbell",
        },
        {
          title: "Stats",
          link: "/stats",
          icon: "chart-pie",
        },
        {
          title: "New",
          link: "/new",
          icon: "pen",
        },
        {
          title: "Info",
          link: "/info",
          icon: "info-circle",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.main-menu {
  background-color: rgb(15, 15, 17);
  height: 4.5rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  padding: 0 1.5rem;

  .links {
    padding: 0;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    margin: 0;

    .link {
      list-style: none;
      text-decoration: none;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 0.7rem;
      color: rgb(60, 60, 66);

      .icon {
        font-size: 1.25rem;
      }

      .title {
        display: none;
        margin-top: .5rem;
        letter-spacing: .5px;
      }

      &.router-link-exact-active.router-link-active {
        color: white;

        .title {
          display: block;
        }
      }
    }
  }
}
</style>
