<template>
  <div class="workout">
    <h2 class="heading">Workout {{ type }}</h2>

    <ul class="wo">
        <li v-for="step in workout" :key="step.title" class="step">
            <h3 class="title">
               {{ step.title }}
            </h3>

             <h4 class="time">
                 Break 
                 <span><i :class="'icon fas fa-clock'"></i> {{step.break}} sec</span>
            </h4>

            <label v-for="index in step.set.req" :key="index" class="set">
               {{step.set.rep}} <input type="checkbox"/> 
            </label>

            <label v-for="index in step.set.opt" :key="index" class="set-opt">
               {{step.set.rep}} <input type="checkbox"/> 
            </label>

            <div v-if="timerVisible" class="timer">
                {{time}}
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Workout",
  created() {
    this.type = this.$route.params.type;
    this.workout = this[this.type];
  },
  data() {
    return {
      timerVisible: true,
      time: 0,
      type: "legs",
      legs: [
          {
              title: "Hack squat",
              set: {
                  req: 3,
                  opt: 1,
                  rep: 8
              },
              weight: 0,
              break: 60
          },
          {
              title: "Hack squat",
              set: {
                  req: 3,
                  opt: 1,
                  rep: 8
              },
              weight: 0,
                break: 60
          },
          {
              title: "Hack squat",
              set: {
                  req: 3,
                  opt: 1,
                  rep: 8
              },
              weight: 0
          }
      ],
      workout: null
    };
  },
};
</script>

<style scoped lang="scss">
.workout {
    .wo {
        padding: 0;
        color: white;

        .step {
              list-style: none;
              padding: 1.5rem;
              padding-bottom: 3rem;
              background-color: rgb(52, 52, 58);
              position: relative;

              &:nth-child(0n + 2){
                background-color: transparent;

                .time {
                    background: rgb(52, 52, 58);
                }
            }

            .title {
                margin-bottom: .75rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .time {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-weight: normal;
                    font-size: .9rem;
                    margin-bottom: 1.5rem;
                    background-color: rgb(59, 59, 66);
                    padding: .25rem .5rem;
                    color: black;
                    border-radius: 3px;

                    .icon {
                        margin-right: .25rem;
                    }
            }

            .timer {
                position: absolute;
                top: calc(50% - 2.5rem);
                left: 1.5rem;
                border: 3px solid white;
                border-radius: 50%;
                width: 5rem;
                height: 5rem;
                display: flex;
                justify-content: center;
                align-items: center;
            }



            .set, .set-opt {
                display: flex;
                height: 2rem;
                justify-content: flex-end;
                align-items: center;
                padding: 1.5rem 0;
                width: 100%;
                font-weight: bold;
                font-size: 1.1rem;

                input {
                    margin-left: .75rem;
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

                    &:checked:after {
                        visibility: visible;
                        content: "\2715";
                        height: 1rem;
                        width: 1rem;
                        position: absolute;
                        left: 1px;
                        background-color: red;
                        color: white;
                        font-size: 1rem;
                        line-height: .9rem;
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
