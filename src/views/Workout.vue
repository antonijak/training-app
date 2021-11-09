<template>
  <div class="workout">
    <h2 class="heading">Workout {{ type }}</h2>

    <ul class="wo">
      <!-------------------------- S T E P -------------------------->
      <workout-step
        v-for="step in workout"
        :step="step"
        :key="step.title"
        @start="startBreak"
        @complete="completeStep"
      />

      <!-------------------------- T I M E R -------------------------->
      <div v-if="visibleTimer" class="timer">
        {{ time }}
      </div>
    </ul>

    <div class="buttons">
      <c-button variant="secondary" link="/">
        <p>Back to workouts</p>
      </c-button>

      <c-button variant="primary">
        <p>Save workout</p>
      </c-button>
    </div>
  </div>
</template>

<script>
import squat from "../assets/squat.jpeg";
import mobility from "../assets/mobility.jpeg";
import glute from "../assets/hip-thrust.png";
import lunge from "../assets/lunge.gif";
import legCurl from "../assets/leg-curl.png";
import stair from "../assets/stair.png";
import treadmill from "../assets/treadmill-10.webp";
import roll from "../assets/roll.png";
import chestpr from "../assets/chestpr.jpeg";
import row from "../assets/row.jpeg";
import plank from "../assets/plank.jpeg";
import backex from "../assets/backex.jpeg";
import shoulder from "../assets/shoulder.png";
import core from "../assets/Elasticcore.png";
import WorkoutStep from "../components/WorkoutStep.vue";
import CButton from "../components/CButton.vue";

export default {
  components: { WorkoutStep, CButton },
  name: "Workout",
  created() {
    this.type = this.$route.params.type;
    this.workout = this[this.type];
  },
  data() {
    return {
      interval: null,
      visibleTimer: "",
      set: null,
      completed: [],
      time: 0,
      type: "legs",
      step: null,
      legs: [
        {
          title: "Warmup treadmill",
          set: {
            req: 1,
            opt: 0,
            time: "10min",
          },
          weight: null,
          break: null,
          img: treadmill,
        },
        {
          title: "Mobility",
          set: {
            req: 1,
            opt: 0,
            time: "5min",
          },
          weight: null,
          break: null,
          img: mobility,
        },
        {
          title: "Pendulum squat",
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
      ub: [
        {
          title: "Warmup treadmill",
          set: {
            req: 1,
            opt: 0,
            time: "10min",
          },
          weight: null,
          break: null,
          img: treadmill,
        },
        {
          title: "Mobility",
          set: {
            req: 1,
            opt: 0,
            time: "5min",
          },
          weight: null,
          break: null,
          img: mobility,
        },
        {
          title: "Chest press (or bench press 5kg)",
          set: {
            req: 4,
            opt: 0,
            rep: 8,
          },
          weight: 20,
          break: 90,
          img: chestpr,
        },
        {
          title: "Seated row",
          set: {
            req: 4,
            opt: 0,
            rep: 10,
          },
          weight: 25,
          break: 90,
          img: row,
        },
        {
          title: "Plank",
          set: {
            req: 4,
            opt: null,
            time: "30sec",
            rep: 1,
          },
          weight: null,
          break: 90,
          img: plank,
        },
        {
          title: "Back extension",
          set: {
            req: 3,
            opt: 0,
            rep: 8,
          },
          weight: null,
          break: 90,
          img: backex,
        },
        {
          title: "Shoulder press",
          set: {
            req: 3,
            opt: null,
            rep: 8,
          },
          weight: "bar 15",
          break: 90,
          img: shoulder,
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
      cardio: [
        {
          title: "Warmup treadmill",
          set: {
            req: 1,
            opt: 0,
            time: "10min",
          },
          weight: null,
          break: null,
          img: treadmill,
        },
        {
          title: "Mobility",
          set: {
            req: 1,
            opt: 0,
            time: "5min",
          },
          weight: null,
          break: null,
          img: mobility,
        },
        {
          title: "Elastic core",
          set: {
            req: 3,
            opt: 0,
            rep: 15,
          },
          weight: null,
          break: 90,
          img: core,
        },
        {
          title: "Stair master",
          set: {
            req: 1,
            opt: null,
            time: "4min",
          },
          weight: null,
          break: null,
          img: stair,
        },
        {
          title: "Treadmill",
          set: {
            req: 1,
            opt: 0,
            time: "10min",
          },
          weight: null,
          break: null,
          img: treadmill,
        },
      ],
      workout: null,
    };
  },
  methods: {
    startBreak({ step, set, start }) {
      // toggle show break timer
      if (!start) {
        clearInterval(this.interval);
        this.visibleTimer = "";
        this.set = null;
      } else {
        clearInterval(this.interval);
        this.time = step.break;
        this.visibleTimer = step.title;
        this.set = set;
        this.interval = setInterval(this.runTime, 1000);
      }
    },
    completeStep({ completed, step }) {
      if (completed) {
        this.completed = this.completed.filter(
          (item) => item.title !== step.title
        );
      } else {
        this.completed = [...this.completed, step];
      }
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
  padding-bottom: 1.5rem;
  background-color: white;

  .heading {
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    margin-bottom: -1.5rem;
    color: $primary-text;

    @media (min-width: 768px) {
      background-color: rgb(43, 42, 42);
    }
  }

  .wo {
    padding: 0;
    color: white;
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

    @media (min-width: 1200px) {
      top: 7rem;
      left: 8.5%;
      background-color: rgba(58, 163, 109, 0.9);
      width: 13rem;
      height: 13rem;
    }
  }

  .buttons {
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: flex-end;
    }

    ::v-deep .c-button {
      &:first-child {
        margin-top: 1.5rem;

        @media (min-width: 768px) {
          margin-top: 0;
          margin-right: 1.5rem;
        }
      }
    }
  }
}
</style>
