<template>
  <div class="workout">
    <h2 class="heading">Workout {{ type }}</h2>

    <ul class="wo">
      <!-------------------------- S T E P -------------------------->
      <li v-for="step in workout" :key="step.title" class="step">
        <h3 class="title">
          {{ step.title }}
        </h3>

        <!-------------------------- B R E A K -------------------------->
        <h4 v-if="step.break" class="break">
          Break
          <span><i :class="'icon fas fa-clock'"></i> {{ step.break }} sec</span>
        </h4>

        <!-------------------------- I M A G E -------------------------->
        <img class="image" :src="step.img" />

        <!-------------------------- R E P S -------------------------->
        <div class="reps">
          <label v-for="index in step.set.req" :key="index + 'req'" class="set">
            {{ step.set.rep }}
            <input type="checkbox" @click="startBreak(step)" />
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
import treadmill from "../assets/treadmill-10.webp"

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
          weight: 0,
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
            rep: "10min",
          },
          weight: null,
          break: null,
          img: stair
        },
        {
          title: "Treadmill",
          set: {
            req: 1,
            opt: null,
            rep: "15min",
          },
          weight: null,
          break: null,
          img: treadmill
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
  .wo {
    padding: 0;
    color: white;
    margin-bottom: 4.5rem;

    .step {
      list-style: none;
      padding: 1.5rem;
      padding-bottom: 3rem;
      background-color: rgb(52, 52, 58);
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      &:nth-child(even) {
        background-color: transparent;
      }

      .title {
           width: 100%;
        margin-bottom: 0.75rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .break {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: normal;
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
        //  border: 1px solid rgb(194, 195, 201);
        padding: 0.25rem 0;
        color: rgb(194, 195, 201);
        border-radius: 3px;

        .icon {
          margin-right: 0.25rem;
        }
      }

      .image {
        width: 60%;
        height: 10.1rem;
        object-fit: cover;
        opacity: 0.7;
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

      .set,
      .set-opt {
        display: flex;
        height: 2rem;
        justify-content: flex-end;
        align-items: center;
        padding: 1.5rem 0;
        width: 100%;
        font-weight: bold;
        font-size: 1.1rem;

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
        border-top: 1px solid gray;
      }
    }
  }
}
</style>
