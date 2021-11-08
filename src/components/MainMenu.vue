/* eslint-disable prettier/prettier */
<template>
  <div class="main-menu">
    <h1 class="main-menu__title">Train</h1>
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
  background-color: $menu-background;
  height: 4.5rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  padding: 0 1.5rem;
  z-index: 1;

  &__title {
    display: none;

    @media (min-width: 768px) {
      display: block;
      color: white;
    }
  }

  @media (min-width: 768px) {
    position: static;
    justify-content: space-between;
    height: fit-content;
    align-items: center;
    padding-right: 0;
  }

  .links {
    padding: 0;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    margin: 0;

    @media (min-width: 768px) {
      width: fit-content;
      flex-direction: row;
    
    }

    .link {
      list-style: none;
      text-decoration: none;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 0.7rem;
      color: rgb(103, 103, 114);
      transition: color 0.2s linear;

      @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        padding: 1rem 0.75rem;
        color: white;
        text-transform: uppercase;
       

        &:last-child {
          padding-right: 2.25rem;
        }

        &:hover {
          background-color: rgba(255, 255, 255, 0.942);
          color: $primary-text;
        }
      }

      .icon {
        font-size: 1.25rem;
        @media (min-width: 768px) {
          display: none;
        }
      }

      .title {
        display: none;
        margin-top: 0.5rem;
        letter-spacing: 0.5px;

        @media (min-width: 768px) {
          margin-top: 0;
          font-size: 0.9rem;
          display: block;
           letter-spacing: 1px;
        }
      }

      &.router-link-exact-active.router-link-active {
        color: white;

        @media (min-width: 768px) {
          background-color: white;
          color: $primary-text;
        }

        .title {
          display: block;
        }
      }
    }
  }
}
</style>
