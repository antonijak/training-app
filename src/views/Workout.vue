<template>
  <div class="workout">
    <h2 class="heading">Workout {{ type }}</h2>

    <ul class="wo">
      <!-------------------------- S T E P -------------------------->
      <li
        v-for="step in workout"
        :key="step.title"
        class="step"
        :class="{
          completed: completed.some((item) => item.title === step.title),
        }"
      >
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
            <label
              v-for="index in step.set.req"
              :key="index + 'req'"
              class="set"
            >
              <p v-if="step.set.rep > 1" class="number">{{ step.set.rep }}</p>
              <p v-else class="number">{{ step.set.time }}</p>

              <input
                type="checkbox"
                @click="
                  (e) => startBreak(e, step, index, index === step.set.req)
                "
              />
            </label>

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
                @click="(e) => startBreak(e, step, step.set.req + index)"
                :id="step.set.req + index"
              />
            </label>
          </div>

          <div v-else class="step__reps">
            <label class="set">
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
        </div>
      </li>
    </ul>
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
      set: null,
      completed: [],
      time: 0,
      type: "legs",
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
    startBreak(event, step, set, isLast) {
      if (
        !event.target.checked &&
        this.visibleTimer === step.title &&
        this.set === set
      ) {
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
      console.log(isLast);
      if (isLast) {
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
  margin-bottom: 5rem;

  .heading {
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    margin-bottom: -1.5rem;
    color: $primary-text;

    @media(min-width: 768px){
      background-color: rgb(43, 42, 42);
    }
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
          height: 9rem;
          border-radius: 10px;
          position: absolute;
          left: 0;
          top: 0;
          background-color: rgba(63, 63, 63, 0.899);
          z-index: 1;
          content: "COMPLETED";
          display: flex;
          text-align: center;
          padding: 4rem 1.5rem;
          font-size: 3rem;
          font-style: 600;
          color: $green-icon;

          @media(min-width: 768px){
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
  }
}
</style>
