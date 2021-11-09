<template>
  <button
    :type="submit ? 'submit' : 'button'"
    class="c-button"
    @click="$emit('click')"
    :class="variant"
    @click.stop="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "CButton",
  props: {
    submit: Boolean,
    variant: String,
    link: String,
  },
  methods: {
    handleClick() {
      if (this.link) {
        this.$router.push(this.link);
      }

      this.$emit("click");
    },
  },
};
</script>

<style scoped lang="scss">
.c-button {
  padding: 1rem;
  background-color: rgb(126, 126, 142);
  color: white;
  border-radius: 5px;
  border: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: Urbanist, Open Sans, Arial, sans-serif;
  transition: all 0.2s linear;
  widows: 100%;

  @media (min-width: 768px) {
    width: fit-content;
  }

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  &.primary {
    background-color: $primary-button;
  }

  &.secondary {
    background-color: white;
    border: 1px solid $button-border;
    color: $secondary-text;
  }
}
</style>
