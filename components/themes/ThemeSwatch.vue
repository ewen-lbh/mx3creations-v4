<template>
  <button
    class="ThemeSwatch"
    :class="{ clickable, 'random-iris-dilatation': iris === 'random' }"
    :title="theme.name"
    @click="
      $emit('click', $event)
      if (clickable && iris === 'random') dilateIris()
    "
  >
    <PrimaryColor
      class="PrimaryColor"
      :pose="pose"
      :style="{ borderColor: theme.primary }"
      :i="i"
    ></PrimaryColor>
    <SecondaryColor
      class="SecondaryColor"
      :pose="pose"
      :style="{ backgroundColor: theme.secondary }"
      :i="i"
    ></SecondaryColor>
  </button>
</template>

<script>
import posed from 'vue-pose'
import randomFloat from 'random-float'
import { mapGetters } from 'vuex'

export default {
  components: {
    PrimaryColor: posed.div({
      asleep: {
        opacity: 1,
        borderWidth: '4px',
        height: '36px',
        width: '36px',
        marginLeft: 0,
        marginTop: 0,
        transition: {
          duration: 250 / 2,
          ease: 'easeInOut'
        }
      },
      dilated: {
        opacity: 1,
        borderWidth: '20px',
        height: '0px',
        width: '0px',
        marginLeft: 0,
        marginTop: 0,
        transition: {
          duration: 250 / 2,
          ease: 'easeInOut'
        }
      },
      dead: {
        opacity: 0,
        marginLeft: 0,
        marginTop: 0,
        transition: ({ i }) => ({
          duration: 250 / 2,
          ease: 'easeInOut',
          delay: i * 25
        })
      },
      awake: {
        opacity: 1,
        borderWidth: '7.5px',
        height: '0px',
        width: '0px',
        transition: ({ i }) => ({
          duration: 250 / 2,
          ease: 'easeInOut',
          delay: i * 25 + 10
        })
      }
    }),
    SecondaryColor: posed.div({
      awake: {
        opacity: 1,
        height: '100%',
        width: '100%',
        transition: ({ i }) => ({
          duration: 400 / 2,
          ease: 'easeInOut',
          delay: i * 25 + 100
        })
      },
      asleep: {
        opacity: 1,
        height: 0,
        width: 0,
        transition: ({ i }) => ({
          duration: 200 / 2,
          ease: 'easeInOut'
        })
      },
      dilated: {
        opacity: 1,
        height: 0,
        width: 0,
        transition: ({ i }) => ({
          duration: 200 / 2,
          ease: 'easeInOut'
        })
      },
      dead: {
        opacity: 1,
        height: 0,
        width: 0,
        transition: ({ i }) => ({
          duration: 200 / 2,
          ease: 'easeInOut'
        })
      }
    })
  },
  props: {
    pose: {
      type: String,
      default: 'asleep',
      validate: (pose) => ['dead', 'asleep', 'awake'].includes(pose)
    },
    theme: {
      type: Object,
      default: () => ({ primary: '#f00', secondary: '#00f', name: '' })
    },
    clickable: {
      type: Boolean,
      default: false
    },
    iris: {
      type: String,
      default: 'random'
    },
    i: {
      type: Number,
      default: 0
    }
  },
  computed: mapGetters({ currentTheme: 'themes/current' }),
  methods: {
    dilateIris() {
      /* Randomly changes the border-width on <PrimaryColor>, effectively
       * changing the size of the "iris"
       */
      const iris = this.$el.querySelector('.PrimaryColor')
      iris.style.borderWidth = randomFloat(2.0, 15.0) + 'px'
    }
  }
}
</script>

<style lang="sass" scoped>
.ThemeSwatch
  display: flex
  padding: 0
  margin: 0
  justify-content: center
  align-items: center
  position: relative
  background: transparent
  border: none
  transform: scale(1)
  &:not(.random-iris-dilatation) .PrimaryColor
    margin: 0 !important

.PrimaryColor
  border-style: solid
  border-radius: 50%
  position: absolute
  z-index: 1
  transition: all 0.125s ease

.SecondaryColor
  border-radius: 50%
  position: absolute
</style>
