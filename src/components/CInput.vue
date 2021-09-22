<template>
  <div class="c-input">
    <label :for="inputId" class="c-input__label">{{label}}</label>
    <input :id="inputId" :type="type" class="c-input__input"/>
  </div>
</template>

<script>
export default {
  name: "CInput",
  props: {
    inputId: String,
    label: String,
    type: String,
  },
};
</script>

<style scoped lang="scss">
.c-input {
    padding: 1rem 0;
    &__label {
        display: block;
         width: 100%;
         margin-bottom: .5rem;
    }

    &__input {
        padding: 1rem;
        width: 100%;
        border-radius: 5px;
    }
}
</style>