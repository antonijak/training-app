<template>
  <div class="new-workout">
    <h2 class="heading">Create workout</h2>

    <form>
      <c-input label="Workout name" type="text"/>

      <c-button @click="addField">Add field</c-button>

      <div v-for="(field, index) in fields" :key="field + index">{{field}}</div>
    </form>
  </div>
</template>

<script>
import CButton from '../components/CButton.vue';
import CInput from '../components/CInput.vue';
export default {
  components: { CInput, CButton },
  name: "NewWorkout",
  data() {
    return {
      fields: []
    };
  },
  methods: {
    addField(){
      this.fields = [...this.fields, "WIP"];
    }
  }
};
</script>

<style scoped lang="scss">
.new-workout {
  padding: 1.5rem;
}
</style>