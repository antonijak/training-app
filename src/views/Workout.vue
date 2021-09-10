<template>
  <div class="workout">
    <h2 class="heading">Workout {{ type }}</h2>

    <ul class="wo">
      <!-------------------------- S T E P -------------------------->
      <li v-for="step in workout" :key="step.title" class="step">
        <!-------------------------- I M A G E -------------------------->
        <img class="image" :src="step.img" />

        <!-------------------------- T I T L E -------------------------->
        <div class="step__heading">
          <h3 class="title">
            {{ step.title }}
          </h3>
        </div>

        <div class="step__details">
          <!-------------------------- B R E A K -------------------------->
          <div v-if="step.break" class="break">
            <i :class="'icon far fa-pause-circle'"></i> {{ step.break }} sec
          </div>

          <!-------------------------- W E I G H T -------------------------->
          <div v-if="step.weight" class="weight">
            <i :class="'icon fas fa-weight-hanging'"></i> {{ step.weight }} kg
          </div>
        </div>

        <!-------------------------- R E P S -------------------------->
        <div v-if="step.set.rep" class="reps">
          <label v-for="index in step.set.req" :key="index + 'req'" class="set">
            <p class="number">{{ step.set.rep }}</p>

            <input type="checkbox" @click="startBreak(step)" />
          </label>

          <label
            v-for="index in step.set.opt"
            :key="index + 'opt'"
            class="set-opt"
          >
            <p class="number">{{ step.set.rep }}</p>

            <input type="checkbox" @click="startBreak(step)" />
          </label>
        </div>

        <div v-else class="reps">
          <label :key="index + 'req'" class="set">
            {{ step.set.time }}
            <input type="checkbox" />
          </label>

          <label
            v-for="index in step.set.opt"
            :key="index + 'opt'"
            class="set-opt"
          >
            {{ step.set.rep }}
            <input type="checkbox" @click="startBreak(step)" />
          </label>
        </div>

        <!-------------------------- T I M E R -------------------------->
        <div v-if="visibleTimer === step.title" class="timer">
          {{ time }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import squat from "../assets/squat.jpeg";
import glute from "../assets/hip-thrust.png";
import lunge from "../assets/lunge.gif";
import legCurl from "../assets/leg-curl.png";
import stair from "../assets/stair.png";
import treadmill from "../assets/treadmill-10.webp";
import roll from "../assets/roll.png";

export default {
  name: "Workout",
  created() {
    this.type = this.$route.params.type;
    this.workout = this[this.type];
  },
  data() {
    return {
      interval: null,
      visibleTimer: "",
      time: 0,
      type: "legs",
      legs: [
        {
          title: "Hack squat",
          set: {
            req: 3,
            opt: 1,
            rep: 8,
          },
          weight: 1,
          break: 90,
          img: squat,
        },
        {
          title: "Hip thrusts",
          set: {
            req: 3,
            opt: 1,
            rep: 12,
          },
          weight: 7.5,
          break: 90,
          img: glute,
        },
        {
          title: "Lunges",
          set: {
            req: 3,
            opt: 0,
            rep: 10,
          },
          weight: 0,
          break: 90,
          img: lunge,
        },
        {
          title: "Seated leg curls",
          set: {
            req: 3,
            opt: 0,
            rep: 12,
          },
          weight: 25,
          break: 90,
          img: legCurl,
        },
        {
          title: "Stair master",
          set: {
            req: 1,
            opt: null,
            time: "10min",
          },
          weight: null,
          break: null,
          img: stair,
        },
        {
          title: "Treadmill",
          set: {
            req: 1,
            opt: null,
            time: "15min",
          },
          weight: null,
          break: null,
          img: treadmill,
        },
        {
          title: "Roll machine or stretch",
          set: {
            req: 1,
            opt: null,
            time: "15min",
          },
          weight: null,
          break: null,
          img: roll,
        },
      ],
      workout: null,
    };
  },
  methods: {
    startBreak(step) {
      this.visibleTimer = step.title;
      this.time = step.break;

      clearInterval(this.interval);
      this.interval = setInterval(this.runTime, 1000);
    },
    runTime() {
      this.time--;

      if (this.time === 0) {
        this.visibleTimer = "";
        clearInterval(this.interval);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.workout {
    margin-bottom: 5rem;

  .heading {
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    margin-bottom: -1.5rem;
  }

  .wo {
    padding: 0;
    color: white;
    

    .step {
      list-style: none;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      margin: 1.5rem;
      border-radius: 12px;
      background-color: rgb(60, 58, 65);
      padding-bottom: 1.5rem;

      .image {
        width: 100%;
        height: 10.1rem;
        object-fit: cover;
        opacity: 0.7;
        background-color: rgb(37, 37, 40);
      }

      &__heading {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 1.5rem;
        padding-top: 0.75rem;

        .title {
          width: fit-content;
          font-size: 1.75rem;
          font-family: Urbanist, sans-serif;
          font-weight: 500;
        }
      }

      &__details {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: .75rem;
        color: rgb(194, 195, 201);
        font-size: 0.9rem;
        padding: 0.25rem 1.5rem;
        font-weight: normal;

        .break {
          width: fit-content;
          margin-right: 1.5rem;
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

      .timer {
        position: fixed;
        top: calc(50% - 5.25rem);
        left: calc(50% - 5.25rem);
        border: 8px solid white;
        border-radius: 50%;
        width: 10.5rem;
        height: 10.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5rem;
        background-color: rgba(10, 145, 75, 0.5);
        z-index: 1;
        transition: all 0.2s linear;
      }

      .reps {
        width: 100%;
        margin: 0 1.5rem;
        border-top: 1px solid gray;
        padding-top: 1rem;
      }

      .set,
      .set-opt {
        display: flex;
        height: 2rem;
        justify-content: flex-end;
        align-items: center;
        padding: 1.5rem 0;
        font-weight: 500;
        font-size: 1.1rem;
        width: 100%;

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

          &:before {
            visibility: visible;
            content: "";
            height: 1rem;
            width: 1rem;
            border: 1px solid white;
            position: absolute;
            left: 0;
            top: 0;
            border-radius: 3px;
          }

          &:checked:before {
            border-color: rgb(13, 99, 40);
          }

          &:checked:after {
            visibility: visible;
            content: "\2715";
            height: 1rem;
            width: 1rem;
            position: absolute;
            left: 1px;
            background-color: rgb(13, 99, 40);
            color: white;
            font-size: 1rem;
            line-height: 0.9rem;
            display: block;
            top: 1px;
            text-align: center;
          }
        }
      }

      .set-opt {
        color: gray;
      }
    }
  }
}
</style>
