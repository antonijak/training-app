<template>
  <button :type="submit? 'submit' : 'button'" class="c-button" @click="$emit('click')">
      <slot/>
  </button>
</template>

<script>
export default {
  name: "CButton",
  props: {
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
}
</style>