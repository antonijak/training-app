<template>
  <!-------------------------- S T E P -------------------------->
  <li class="step" :class="{ completed }">
    <!-------------------------- I M A G E -------------------------->
    <img class="image" :src="step.img" />

    <!-------------------------- T I T L E -------------------------->
    <div class="step__text">
      <div class="step__info">
        <div class="step__info__heading">
          <h3 class="title">
            {{ step.title }}
          </h3>
        </div>

        <!-------------------------- D E T A I L S-------------------------->
        <div v-if="step.break || step.weight" class="step__info__details">
          <!-------------------------- B R E A K -------------------------->
          <div v-if="step.break" class="break">
            <i :class="'icon far fa-pause-circle'"></i> {{ step.break }} sec
          </div>

          <!-------------------------- W E I G H T -------------------------->
          <div v-if="step.weight" class="weight">
            <i :class="'icon fas fa-weight-hanging'"></i>
            {{ step.weight }} kg
          </div>
        </div>

        <!-------------------------- D E S C R I P T I O N-------------------------->

        <p class="step__info__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
          tellus mattis, elementum sapien eleifend, aliquam leo. Sed ut ante
          dui. Etiam dignissim risus non pharetra mollis.
        </p>
      </div>

      <!-------------------------- R E P S -------------------------->
      <div v-if="step.set.rep" class="step__reps">
        <!-- required -->
        <label v-for="index in step.set.req" :key="index + 'req'" class="set">
          <p v-if="step.set.rep > 1" class="number">{{ step.set.rep }}</p>
          <p v-else class="number">{{ step.set.time }}</p>

          <input
            type="checkbox"
            @click="(e) => startBreak(e, step, index, index === step.set.req)"
          />
        </label>

        <!-- optional -->
        <label
          v-for="index in step.set.opt"
          :key="index + 'opt'"
          class="set-opt"
          :for="step.set.req + index"
        >
          <p v-if="step.set.rep > 1" class="number">{{ step.set.rep }}</p>
          <p v-else class="number">{{ step.set.time }}</p>

          <input
            type="checkbox"
            @click="(e) => startBreak(e, step, step.set.req + index, false)"
            :id="step.set.req + index"
          />
        </label>
      </div>

      <!-------------------------- T I M E -------------------------->
      <div v-else class="step__reps">
        <label class="set">
          {{ step.set.time }}
          <input type="checkbox" @click="complete(step)" />
        </label>

        <label
          v-for="index in step.set.opt"
          :key="index + 'opt'"
          class="set-opt"
        >
          {{ step.set.rep }}
          <input type="checkbox" @click="complete(step)" />
        </label>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "WorkoutStep",
  props: {
    step: Object,
    set: Object,
    visibleTimer: String,
  },
  data() {
    return {
      completed: false,
    };
  },
  methods: {
    startBreak(event, step, set, isLast) {
      this.$emit("start", { step, set, start: event.target.checked });
      // if it is the last required set, mark completed
      if (isLast) {
        this.complete(step);
      }
    },
    complete(step) {
      this.completed = !this.completed;
      this.$emit("completed", { completed: this.completed, step });
    },
  },
};
</script>

<style scoped lang="scss">
.step {
  list-style: none;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  margin: 1.5rem;
  border-radius: 10px;
  background-color: rgb(60, 58, 65);

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    height: 30vh;
    background-color: white;
    border: 1px solid $main-border;
    color: $primary-text;
  }

  &.completed {
    &:before {
      width: 100%;
      height: 3rem;
      border-radius: 10px;
      position: absolute;
      left: 0;
      top: 0;
      background-color: rgba(63, 63, 63, 0.899);
      z-index: 1;
      content: "";
      display: flex;
      text-align: center;
      padding: 4rem 1.5rem;
      font-size: 3rem;
      font-style: 600;
      color: $green-icon;

      @media (min-width: 768px) {
        background-color: rgba(255, 255, 255, 0.721);
        width: 27%;
        height: 100%;
        border-radius: 0;
        font-size: 2.5rem;
      }
    }

    &:after {
    }
  }

  .image {
    width: 100%;
    height: 10.1rem;
    object-fit: cover;
    opacity: 0.7;
    background-color: rgb(37, 37, 40);

    @media (min-width: 768px) {
      width: 30%;
      height: 100%;
      opacity: 1;
    }
  }

  &__text {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(70% - 1.5rem);
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .step__info {
      &__heading {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 0.75rem 1rem 0;

        @media (min-width: 768px) {
          padding: 0.75rem 1rem 1rem 0;
        }

        .title {
          width: fit-content;
          font-size: 1.75rem;
          font-family: Urbanist, sans-serif;
          font-weight: 500;

          @media (min-width: 768px) {
            font-size: 1.25rem;
          }
        }
      }

      &__description {
        padding: 1rem;
        display: block;
        width: 100%;
        color: $secondary-text;

        @media (min-width: 768px) {
          padding: 0;
          width: calc(100% - 1rem);
        }
      }

      &__details {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
        color: rgb(194, 195, 201);
        font-size: 0.9rem;
        padding: 0.25rem 1rem 0;
        font-weight: normal;

        @media (min-width: 768px) {
          padding: 0 0 1rem;
          width: calc(100% - 1rem);
          justify-content: flex-start;
          color: $secondary-text;
          margin-bottom: 0;
        }

        .break {
          width: fit-content;
          margin-right: 1rem;
        }

        .weight {
          display: flex;
          width: fit-content;
          align-items: center;

          .icon {
            font-size: 0.8rem;
            margin-right: 0.3rem;
          }
        }

        .icon {
          margin-right: 0.25rem;
        }
      }
    }
  }

  &__reps {
    width: 100%;

    //   border-top: 1px solid rgb(80, 78, 84);
    background-color: rgb(66, 64, 72);

    padding: 1.5rem 1rem;

    @media (min-width: 768px) {
      background-color: white;
      margin-left: 0;
      height: fit-content;
      display: flex;
      align-items: flex-end;
    }

    .set,
    .set-opt {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 1.5rem;
      font-weight: 500;
      font-size: 1.1rem;
      width: 100%;

      @media (min-width: 768px) {
        flex-direction: row-reverse;
        justify-content: flex-start;
        width: 100%;
      }

      &:first-child {
        margin-top: 0;
      }
      &:hover {
        cursor: pointer;
      }
      .number {
        display: block;
        height: 1.5rem;
      }

      input {
        margin-left: 0.75rem;
        visibility: hidden;
        position: relative;
        overflow: hidden;
        height: 1.25rem;
        width: 1.25rem;

        @media (min-width: 768px) {
          margin-right: 0.5rem;
          margin-left: 0;
        }

        &:hover {
          cursor: pointer;
        }

        &:before {
          visibility: visible;
          content: "";
          height: 1rem;
          width: 1rem;
          // border: 1px solid white;
          background-color: white;
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 3px;

          @media (min-width: 768px) {
            border: 1px solid $input-border;
          }
        }

        &:checked:before {
          border-color: rgb(13, 99, 40);
        }

        &:checked:after {
          visibility: visible;
          content: "\2714";
          height: 1rem;
          width: 1rem;
          position: absolute;
          left: 0;
          background-color: rgb(66, 64, 72);
          color: white;
          font-size: 1rem;
          line-height: 1rem;
          display: block;
          top: 0;
          text-align: center;
          height: 18px;
          width: 18px;
          padding-top: 2px;
          color: $green-icon;

          @media (min-width: 768px) {
            background-color: white;
          }
        }
      }
    }

    .set-opt {
      color: gray;
      z-index: 10;
    }
  }
}
</style>
