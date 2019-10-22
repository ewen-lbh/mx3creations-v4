<template>
  <menu
    v-click-outside="close"
    class="ThemePicker"
    :class="{ opened: mutOpened }"
  >
    <ul class="swatches">
      <li>
        <theme-swatch
          class="current-theme"
          iris="fixed"
          :pose="mutOpened ? 'dilated' : 'asleep'"
          :theme="current"
          :clickable="true"
          :i="0"
          @click="mutOpened = !mutOpened"
        />
      </li>
      <div class="separator"></div>
      <li v-for="(theme, i) in sorted(notCurrent)" :key="i">
        <theme-swatch
          iris="random"
          :pose="mutOpened ? 'awake' : 'dead'"
          :theme="theme"
          :clickable="true"
          :i="i + 1"
          @click="setCurrent(theme)"
        />
      </li>
      <div class="separator"></div>
      <checkbox
        v-model="mutInverted"
        class="invert"
        variant="text-square"
        name="invert-theme"
        >Inverted</checkbox
      >
    </ul>
  </menu>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ThemeSwatch from '~/components/themes/ThemeSwatch.vue'
import Checkbox from '~/components/ui/Checkbox.vue'

export default {
  name: 'ThemePicker',
  components: { ThemeSwatch, Checkbox },
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { mutOpened: this.opened }
  },
  computed: {
    ...mapGetters('themes', ['notCurrent', 'current', 'sorted', 'inverted']),
    mutInverted: {
      get() {
        return this.inverted
      },
      set(value) {
        return this.setInverted(value)
      }
    }
  },
  methods: {
    ...mapActions('themes', ['setCurrent', 'setInverted']),
    close() {
      /* The current-theme swatch will be overflowing to the left and therefore hidden
      if we don't scroll back to the all-left when the menu has been scrolled over
      */
      this.$el.scrollLeft = 0
      this.mutOpened = false
    }
  }
}
</script>

<style lang="sass" scoped>
.ThemePicker
  &.opened
    overflow-x: auto
    height: 40px
    +mobile
      background-color: var(--secondary)
      +shadow(1.5)
  &:not(.opened)
    overflow-x: hidden
    background-color: transparent
  overflow-y: hidden
  display: flex
  align-items: center
  padding: 20px
  position: sticky
  top: 0
  margin-top: 0
  transition: all 0.25s ease

.swatches
  display: flex
  padding: 0
  margin: 0
  list-style: none

.separator
  width: 5px
  background: #000000
  margin-right: 20px
  transition: transform 0.125s ease 0.125s
  height: 40px
.ThemePicker.opened .separator
  transform: scaleY(1)
.ThemePicker:not(.opened) .separator
  transform: scaleY(0)

.ThemeSwatch
  height: 40px
  width: 40px
  margin-right: 20px
// .ThemePicker:not(.opened) .ThemeSwatch:not(.current-theme)
//   opacity: 0
</style>
