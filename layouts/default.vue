<template>
  <div class="root" :style="currentTheme.css">
    <ThemePicker />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ThemePicker from '~/components/themes/ThemePicker'

export default {
  components: { ThemePicker },
  computed: mapGetters({
    currentTheme: 'themes/current'
  }),
  actions: mapActions(['themes/setCurrent'])
}
</script>

<style lang="sass">
.root
  background-color: var(--secondary)
  color: var(--primary)
  font-family: Roboto Mono, sans-serif
  min-height: 100vh
  transition: color 0.5s ease 0.25s, background-color 1s ease
body
  margin: 0
  padding: 0
main
  margin: 10px
</style>
